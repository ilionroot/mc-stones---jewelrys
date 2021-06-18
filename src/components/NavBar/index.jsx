import { Container } from "./styles";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Michael - 2.png";

import Menu from "../Menu";

export default function NavBar() {
  return (
    <Container>
      <Menu id="menu" />
      <div
        id="links"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={logo} alt="MG Stones & Jewelry's" />
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
      </div>

      <Link to="/contact">Contact Us</Link>
    </Container>
  );
}
