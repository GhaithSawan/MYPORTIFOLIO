import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProjectCard({e}) {
  return (
    <Card style={{ width: '20rem'  , backgroundColor:"#131313" , boxShadow:"0 0 15px #00ffee" , color:"#fff"}}>
      <Card.Img variant="top" src={e?.ProjectImage} className='p-3'/>
      <Card.Body className='text-center'>
        <Card.Title>{e?.ProjectName}</Card.Title>
        <button onClick={()=>{window.open(e?.Link)}} style={{ marginTop:"10px" ,border: "none ", outline: "none", borderRadius: "20px", backgroundColor: "#00ffee", boxShadow: "0 0 25px #00ffee", padding: "10px 15px", fontSize: "20px" }} >View Project</button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;