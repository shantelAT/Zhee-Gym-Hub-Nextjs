import ListGroup from 'react-bootstrap/ListGroup';
import BlogCards from "../components/BlogCards";
import RecommendedBlogCard from "./RecommendedVideoCard";

function BlogGrid({recomTutorial}) {
  return (
    <main className='bloggrid-main'>
      <h2>Recommended Videos</h2>
    <div >
       <div>
      <ListGroup className='bloggrid2' >
    {recomTutorial?.map((eachVideo) => (
      <ListGroup.Item key={eachVideo.id}>
        <RecommendedBlogCard recomTutorial={eachVideo}></RecommendedBlogCard>
      </ListGroup.Item>
      ))} 
    </ListGroup>
      </div> 
      </div>
    </main>
    

   
    
  
  );
}

export default BlogGrid;