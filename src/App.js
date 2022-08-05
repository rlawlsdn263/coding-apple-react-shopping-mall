import {Navbar, Nav, Container, Row, Col} from 'react-bootstrap';
import {useState} from "react";
import data from './data.js';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Detail from './Detail.js';

function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar className="navbar">
        <Container className="container">
          <Navbar.Brand href="#home" className="home">
            <img src={process.env.PUBLIC_URL+"img/donpen.png"}></img>
            <span>돈키호테</span>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
{/* 
      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link> */}

      <Routes>
        <Route path="/" element={
            <>
              <div className="main-bg"></div>
              <Container className="product-container">
                <Row>
                  {shoes.map((a, i) => {
                      return(
                        <Card shoes={shoes[i]} i={i}></Card>
                      )
                    })}
                </Row>
              </Container>            
            </>
            }
            />
        <Route path="/detail" element={
          <div>
            <div>상세페이지임</div>
            <Detail></Detail>
          </div>
        }/>
      </Routes>

    </div>
  );
}

export default App;

function Card(props) {
  return(
    <Col>
      <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i+1) +'.jpg'} width="80%"/>
      <h5>{props.shoes.title}</h5>
      <p>{props.shoes.price}</p>
    </Col>
  )
}