import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import React from "react";
import  { useState } from "react"; 
import {uploadBlogFile} from "../pages/handlingfirebas";
import {createBlogDoc} from "../pages/handlingfirebas";
import {setBlogData} from "../pages/handlingfirebas";
import { TagsInput } from "react-tag-input-component"; 
 
function HandlingBlogSubmissions() {

    const [blogTitle, setBlogTitle] = React.useState();
    const [author, setAuthor] = React.useState();
    const [blogBody, setBlogBody] = React.useState();
    const [blogImage, setBlogImage] = React.useState();
    const [blogTags, setBlogTag] = React.useState();


  const handleBlogTitleChange = (event) => {
    setBlogTitle(event.target.value);
  };

  const handleBlogAuthorChange = (event) => {
    console.log(event.target.value)
    setAuthor(event.target.value);
  };

  const handleBlogImageSelect = (event) => {
    setBlogImage(event.target.files[0]);
  }

  const handleBlogBodyChange = (event) => {
    setBlogBody(event.target.value);
  };
  
  const handleBlogTagsChange = (event) =>{
    console.log(event.target.value)
    setBlogTag(event.target.value)
  }

  const bloghandleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Handled function called")
    try {
      const BlogRef = createBlogDoc(); 
      const  uploadedBlogImageUrl = await uploadBlogFile(blogImage, `/blog-images/${BlogRef.id}`);
   
      const blogPost = {
        blogTitle: blogTitle,
        author: author,
        BlogImage: uploadedBlogImageUrl,
        BlogBody: blogBody,
        BlogTag: blogTags
      };

      setBlogData(BlogRef, blogPost);
      console("blogPost:",blogPost)
       
    } catch (e) {
      console.log(e);   
    };
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
          <Form.Label >Tags: </Form.Label>
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
