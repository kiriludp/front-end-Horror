import '../styles/Homepage.css'
import Container from 'react-bootstrap/Container'

export default function Homepage() {

    return (
     <Container fluid className="home">
        <div className="testing">
            <h1>This is a test.</h1>
        </div>
        <div className="text">
        <p>What does this additional text look like </p>
        </div>
     </Container>
    );
  }