import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';


import React from 'react';
import Footer from './Footer'
import Nav from './Navbar'
import Content from './Content';
import Container from 'react-bootstrap/Container'


function App() {

  return (
      <>
        <div style={{maxHeight: "100vh", overflowY: "auto"}}>
          <Container id="parent-container" fluid style={{ padding: "0px" }}>
            <Container fluid style={{ flex: "1" }}>
              <Nav />
            </Container>
            <Content />
            <Container>
              <Footer /> 
            </Container>
          </Container>
        </div>
        <div id="stars" style={{display: "absolute"}} />
      </>
  );
}

export default App;
