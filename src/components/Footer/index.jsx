import { Container } from "./styles";
import { Link } from "react-router-dom";

import Separator from "../Separator";
import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaPhone,
  FiMail,
} from "react-icons/all";

const Footer = () => {
  return (
    <Container>
      <div className="header">
        <p>Get connected with us on social networks:</p>
        <div className="networks">
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com">
            <FaFacebook size={24} />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com">
            <FaInstagram size={24} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.web.whatsapp.com"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>
      </div>
      <div className="content">
        <div className="section">
          <h3>MGStones</h3>
          <Separator style={{ margin: "1rem 0" }} width="6rem" />
          <p>
            The best Brazilian gemstones and the best prices in American
            territory, you can find here in our store. Welcome and great
            shopping.
          </p>
        </div>
        <Separator vertical height="35%" />
        <div className="section">
          <h3>Useful links</h3>
          <Separator style={{ margin: "1rem 0" }} width="6rem" />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
        <Separator vertical height="35%" />
        <div className="section">
          <h3>Contact Us</h3>
          <Separator
            style={{ margin: "1rem 0", listStyle: "none" }}
            width="6rem"
          />
          <ul>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaPhone size={18} /> +55 (11) 9 9859-3969
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FiMail size={18} /> contact@mgstones.com
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaWhatsapp size={18} /> +55 (11) 9 9859-3969
            </li>
          </ul>
        </div>
      </div>
      <div className="footer">&copy; 2021 Copyright: MGStones.com</div>
    </Container>
  );
};

export default Footer;
