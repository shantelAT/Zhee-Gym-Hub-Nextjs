import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BlogCard({recomTutorial}) {
  const { title, description, author, tutorialVideoUrl, id, thumbnailsUrl, videoTag} = recomTutorial;
  
  
  return (
    <a className='recom-blogcard-a' href={`/tutorial/${id}`} >

    <div className='recom-blogcard'>
      <div className='recom-image' >
      <img  className='recomblogcard-image' src={thumbnailsUrl} />
      </div>
        
      <div className= 'recom-blogcard-captions'>
          <Card.Title className='recom-blogcard-caption2' > {title}</Card.Title> 
          <p className='recom-blogcard-caption1' > {author}</p>
        </div>
      </div>
      </a> 
  );
}

export default BlogCard;