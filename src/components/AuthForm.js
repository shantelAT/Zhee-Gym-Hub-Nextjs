import React, { useState, useMemo, useContext, createContext,} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { useForm } from "react-hook-form";
import FormField from "@/components/FormField";
import handleAuth from '@/util/auth';
import { useAuth, authContext, signin } from "@/util/auth";
import {
  getAuth,
  onAuthStateChanged,
  signOut as authSignOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";


function AuthForm(props) {
  const authContext = createContext();
  const useAuth = () => useContext(authContext);
  const auth = useAuth();
  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password).then(handleAuth);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [pending, setPending] = useState(false);

  const { handleSubmit, register, errors, getValues } = useForm();

  const submitHandlersByType = {
    signin: ({ email, pass }) => {
      return signin(email, pass).then((user) => {
        // Call auth complete handler
        connectStorageEmulator.log(props.onAuth(user));
        props.onAuth(user);
      });
    },
    signup: ({ email, pass }) => {
      return auth.signup(email, pass).then((user) => {
        props.onAuth(user);
      });
    },
 
  };

  // Handle form submission
  const onSubmit = ({ email, pass }) => {
    console.log("form submitted")
    // Show pending indicator
    setPending(true);

    submitHandlersByType[props.type]({
      email,
      pass,
    }).catch((error) => {
      setPending(false);
      console.log("Issue with log in details")
      //Show error alert message
      props.onFormAlert({
        type: "error",
        message: error.message,
      });
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
         {["signup", "signin", "forgotpass"].includes(props.type) && (  
        <Form.Group controlId="formEmail">
          <FormField  size="lg"name="email" type="email" placeholder="Email"
          {...register('test', { required: true })} />
        </Form.Group>   
       )}
        {["signup", "signin", "forgotpass"].includes(props.type) && (  
        <Form.Group controlId="formPassword">
          <FormField size="lg" name="pass"  type="password" placeholder="Password"
           {...register('test', { required: true })} />
        </Form.Group>
      
        )}
      <Button variant="primary"  block={false}  size="lg"  type="submit" disabled={pending} > 
       {!pending && <span>{props.buttonAction}</span>}

        {pending && (
          <Spinner animation="border" size="sm" role="status"  aria-hidden={true}  className="align-baseline">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )} 
      </Button>
    </Form>
  );
}

export default AuthForm;

