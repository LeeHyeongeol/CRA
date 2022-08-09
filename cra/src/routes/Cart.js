import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";

function Cart() {
  //app.js, detail.js, cart.js 에서 동일한 데이터가 필요할 경우 최상단에 보관
  // redux는 컴포넌트들의 props 없이 state 공유 가능
  let reduxStore = useSelector((state) => state.stock);
  //let reduxStore = useSelector((state) => {return state.stock})
  console.log(reduxStore);

  return (
    <div>
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
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry</td>
            <td>page</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
