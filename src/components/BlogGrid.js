import ListGroup from 'react-bootstrap/ListGroup';
import BlogCards from "../components/BlogCards";
import RecommendedBlogCard from "../components/RecommendedBlogCard";

function BlogGrid({blogList}) {
  return (
    <div className='bloggrid-main'>
      <div>
        <ListGroup className='bloggrid' >
        {blogList?.map((eachblog) => (
        <ListGroup.Item >
          <BlogCards blog={eachblog}></BlogCards>
        </ListGroup.Item>
        ))} 
      </ListGroup>
      </div>
      {/* <div>
      <ListGroup className='bloggrid2' >
    {blogList?.map((eachblog) => (
      <ListGroup.Item >
        <RecommendedBlogCard blog={eachblog}></RecommendedBlogCard>
      </ListGroup.Item>
      ))} 
    </ListGroup>
      </div> */}

   
    </div>
  
  );
}

export default BlogGrid;