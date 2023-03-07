import React from "react";
import Meta from "@/components/Meta";
import FileSubmissionForm from "@/components/FileSubmissionForm"
import NavBar from "../components/NavBar";
import FooterGrid from "@/components/FooterGrid";

function SignInPage(props) {

  //<ImageCard cardBody={"videouploadcard"}  src={"../cloudupload.svg"}/>
  return (
    <main >
       <NavBar showElement></NavBar>
      <FileSubmissionForm ></FileSubmissionForm>
      <FooterGrid></FooterGrid>
    </main>
  );
}

export default SignInPage;