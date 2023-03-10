import Card from 'react-bootstrap/Card';

function TextCard({cardclassName, titleclassName, textclassName, showElement }) {
  return (
    <div className={cardclassName} >
      <Card.Body>
        <Card.Title className={titleclassName}>Welcome to Zheé-Gym Hub!</Card.Title>
        <Card.Text className={textclassName}>
        Whether you&apos;re a fitness enthusiast or just starting your fitness journey, 
        our website has something for everyone. Our easy-to-follow tutorials cover a wide range of exercises, from beginner 
        to advanced, so you can find the perfect workout to suit your fitness level.
        <br></br>
        With our website, you&apos;ll have access to a variety of workouts that can help you achieve your fitness goals. 
        Our tutorials are created by certified fitness trainers who have years of experience in the industry, so you can trust 
        that you&apos;re getting high-quality instruction. Our trainers also offer modifications and progressions for each exercise, 
        so you can customize your workout to your needs.
        </Card.Text>
        {showElement ? <Card.Link className='textcard-btn hidden' href="/hubpage">Explore</Card.Link> : <Card.Link className='d-none textcard-btn hidden' href="#">Card Link</Card.Link>}
      </Card.Body>
    </div>
  );
}

export default TextCard;