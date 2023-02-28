import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProjectCard(props) {
  return (
    <Card 
    style={{ width: '18rem', zIndex:"0.9" }}
    bg = {props.isDarkMode ? "light" : "dark"}
    text = {props.isDarkMode ? "dark" : "light"}
    border = {props.isDarkMode ? "dark" : "light"}>
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant={props.isDarkMode ? "light" : "dark"} href={props.link}>Check It Out</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard