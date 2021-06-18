import { useState, useEffect } from "react";
import {
  Container,
  Divisor,
  VerticalDivisor,
  goDownButtonAnimation,
  leftBarAnimationMobile,
  leftAnimation,
  rightAnimationMobile,
  leftBarAnimation,
  leftAnimationMobile,
  rightAnimation,
} from "./styles";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

import View from "../../components/View";
import Product from "../../components/Product";

import esmeralda1 from "../../assets/products/esmeralda1.webp";
import esmeralda2 from "../../assets/products/esmeralda2.jpg";
import diamante1 from "../../assets/products/diamante1.png";
import diamante2 from "../../assets/products/diamante2.jpg";

import emerald from "../../assets/images/emerald.png";

import $ from "jquery";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

let canExecute = true;

export default function Home() {
  const [selectedId, setSelectedId] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState("Select one...");
  const [weight, setWeight] = useState("Select one...");
  const [carat, setCarat] = useState("Select one...");
  const [price, setPrice] = useState("Select one...");

  function scrolligu() {
    let distanceFromTop = $(document).scrollTop();
    let distanceFromSecondContainer = $("#secondContainer").offset().top;
    let isMobile = window.outerWidth <= 768;

    if (
      distanceFromTop >=
        distanceFromSecondContainer - window.outerHeight * 0.33755274 &&
      distanceFromTop <= distanceFromSecondContainer * 1.11867704 &&
      canExecute
    ) {
      $("#leftContent").css(
        "animation-name",
        isMobile ? leftAnimationMobile.getName() : leftAnimation.getName()
      );
      $("#leftContent > span").css(
        "animation-name",
        isMobile ? leftBarAnimationMobile.getName() : leftBarAnimation.getName()
      );
      $("#leftContent > span > button").css(
        "animation-name",
        goDownButtonAnimation.getName()
      );

      $("#rightContent").css(
        "animation-name",
        isMobile ? rightAnimationMobile.getName() : rightAnimation.getName()
      );

      canExecute = false;
    }
  }

  function moveOn() {
    $("html").animate(
      {
        scrollTop:
          $("#thirdContainer").offset().top - window.outerHeight * 0.08438818,
      },
      500
    );
  }

  const debounce = (func, wait) => {
    let timeout;

    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  useEffect(() => {
    let returnedFunction = debounce(scrolligu, 50);

    $(document).on("scroll", returnedFunction);
  }, []);

  return (
    <Container>
      <View id="firstContainer">
        <div id="resume">
          <h1>MG Stones & Jewelry's</h1>
          <p id="resumeText">
            The best Brazilian gemstones and the best prices in American
            territory, you can find here in our store. Welcome and great
            shopping.
          </p>

          <div className="tryStone">
            <div className="infoDiv">
              <p>
                Name: <b>{name}</b>
              </p>
              <VerticalDivisor />
              <p>
                Weight: <b>{weight}</b>
              </p>
              <VerticalDivisor />
              <p>
                Carat: <b>{carat}</b>
              </p>
              <VerticalDivisor />
              <p>
                Price: <b>{price}</b>
              </p>
            </div>
            <div className="stone">Choose a jewelry to spec</div>
          </div>
        </div>
        <Divisor />
        <motion.ul
          className="itemsContainer"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <AnimateSharedLayout type="crossfade">
            {[1, 2, 3, 4].map((index) => (
              <motion.li
                onClick={() => {
                  setSelectedId(isModalVisible ? null : index);
                  setIsModalVisible(!isModalVisible);
                  switch (isModalVisible ? null : index) {
                    case 1:
                      setName("Emerald 1");
                      setWeight("1.2Kg");
                      setCarat("24");
                      setPrice("$1200");
                      break;
                    case 2:
                      setName("Diamond 1");
                      setWeight("1.7Kg");
                      setCarat("12");
                      setPrice("$3500");
                      break;
                    case 3:
                      setName("Emerald 2");
                      setWeight("0.7Kg");
                      setCarat("16");
                      setPrice("$800");
                      break;
                    case 4:
                      setName("Diamond 2");
                      setWeight("0.56Kg");
                      setCarat("22");
                      setPrice("$4750");
                      break;
                    default:
                      setName("Select one...");
                      setWeight("Select one...");
                      setCarat("Select one...");
                      setPrice("Select one...");
                      return;
                  }
                }}
                key={index}
                className="item"
                variants={item}
              >
                <motion.div layoutId={index} className="card">
                  <img
                    src={(() => {
                      switch (index) {
                        case 1:
                          return esmeralda1;
                        case 2:
                          return diamante1;
                        case 3:
                          return esmeralda2;
                        case 4:
                          return diamante2;
                        default:
                          return;
                      }
                    })()}
                    alt={`Pedra ${index}`}
                  />
                </motion.div>
              </motion.li>
            ))}
            <AnimatePresence>
              {isModalVisible && (
                <motion.div
                  className="modal"
                  onClick={() => {
                    setIsModalVisible(false);
                    setName("Select one...");
                    setWeight("Select one...");
                    setCarat("Select one...");
                    setPrice("Select one...");
                  }}
                  layoutId={selectedId}
                >
                  <img
                    src={(() => {
                      switch (selectedId) {
                        case 1:
                          return esmeralda1;
                        case 2:
                          return diamante1;
                        case 3:
                          return esmeralda2;
                        case 4:
                          return diamante2;
                        default:
                          return;
                      }
                    })()}
                    alt={`Pedra ${selectedId}`}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </AnimateSharedLayout>
        </motion.ul>
      </View>
      <View id="secondContainer">
        <div id="leftContent">
          <img src={emerald} alt="Emerald" />
          <span>
            <button onClick={moveOn}>Move on</button>
          </span>
        </div>
        <div id="rightContent">
          <h2>About us</h2>
          <h3>A text with several points and explanations about the store</h3>
          <p>
            MG Pedras is a company focused on the sale of Brazilian precious
            stones to the whole world. Our commercial headquarters are located
            in the city of Boca Raton (FL). The company is a combination
            (Holding) between a mining company in Brazil, a lapidary and an
            American commercial bureau. Aiming at excellence in the quality of
            stones and expertise in manufacturing processes, the company is born
            that will serve you in an intelligent and personalized way, welcome.
          </p>
        </div>
      </View>
      <View id="thirdContainer">
        <div id="productsContainer">
          <Product image={esmeralda1} name="Esmeralda 1" price="1800.00" />
          <Product image={diamante1} name="Diamante 1" price="1750.00" />
          <Product image={esmeralda2} name="Esmeralda 2" price="2200.00" />
          <Product image={diamante2} name="Diamante 2" price="3400.00" />
        </div>
      </View>
    </Container>
  );
}
