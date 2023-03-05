import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import React from "react";
import {uploadFile} from "../pages/handlingfirebas";
import {createTutorialDoc} from "../pages/handlingfirebas";
import {setTutorialData} from "../pages/handlingfirebas";

 
function TextControlsExample() {
  const [description, setDescription] = React.useState();
  const [videoFile, setVideoFile] = React.useState();
  const [author, setAuthor] = React.useState();
  const [title, setTitle] = React.useState();

  const handleFileSelect = (event) => {
    //console.log("event", event.target.files[0]);
    setVideoFile(event.target.files[0]);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleVideoTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const tutorialRef = createTutorialDoc(); // this is the object added to db
      
      const  uploadedVideoUrl = await uploadFile(
        videoFile, 
        `/tutorial-videos/${tutorialRef.id}`
      );
      console.log("uploadedVideoUrl:", uploadedVideoUrl)
      
   
      const tutorial = {
        title,
        description: description,
        author: author,
        tutorialVideoUrl: uploadedVideoUrl,
       // thumbnailsUrl:  uploadedVideoThumbnailUrl
      };

      setTutorialData(tutorialRef, tutorial);
     
      // when done, do stuff
    } catch (e) {
      console.log(e);
      // when error, do stuff
    };
  }
    
  


  return (

    <Form>
      <Form.Group >
        <Form.Label >Video title</Form.Label>
        <Form.Control onChange={handleVideoTitleChange} type="textarea" placeholder="Video title" />
      </Form.Group>
      <Form.Group className="mb-3"  >
        <Form.Label >Author Name </Form.Label>
        <Form.Control onChange={handleAuthorChange}  type="textarea" placeholder="Author Name" />
      </Form.Group>
      <Form.Group onChange={handleDescriptionChange} className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control onChange={handleFileSelect}  type="file" />
      </Form.Group>
      <Button onClick={handleSubmit} variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
  );
}

export default TextControlsExample;