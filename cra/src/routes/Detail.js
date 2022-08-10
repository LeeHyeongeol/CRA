import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { order } from "../store";
import { useEffect } from "react";

function Detail(props) {
  //detail 안에 shoe 라는 state를 더 만들면 편할듯?
  // 같은 데이터 복사본을 다른곳에 쓰게 되면 수정할 때 관리하기 번거롭다.

  //url 파라미터를 가져오는 기능
  console.log("#####", props);
  let { id } = useParams();
  // console.log(id);

  //만약 상품 순서를 가나다 순으로 정렬하는 버튼을 클릭해 shoe의 상품이 가나다 순으로 정렬되었다고 하자.
  //그렇다면 입력된 id와 다른 순서의 상품이 출력되는 오류를 어떻게 방지할 수 있을까?
  let findItem = props.shoe.find(function (x) {
    return x.id == id;
  });
  console.log("내가찾던것들", findItem, id);
  let reduxStore = useSelector((state) => state);
  let dispatch = useDispatch();

  //localStorage를 가져온 후 배열에 해당 id 값을 추가한 후 localStorage에 추가
  useEffect(() => {
    let takeOff = localStorage.getItem("detailId");
    takeOff = JSON.parse(takeOff);
    //기존에 접속한 상품은 담지 마라 -> 중복 제거 된 배열 (Set 사용)
    console.log("takeOff", takeOff);
    takeOff.push(findItem.id);
    console.log("tatatkeOff", takeOff);
    takeOff = new Set(takeOff); //type of object
    takeOff = Array.from(takeOff);
    localStorage.setItem("detailId", JSON.stringify(takeOff));
  });

  return (
    <Container>
      <Row>
        <Col sm></Col>
        <img src="/logo192.png" width="50%" height="50%" />
        <h4>{findItem.title}</h4>
        <p>{findItem.content}</p>
        <p>{findItem.price}</p>
        <Button
          variant="danger"
          size="sm"
          onClick={() =>
            dispatch(order({ id: findItem.id, name: findItem.title, count: 1 }))
          }
        >
          장바구니에 담기
        </Button>
      </Row>
    </Container>
  );
}

export default Detail;
