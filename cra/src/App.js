import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import CloseButton from "react-bootstrap/CloseButton";
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import shoes from "../src/img/shoes3.jpeg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import data from "./data.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Detail from "./Detail.js";
function App() {
  let [shoe] = useState(data);
  // console.log(shoes[0]);
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* 페이지 이동 버튼 */}
      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>
      <Link to="/about">네</Link>
      <Routes>
        {/* 보여주고 싶은 내용들은 컴포넌트로 관리하면 좋음^^ */}
        <Route path="/" element={<div>메인페이지임</div>} />
        <Route path="detail" element={<Detail />} />
        <Route path="about" element={<div>어바웃페이지임</div>} />
      </Routes>
      <div
        className="main-bg"
        //css로 하거나 아니면 style 태그 사용
        style={{ backgroundImage: `url(${shoes})` }}
      >
        메인상품
      </div>
      <Container>
        <Row>
          <Col sm>간격</Col>
          <img src="/logo192.png" width="50%" height="50%" />
          <h4>{shoe[0].title}</h4>
          <p>상품설명</p>
          <Col sm>간격</Col>
          <img src="/logo192.png" width="50%" height="50%" />
          <h4>{shoe[1].title}</h4>
          <p>상품설명</p>
          <Col sm>간격</Col>
          <img src="/logo192.png" width="50%" height="50%" />
          <h4>{shoe[2].title}</h4>
          <p>상품설명</p>
        </Row>
      </Container>
    </div>
  );
}

export default App;
