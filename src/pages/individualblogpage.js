import React from "react";
import Meta from "@/components/Meta";
import NavBar from "../components/NavBar";
import FooterGrid from "@/components/FooterGrid";
import BlogLayoutCard from "../components/BlogLayoutComponent";

function SignInPage(props) {

    return (
        <main >
           <NavBar showElement></NavBar>
           <BlogLayoutCard></BlogLayoutCard>
          <FooterGrid></FooterGrid>
        </main>
      );
    }
    
    export default SignInPage;    