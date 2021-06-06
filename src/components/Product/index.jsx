import { Container } from "./styles";

import { FiShoppingCart } from "react-icons/all";

const Product = (props) => {
  return (
    <Container>
      <img src={props.image} alt={props.name} />
      <div id="description">
        <b>{props.name}</b>
        <hr />
        <p>
          ${props.price}
          <button>
            <FiShoppingCart />
            Buy
          </button>
        </p>
      </div>
    </Container>
  );
};

export default Product;
