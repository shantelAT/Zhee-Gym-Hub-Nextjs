import ListGroup from 'react-bootstrap/ListGroup';
import BlogCards from "../components/BlogCards";

function BlogGrid({blogList}) {
  console.log("{blogList}",{blogList})
  return (
    <div className='bloggrid-main'>
      <ListGroup className='bloggrid' >
      {blogList?.map((eachblog) => (
      <ListGroup.Item >
        <BlogCards blog={eachblog}></BlogCards>
      </ListGroup.Item>
      ))} 
    </ListGroup>
    </div>
  
  );
}

export default BlogGrid;