import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import { Container, Row,Col } from 'react-bootstrap';
import JumboTron from './components/JumboTron';
import AllTheBooks from './components/AllTheBooks';

function App() {
  
  return (
    <>
      <MyNav/>
      <Container style={{minHeight: "88vh"}}>
        <Row>
          <JumboTron/>
        </Row>
        <Row>
          <AllTheBooks/>
        </Row>
      </Container>
      <MyFooter/>
    </>
  )
}

export default App
