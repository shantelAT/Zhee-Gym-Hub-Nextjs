import React from "react";
import Link from "next/link";

function AuthFooter(props) {
  return (
    <div className="AuthFooter text-center text-secondary mt-4 px-2">
      {props.type === "signup" && (
        <>
          {props.showAgreement && (
            <div className="mb-4">
              By signing up, you are agreeing to our{" "}
              <Link href={props.termsPath}>
                <p>Terms of Service</p>
              </Link>{" "}
              and{" "}
              <Link href={props.privacyPolicyPath}>
                <p>Privacy Policy</p>
              </Link>
              .
            </div>
          )}

          {props.signinText}
          <Link href={props.signinPath}>
            <a className="ml-2">{props.signinAction}</a>
          </Link>
        </>
      )}

      {props.type === "signin" && (
        <>
          <a href={props.signupPath}>
            <p>{props.signupAction}</p>
          </a>

          {props.forgotPassAction && (
            <Link href={props.forgotPassPath}>
              <p className="ml-3">{props.forgotPassAction}</p>
            </Link>
          )}
        </>
      )}

      {props.type === "forgotpass" && (
        <>
          {props.signinText}
          <Link href={props.signinPath}>
            <p className="ml-2">{props.signinAction}</p>
          </Link>
        </>
      )}
    </div>
  );
}

export default AuthFooter;
