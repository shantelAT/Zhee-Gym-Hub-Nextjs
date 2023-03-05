import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VideoCard from './VideoCard';
import {videosTutorials, docs} from "@/pages/hubpage";


export default function VideoGrid({videosTutorials}) {  //collect list of videos from firebase storage
console.log("videosTutorial:", videosTutorials)

  return (
    <div className='productgrid'>
      <Row>   
       {videosTutorials?.map((eachtutorial) => (
        <Col  > 
          <VideoCard tutorial={eachtutorial} /> 
        </Col>
        
        ))}
      </Row>
    </div>
    
    
  );
  
  console.log("tutorial:",tutorial)
    /*
{thumbnailList.map((url) => {
        return(
          <Col> 
          <VideoCard thumbnail={url}/> 
          </Col>
        ) 
        })}

        const docs = videosTutorial.map((video) => {  //loop through list
          const data = doc.data()
          data.id = doc.id

          return data
        })
        console.log("docs from:",docs)

        < {videosTutorial?.map(({eachtutorial}) => (
        <Col key={eachtutorial.id} > 
          <VideoCard tutorial={eachtutorial} /> 
        </Col>
        ))}
*/
}


