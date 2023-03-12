import React from "react";
import Meta from "@/components/Meta";
import FileSubmissionForm from "@/components/FileSubmissionForm"
import NavBar from "../components/NavBar";
import FooterGrid from "@/components/FooterGrid";
import BlogSubmissionForm from "@/components/BlogSubmissionForm";
import { requireAuth } from "@/util/auth";

function SignInPage(props) {

    return (
        <main >
          
           <NavBar ></NavBar>
          <BlogSubmissionForm></BlogSubmissionForm>
          <FooterGrid></FooterGrid>
        </main>
      );
    }
    export default SignInPage;
    // export default requireAuth(SignInPage);