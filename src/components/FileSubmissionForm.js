import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import React from "react";
import {uploadFile} from "../util/handlingfirebas";
import {createTutorialDoc} from "../util/handlingfirebas";
import {setTutorialData} from "../util/handlingfirebas";

 
function HandlingTutorialSubmissions() {

  const [description, setDescription] = React.useState();
  const [videoFile, setVideoFile] = React.useState();
  const [thumbnailFile, setThumbnailFile] = React.useState();
  const [videoTag, setVideoTag] = React.useState();
  const [author, setAuthor] = React.useState();
  const [title, setTitle] = React.useState();

  const handleVideoFileSelect = (event) => {
    setVideoFile(event.target.files[0]);
  };

  const handleThumbnailFileSelect = (event) => {
    setThumbnailFile(event.target.files[0]);
  }
  const handleVideoTagsChange = (event) =>{
    setVideoTag(event.target.value);
  }

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
      const tutorialRef = createTutorialDoc(); 
      const  uploadedVideoUrl = await uploadFile(videoFile, `/tutorial-videos/${tutorialRef.id}`);

      const uploadedThumbnailUrl = await uploadFile( thumbnailFile, `/tutorial-video-thumbnail/${tutorialRef.id}`);
   
      const tutorial = {
        title,
        description: description,
        author: author,
        tutorialVideoUrl: uploadedVideoUrl,
        thumbnailsUrl:  uploadedThumbnailUrl,
        videoTag: videoTag
      };

      setTutorialData(tutorialRef, tutorial);
      ("tutorial",tutorial)
     
      // when done, do stuff
    } catch (e) {
      console.log(e);
      // when error, do stuff
    };
  }

  return (
    <main className="videoForm">
    <Form className="form">
    <div className="videoForm-sec1">
    <Form.Label ><h1>VIDEO UPLOAD</h1></Form.Label>
    <Form.Group >
      <Form.Label >Video title</Form.Label>
      <Form.Control onChange={handleVideoTitleChange} type="textarea" placeholder="Video title" />
    </Form.Group>
    <Form.Group className="mb-4"  >
      <Form.Label >Author Name </Form.Label>
      <Form.Control onChange={handleAuthorChange}  type="textarea" placeholder="Author Name" />
    </Form.Group>
    <Form.Group onChange={handleDescriptionChange} className="mb-4" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Description</Form.Label>
      <Form.Control as="textarea" rows={9} />
    </Form.Group>
    <Form.Group className="mb-3"  >
      <Form.Label > Tags </Form.Label>
      <Form.Control onChange={handleVideoTagsChange}  type="textarea" placeholder="Add Tags" />
    </Form.Group>
    <Form.Label >Add a thumbnail: </Form.Label>
    <Form.Group  controlId="formFile" className="mb-3">
      <Form.Label src='thumbnailupload.svg'  className="fileinput" input="file">
      <Form.Control onChange={handleThumbnailFileSelect}  type="file" />
      <img className='uploadImageIcon' src='thumbnailupload.svg'/>
      </Form.Label> 
      </Form.Group>
      </div>

    <div className="videoForm-sec2">
        <Form.Label >Add a video: </Form.Label>
        <div className='videoForm-sec2-half'>
          <div>
            <Form.Group  controlId="formvideoFile" className="mb-3">
            <Form.Label src='../thumbnailupload.svg'  className="fileinput" input="file">
            <Form.Control onChange={handleVideoFileSelect}  type="file" />
            <img className='uploadImageIconvideo' src='cloudupload.svg'/>
            </Form.Label>
            </Form.Group>
          </div>
        

        <Form.Group>
          <Button className='blogformbtn' onClick={handleSubmit} type="submit" > Submit</Button>
        </Form.Group>
      </div>
    </div>
  </Form>  
</main>  

  );
}

export default HandlingTutorialSubmissions;
