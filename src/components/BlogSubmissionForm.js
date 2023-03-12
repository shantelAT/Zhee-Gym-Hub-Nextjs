import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import React from "react";
import  { useState } from "react"; 
import {uploadBlogFile} from "../util/handlingfirebas";
import {createBlogDoc} from "../util/handlingfirebas";
import {setBlogData} from "../util/handlingfirebas";
import { TagsInput } from "react-tag-input-component"; 
import { useRouter } from 'next/router';
import SubmissionModal from "@/components/SubmissionModal"
 
function HandlingBlogSubmissions() {

    const [blogTitle, setBlogTitle] = React.useState();
    const [author, setAuthor] = React.useState();
    const [blogBody, setBlogBody] = React.useState();
    const [blogImage, setBlogImage] = React.useState();
    const [blogTags, setBlogTag] = React.useState();
    const router = useRouter();

  const handleBlogTitleChange = (event) => {
    setBlogTitle(event.target.value);
  };

  const handleBlogAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleBlogImageSelect = (event) => {
    setBlogImage(event.target.files[0]);
  }

  const handleBlogBodyChange = (event) => {
    setBlogBody(event.target.value);
  };
  
  const handleBlogTagsChange = (event) =>{
    setBlogTag(event.target.value)
  }

  const bloghandleSubmit = async (e) => {
  
    try {
      const BlogRef = createBlogDoc(); 
      const  uploadedBlogImageUrl = await uploadBlogFile(blogImage, `/blog-images/${BlogRef.id}`);
      
      const blogPost = {
        blogTitle: blogTitle,
        author: author,
        BlogImage: uploadedBlogImageUrl,
        BlogBody: blogBody,
        BlogTag: blogTags.split(',')
      };
      setBlogData(BlogRef, blogPost);
      
    } catch (e) {
      console.log(e);   
    };
    router.reload();
  }

  return (
    <main className="videoForm">

    
      <Form className="form">
      <div className="blogForm-sec1">  
        <Form.Label ><h1>Write Blog Post</h1></Form.Label>
        <Form.Group >
          <Form.Label >Blog title</Form.Label>
          <Form.Control onChange={handleBlogTitleChange} type="textarea" placeholder="Video title" />
        </Form.Group>
        <Form.Group className="mb-3"  >
          <Form.Label >Author Name </Form.Label>
          <Form.Control onChange={handleBlogAuthorChange}  type="textarea" placeholder="Author Name" />
        </Form.Group>
        <Form.Group onChange={handleBlogBodyChange} className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Blog Body</Form.Label>
          <Form.Control as="textarea" rows={10} />
        </Form.Group>
        
        <Form.Group >
          <Form.Label >Tags: use comma to seperate </Form.Label>
          <Form.Control onChange={handleBlogTagsChange}  name="tags" placeHolder="tags"/>
        </Form.Group>

        <Form.Group  controlId="formFile" className="mb-3">
        <Form.Label >Add an image: </Form.Label>
          <Form.Label src='thumbnailupload.svg'  className="fileinput" input="file">
          <Form.Control onChange={handleBlogImageSelect}  type="file" />
          <img className='uploadImageIcon' src='cloudupload.svg'/>
          </Form.Label> 
        </Form.Group>

        <Form.Group>
          <Button onClick={bloghandleSubmit} type="submit" >
            Submit
          </Button>
        </Form.Group>
        </div>
    </Form> 
    
    </main>
 
  );
 
}

export default HandlingBlogSubmissions;
