import React from "react";
import Meta from "@/components/Meta";
import FileSubmissionForm from "@/components/FileSubmissionForm"
import ImageCard from "@/components/ImageCard";

function SignInPage(props) {
  return (
    <main className="videoForm">
      <FileSubmissionForm></FileSubmissionForm>
      <ImageCard cardBody={"imagecard"} cardImage={"imagecard-image"}/>
    </main>
  


  );
}

export default SignInPage;