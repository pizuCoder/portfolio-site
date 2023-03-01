import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProjectCard(props) {
  return (
    <Card 
    style={{ width: '18rem', zIndex:"0.9", marginBottom: "1rem" }}
    bg = {props.isDarkMode ? "light" : "dark"}
    text = {props.isDarkMode ? "dark" : "light"}
    border = {props.isDarkMode ? "dark" : "light"}>
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant={props.isDarkMode ? "dark" : "light"} href={props.link} target='_blank'>Check It Out</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard