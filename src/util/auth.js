import React, {
  useState,
  useEffect,
  useMemo,
  useContext,
  createContext,
} from "react";
import queryString from "query-string";
import {
  getAuth,
  onAuthStateChanged,
  signOut as authSignOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider,
  sendEmailVerification,
  checkActionCode,
  applyActionCode,
  getAdditionalUserInfo,
  updateEmail as authUpdateEmail,
  updateProfile as authUpdateProfile,
  updatePassword as authUpdatePassword,
  sendPasswordResetEmail as authSendPasswordResetEmail,
  confirmPasswordReset as authConfirmPasswordReset,
} from "firebase/auth";
import { firebaseApp } from "./firebase";
import { useUser, createUser, updateUser } from "./db";
import router from "next/router";


// Whether to merge extra user data from database into `auth.user`
const MERGE_DB_USER = true;
// Whether to send email verification on signup
const EMAIL_VERIFICATION = true;

// Initialize Firebase auth
const auth = getAuth(firebaseApp);

const authContext = createContext();
export const useAuth = () => useContext(authContext);
// This should wrap the app in `src/pages/_app.js`
export function AuthProvider({ children }) {
  const auth = useAuthProvider();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook that creates the `auth` object and handles state. This is called from `AuthProvider` above (extracted out for readability)
function useAuthProvider() {
  // Store auth user in state `user` will be object, `null` (loading) or `false` (logged out)
  const [user, setUser] = useState(null);

  // Merge extra user data from the database  This means extra user data (such as payment plan) is available as par  of `auth.user` and doesn't need to be fetched separately. Convenient!
 // let finalUser = useMergeExtraData(user, { enabled: MERGE_DB_USER });

  // Add custom fields and formatting to the `user` object
  //finalUser = useFormatUser(finalUser);

  // Handle response from auth functions (`signup`, `signin`, and `signinWithProvider`)
  const handleAuth = async (response) => {
    const { user } = response;
    const { isNewUser } = getAdditionalUserInfo(response);

    // Ensure Firebase user is ready before we continue
    await waitForFirebase(user.uid);

    // Create the user in the database if they are new
    if (isNewUser) {
      await createUser(user.uid, { email: user.email });
      // Send email verification if enabled
      // if (EMAIL_VERIFICATION) {
      //   sendEmailVerification(auth.currentUser);
      // }
    }

    // Update user in state
    setUser(user);
    return user;
  };

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      handleAuth
    );
  };

  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password).then(handleAuth);
  };

  const signinWithProvider = (name) => {
    const provider = authProviders.find((p) => p.name === name).get();
    return signInWithPopup(auth, provider).then(handleAuth);
  };

  const signout = () => {
    return authSignOut(auth);
  };


  useEffect(() => {
    // Subscribe to user on mount
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    // Unsubscribe on cleanup
    return () => unsubscribe();
  }, []);

  return {
    user,
    signup,
    signin,
    signinWithProvider,
     signout,
    // sendPasswordResetEmail,
    // confirmPasswordReset,
    // updatePassword,
    // updateProfile,
  };
}

function useFormatUser(user) {
  // Memoize so returned object has a stable identity
  return useMemo(() => {
    // Return if auth user is `null` (loading) or `false` (not authenticated)
    if (!user) return user;
    const providerData = ["password", "google", "github"]
    const providers = user.providerData.map(({ providerId }) => {
      return authProviders.find((p) => p.id === providerId).name;
    });

    return {
      // Include full auth user data
      ...user,
      // Alter the names of some fields
      name: user.displayName,
      picture: user.photoURL,
      // User's auth providers
      providers: providers,
    };
  }, [user]);
}


// A Higher Order Component for requiring authentication
export const requireAuth = (Component) => {
  return function RequireAuthHOC(props) {
    // Get authenticated user
    const auth = useAuth();

    useEffect(() => {
      // Redirect if not signed in
      if (auth.user === false) {
        router.replace("/auth/signin");
      }
    }, [auth]);

    // Show loading indicator
    // We're either loading (user is `null`) or about to redirect from above `useEffect` (user is `false`)
    if (!auth.user) {
      return <p>Loading...</p>;
    }

    // Render component now that we have user
    return <Component {...props} />;
  };
};

const authProviders = [
  {
    id: "google.com",
    name: "google",
    get: () => new GoogleAuthProvider(),
  },
  
];

// Wait for Firebase user to be initialized before resolving promise
// and taking any further action (such as writing to the database)
const waitForFirebase = (uid) => {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // Ensure we have a user with expected `uid`
      if (user && user.uid === uid) {
        resolve(user); // Resolve promise
        unsubscribe(); // Prevent from firing again
      }
    });
  });
};

// const getFromQueryString = (key) => {
//   return queryString.parse(window.location.search)[key];
// };
