import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BlogCard({blog}) {

console.log("blog", blog)
  const { title, description, author, tutorialVideoUrl, thumbnailsUrl, videoTag} = blog;
  console.log("{tutorialVideoUrl}:",{tutorialVideoUrl})
  
  return (
    <div className='blogcard'>

      <div >
      <img  className='blogcard-image' src={tutorialVideoUrl} />
      </div>
        
      <div className= 'blogcard-captions'>
        <div className='blogcard'>
          <Card.Img class="card-avatar" src='../aboutus.svg'/>
          <div >
          <Card.Text className='videocard-caption2'> {author}</Card.Text>
          <Card.Text className='videocard-caption2'> Date of Published</Card.Text>
          </div>
        </div  >

        <Card.Title className='videocard-caption1' > {title}</Card.Title>
        <Card.Text className='videocard-caption2'> {description}</Card.Text> 
        <Button className='productcard-btn'>Read More ..</Button>
           
          </div>
      </div>
      
  );
}

export default BlogCard;