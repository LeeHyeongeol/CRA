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
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import data from "./data.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";
import axios from "axios";
import Detail from "./routes/Detail.js";
import Cart from "./routes/Cart";

function App() {
  let obj = {
    name: "Lee",
  };
  //유저가 처음 접속 시 localStorage 빈 배열 생성
  useEffect(() => {
    localStorage.getItem("detailId") !== undefined
      ? localStorage.getItem("detailId")
      : localStorage.setItem("detailId", JSON.stringify([]));
  }, []);

  let [shoe] = useState(data);
  //페이지 이동을 도와주는 함수
  let navigate = useNavigate();
  // console.log(shoes[0]);
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate("/home");
            }}
          >
            ShoeShop
          </Navbar.Brand>
          <Nav.Link
            onClick={() => {
              navigate("/home");
            }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("/cart");
            }}
          >
            Cart
          </Nav.Link>
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
                Detail
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
        {/* 페이지 여러개 만들고 싶을 땐 url 파라미터 사용! */}
        <Route path="/detail/:id" element={<Detail shoe={shoe} />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

function Card(props) {
  let navigate = useNavigate();
  console.log(props.i);
  let num = props.i - 1;
  return (
    <>
      <Col sm></Col>
      <img
        src="/logo192.png"
        width="10%"
        height="10%"
        onClick={() => {
          navigate(`/detail/${num}`);
        }}
      />
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
