import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BlogCard({blog}) {

console.log("blog", blog)
  const { blogTitle, BlogBody, createdAt, author,  BlogImage, BlogTag} = blog;
  
  
  return (
    <div className='blogcard'>

      <div >
      <img  className='blogcard-image' src={BlogImage} />
      </div>
        
      <div className= 'blogcard-captions'>
        <div className='blogcard'>
          <Card.Img class="card-avatar" src='../aboutus.svg'/>
          <div >
          <Card.Text className='videocard-caption2'> {author}</Card.Text>
          <Card.Text className='videocard-caption2'> </Card.Text>
          </div>
        </div  >

        <Card.Title className='videocard-caption1' > {blogTitle}</Card.Title>
        <Card.Text className='videocard-caption2'> {BlogBody} ...</Card.Text> 
        <Button href="/individualblogpage" className='productcard-btn'>Read More</Button>
           
          </div>
      </div>
      
  );
}

export default BlogCard;