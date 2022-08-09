import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import { changeName, upAge, downAge, upCount, downCount } from "../store";

function Cart() {
  //app.js, detail.js, cart.js 에서 동일한 데이터가 필요할 경우 최상단에 보관
  // redux는 컴포넌트들의 props 없이 state 공유 가능
  let reduxStore = useSelector((state) => state);
  console.log("##reduxStore", reduxStore.stockInfo);
  //let reduxStore = useSelector((state) => {return state.stock})
  // console.log(reduxStore[0].name);
  //컴포넌트 간 공유가 필요 없으면 redux 안써도 됨!

  let dispatch = useDispatch();

  return (
    <div>
      <h5>
        {reduxStore.user.name} {reduxStore.user.age}의 장바구니
      </h5>
      <button
        onClick={() => {
          dispatch(upAge());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(downAge());
        }}
      >
        -
      </button>
      <Table>
        <thead>
          {/* tr은 가로줄 */}
          <tr>
            {/* tr or td는 하나의 열을 나타냄 */}
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {reduxStore.stockInfo.map((a, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{reduxStore.stockInfo[i].name}</td>
              <td>{reduxStore.stockInfo[i].count}</td>
              <td>@mdo</td>
              <td>
                <button
                  onClick={() => {
                    //changeName()을 실행해달라고 store.js에 부탁하는 역할
                    dispatch(upCount(i));
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    //changeName()을 실행해달라고 store.js에 부탁하는 역할
                    dispatch(downCount(i));
                  }}
                >
                  -
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
