import { useEffect, useRef } from "react";
import { Container, Bar, MenuContainer, OverlayBackground } from "./styles";

import logo from "../../assets/images/Michael - 2.png";
import Separator from "../Separator";

import { Link } from "react-router-dom";

import "./index.css";

const Menu = () => {
  const menuContainerRef = useRef();
  const overlayBackgroundRef = useRef();

  const bar1Ref = useRef();
  const bar2Ref = useRef();
  const bar3Ref = useRef();

  const logoRef = useRef();

  useEffect(() => {
    overlayBackgroundRef.current.style.display = "none";
    overlayBackgroundRef.current.style.opacity = 0;
  }, []);

  const toggleLogo = () => {
    logoRef.current.classList.toggle("showLogo");
  };

  const toggleBarAnimation = () => {
    bar1Ref.current.classList.toggle("barToggle1");
    bar2Ref.current.classList.toggle("barToggle2");
    bar3Ref.current.classList.toggle("barToggle3");
  };

  const toggleMenu = () => {
    menuContainerRef.current.classList.toggle("showMenu");

    console.log(overlayBackgroundRef.current.style.display);

    overlayBackgroundRef.current.style.display === "none"
      ? (() => {
          toggleLogo();
          toggleBarAnimation();
          overlayBackgroundRef.current.style.display = "initial";
          setTimeout(() => {
            overlayBackgroundRef.current.style.opacity = 1;
          }, 100);
        })()
      : (() => {
          toggleLogo();
          toggleBarAnimation();
          overlayBackgroundRef.current.style.opacity = 0;
          setTimeout(() => {
            overlayBackgroundRef.current.style.display = "none";
          }, 500);
        })();
  };

  return (
    <>
      <Container onClick={toggleMenu}>
        <Bar ref={bar1Ref} />
        <Bar ref={bar2Ref} />
        <Bar ref={bar3Ref} />
      </Container>

      <img src={logo} ref={logoRef} className="logo" alt="MG Stones" />

      <OverlayBackground ref={overlayBackgroundRef} onClick={toggleMenu} />
      <MenuContainer ref={menuContainerRef}>
        <Separator
          width="100%"
          style={{ backgroundColor: "rgba(0,0,0,0.25)" }}
        />
        <h3>Menu</h3>
        <div className="linksContainer" onClick={toggleMenu}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>
      </MenuContainer>
    </>
  );
};

export default Menu;
