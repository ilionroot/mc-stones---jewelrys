import { Container } from "./styles";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Michael - 2.png";

export default function NavBar() {
  return (
    <Container>
      <img src={logo} id="logo" alt="MG Stones & Jewelry's" />
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
