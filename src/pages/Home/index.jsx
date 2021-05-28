import { useState } from "react";
import { Container, View, Divisor, VerticalDivisor } from "./styles";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

import esmeralda1 from "../../assets/products/esmeralda1.webp";
import esmeralda2 from "../../assets/products/esmeralda2.jpg";
import diamante1 from "../../assets/products/diamante1.png";
import diamante2 from "../../assets/products/diamante2.jpg";

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

export default function Home() {
  const [selectedId, setSelectedId] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState("Select one...");
  const [weight, setWeight] = useState("Select one...");
  const [carat, setCarat] = useState("Select one...");
  const [price, setPrice] = useState("Select one...");

  return (
    <Container>
      <View>
        <div id="resume">
          <h1>MG Stones & Jewelry's</h1>
          <p id="resumeText">
            The store you were waiting for. Come and buy your jewelrys with
            excellent attendance and several choices!
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
    </Container>
  );
}
