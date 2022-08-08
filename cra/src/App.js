import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import CloseButton from "react-bootstrap/CloseButton";
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import jordan from "../src/img/airjordan.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import data from "./data.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";
import Detail from "./routes/Detail.js";

function App() {
  let [shoe] = useState(data);
  //페이지 이동을 도와주는 함수
  let navigate = useNavigate();
  // console.log(shoes[0]);
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                onClick={() => {
                  navigate("/home");
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/detail");
                }}
              >
                Detailzz
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/about");
                }}
              >
                About
              </Nav.Link>
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
      {/* <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>
      <Link to="/about">네</Link> */}
      <Routes>
        {/* 보여주고 싶은 내용들은 컴포넌트로 관리하면 좋음^^ */}
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {shoe.map((a, i) => {
                    return <Card shoe={shoe[i]} i={i + 1}></Card>;
                  })}
                </div>
              </div>
            </>
          }
        />
        <Route
          path="/Home"
          element={
            <>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {shoe.map((a, i) => {
                    return <Card shoe={shoe[i]} i={i + 1}></Card>;
                  })}
                </div>
              </div>
            </>
          }
        />
        {/* /* path="*" 정의된 루트 이외의 루트 */}
        {/* nested routes는 route 작성이 간단해지는 특성이 있다 */}
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버들</div>} />
          <Route path="location" element={<div>회사위치</div>} />
        </Route>
      </Routes>
      {/* <div
        className="main-bg"
        //css로 하거나 아니면 style 태그 사용
        style={{ backgroundImage: `url(${jordan})` }}
      ></div> */}
      {/* <Container>
        <Row>
          {shoe.map((a, i) => {
            return <Card shoe={shoe[i]} i={i}></Card>;
          })}
        </Row>
      </Container> */}
    </div>
  );
}

function Card(props) {
  return (
    <>
      <Col sm></Col>
      <img src="/logo192.png" width="10%" height="10%" />
      <h4>{props.shoe.title}</h4>
      <p>{props.shoe.content}</p>
      <p>{props.shoe.price}</p>
    </>
  );
}

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      {/* nested route에 사용 */}
      <Outlet></Outlet>
    </div>
  );
}

export default App;
