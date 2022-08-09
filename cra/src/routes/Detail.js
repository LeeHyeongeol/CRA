import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { order } from "../store";

function Detail(props) {
  //detail 안에 shoe 라는 state를 더 만들면 편할듯?
  // 같은 데이터 복사본을 다른곳에 쓰게 되면 수정할 때 관리하기 번거롭다.

  //url 파라미터를 가져오는 기능
  console.log("#####", props);
  let { id } = useParams();
  console.log(id);
  //만약 상품 순서를 가나다 순으로 정렬하는 버튼을 클릭해 shoe의 상품이 가나다 순으로 정렬되었다고 하자.
  //그렇다면 입력된 id와 다른 순서의 상품이 출력되는 오류를 어떻게 방지할 수 있을까?
  let findItem = props.shoe.find(function (x) {
    return x.id == id;
  });
  console.log(findItem);
  let reduxStore = useSelector((state) => state);
  let dispatch = useDispatch();

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
