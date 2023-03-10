import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BlogCard({blog}) {

console.log("RecommendedBlogCard", blog)
  const { blogTitle, BlogBody, createdAt, author, id, BlogImage, BlogTag} = blog;
  
  
  return (
    <a className='recom-blogcard-a' href={`/blogs/${id}`} >

    <div className='recom-blogcard'>
      <div className='recom-image' >
      <img  className='recomblogcard-image' src={BlogImage} />
      </div>
        
      <div className= 'recom-blogcard-captions'>
          <Card.Title className='recom-blogcard-caption2' > {blogTitle}</Card.Title> 
          <p className='recom-blogcard-caption1' > {author}</p>
        </div>
      </div>
      </a> 
  );
}

export default BlogCard;