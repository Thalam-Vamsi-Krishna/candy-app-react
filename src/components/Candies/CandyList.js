import { useContext } from "react";
import { Table, Button, Container } from "react-bootstrap";
import CartContext from "../Store/CartContext";

const CandyList = (props) => {
  const { candies } = props;
  const cartCtx = useContext(CartContext);
  return (
    <Container className="mx-auto my-4">
      <Table hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {candies.map((candy, index) => (
            <tr key={index}>
              <td>{candy.name}</td>
              <td>{candy.desc}</td>
              <td>{candy.price}</td>
              <td>
                <Button
                  variant="danger"
                  style={{ marginRight: "15px" }}
                  onClick={() => cartCtx.addItem(candy, 1)}
                >
                  Buy 1
                </Button>
                <Button
                  variant="danger"
                  style={{ marginRight: "15px" }}
                  onClick={() => cartCtx.addItem(candy, 2)}
                >
                  Buy 2
                </Button>
                <Button
                  variant="danger"
                  onClick={() => cartCtx.addItem(candy, 3)}
                >
                  Buy 3
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default CandyList;
