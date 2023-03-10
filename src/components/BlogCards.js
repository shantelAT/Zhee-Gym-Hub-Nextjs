import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BlogCard({blog}) {

console.log("blog", blog)
  const { blogTitle, BlogBody, createdAt, author, id, BlogImage, BlogTag} = blog;
  
  
  return (
    <div className='blogcard'>

      <div >
      <img  className='blogcard-image' src={BlogImage} />
      </div>
        
      <div className= 'blogcard-captions'>
        <div className='blogcard-caption1'>
          <img className="card-avatar" src='../aboutus.svg'/>
          <div >
          <Card.Text className='blogcard-caption1' > {author}</Card.Text>
          </div>
        </div  >

        <Card.Title className='blogcard-caption2' > {blogTitle}</Card.Title>
        <Card.Text className='blogcard-caption3'> {BlogBody} ...</Card.Text> 
        <Button  href={`/blogs/${id}`} className='productcard-btn'>Read More</Button>
           
          </div>
      </div>
      
  );
}

export default BlogCard;