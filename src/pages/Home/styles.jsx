import styled, { keyframes } from "styled-components";

export const leftAnimation = keyframes`
  0% {
    width: 0;
    opacity: 0;
  }

  50% {
    width: 15%;
    left: 50%;
    top: 50%;
    opacity: 1;
  }

  75% {
    width: 15%;
    left: 15rem;
    top: 10rem;
    opacity: 1;
  }

  100% {
    width: 15%;
    left: 15rem;
    top: 10rem;
    opacity: 1;
  }
  }
`;

export const leftAnimationMobile = keyframes`
  0% {
    width: 0;
    opacity: 0;
  }

  50% {
    width: 35%;
    left: 50%;
    top: 50%;
    opacity: 1;
  }

  75% {
    width: 35%;
    top: 25rem;
    opacity: 1;

    left: 25%;
    top: 15%;
  }

  100% {
    width: 35%;
    top: 25rem;
    opacity: 1;

    left: 25%;
    top: 15%;
  }
  }
`;

export const leftBarAnimation = keyframes`
  0% {
    height: 0px;
  }

  100% {
    height: 50vh;
  }
`;

export const leftBarAnimationMobile = keyframes`
  0% {
    height: 0;
  }

  100% {
    height: 65vh;
    bottom: -360%;
  }
`;

export const goDownButtonAnimation = keyframes`
  0% {
    transform: translateY(25%);
  }
  
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const rightAnimation = keyframes`
  0% {
    height: 4rem;
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 1) 95%,
        rgba(255, 255, 255, 0) 100%
      );
  }

  25% {
    height: 4rem;
    opacity: 1;
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 1) 95%,
        rgba(255, 255, 255, 0) 100%
      );
  }

  50% {
    height: 35%;
    opacity: 1;
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 1) 90%,
        rgba(255, 255, 255, 0) 100%
      );
  }

  100% {
    height: 35%;
    opacity: 1;
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 1) 90%,
        rgba(255, 255, 255, 0) 100%
      );
  }
`;

export const rightAnimationMobile = keyframes`
  0% {
    height: 4rem;
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 1) 95%,
        rgba(255, 255, 255, 0) 100%
      );
  }

  25% {
    height: 4rem;
    opacity: 1;
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 1) 95%,
        rgba(255, 255, 255, 0) 100%
      );
  }

  50% {
    height: 47.5%;
    opacity: 1;
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 1) 90%,
        rgba(255, 255, 255, 0) 100%
      );
  }

  100% {
    height: 47.5%;
    opacity: 1;
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 1) 90%,
        rgba(255, 255, 255, 0) 100%
      );
  }
`;

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 5rem);
  overflow: hidden;

  #firstContainer {
    align-items: center;
    justify-content: space-around;
    overflow: hidden;

    #resume {
      width: 45%;
      height: 35vw;
      padding: 5rem;

      #resumeText {
        margin-left: 1.5rem;
        margin-top: 2rem;
        color: rgba(0, 0, 0, 0.85);
      }

      .tryStone {
        width: 112.5%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2rem;
        .infoDiv {
          height: 5rem;
          p {
            margin-bottom: 2rem;
            color: rgba(0, 0, 0, 0.7);

            b {
              color: rgba(0, 0, 0, 0.9);
            }
          }
        }

        .stone {
          width: 18rem;
          height: 18rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(0, 0, 0, 0.35);
        }
      }
    }

    .itemsContainer {
      position: relative;
      width: 35vw;
      height: 35vw;
      display: grid;
      overflow: visible;
      margin: 0;
      list-style: none;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      gap: 2rem;
      padding: 2rem;
      background: linear-gradient(
        135deg,
        rgba(171, 255, 199, 0.5) 0%,
        rgba(25, 205, 125, 0.5) 50%,
        rgba(171, 255, 199, 0.5) 100%
      );
      border-radius: 50px;
    }

    .item {
      display: flex;
      align-items: center;
      cursor: pointer;
      justify-content: center;
      background: transparent;
      position: relative;
      z-index: 1;
    }

    .card {
      position: absolute;
      z-index: -1;
      height: 100%;
      width: 100%;
      overflow: hidden;
      background: #fff;
      box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.15);
      will-change: transform;
      border-radius: 0.6rem;
      transform-origin: 50% 50% 0px;
      transition: width 0.2s ease, height 0.2s ease;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }

      &:hover {
        width: 105%;
        height: 105%;
      }
    }

    .modal {
      position: absolute;
      bottom: 17.5%;
      left: -85%;
      overflow: hidden;
      min-width: 17rem;
      min-height: 17rem;
      width: fit-content;
      height: fit-content;
      flex: 1 1 auto;
      background: snow;
      pointer-events: all;
      will-change: transform;
      border-radius: 1rem;
      opacity: 1;
      transform-origin: 50% 50% 0px;
      cursor: pointer;

      border-radius: 1.2rem;
      border-width: 6px;
      border-style: dashed;
      border-color: var(--light-green);
      border-style: dashed;
      border-style: dashed;

      img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
  }

  #secondContainer {
    position: relative;
    background: rgba(0, 0, 0, 0.75);
    color: snow;
    overflow: hidden;

    #leftContent {
      position: absolute;
      z-index: 1;

      will-change: left top transform;

      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      opacity: 0;

      /* animation-name: ${leftAnimation}; */
      animation-duration: 2s;
      animation-timing-function: cubic-bezier(0, 0, 0.36, 1.16);
      animation-fill-mode: forwards;

      width: 15%;

      img {
        width: 100%;
      }

      span {
        width: 0.25rem;
        background: rgba(0, 178, 98, 0.25);
        border-radius: 1rem;
        position: absolute;
        right: 50%;
        will-change: right left bottom top transform height;
        z-index: -1;

        transform: translateX(50%);

        /* animation-name: ${leftBarAnimation}; */
        animation-delay: 3s;
        animation-duration: 1s;
        animation-timing-function: cubic-bezier(0, 0, 0.36, 1.16);
        animation-fill-mode: forwards;

        button {
          position: absolute;
          bottom: -17.5%;
          width: 75vw;
          height: 4rem;

          will-change: left top transform;
          background: transparent;
          color: snow;
          cursor: pointer;
          transition: 200ms ease;

          border: 5px solid;

          border-top: none;
          border-left-color: rgba(0, 178, 98, 0.25);
          border-right-color: rgba(0, 178, 98, 0.25);
          border-bottom: none;

          font-size: 1.1rem;

          opacity: 0;

          /* animation-name: ${goDownButtonAnimation}; */
          animation-delay: 4s;
          animation-duration: 1s;
          animation-timing-function: cubic-bezier(0, 0, 0.36, 1.16);
          animation-fill-mode: forwards;

          &:hover {
            background: rgba(0, 178, 98, 0.25);
          }
        }
      }
    }

    #rightContent {
      width: auto;
      position: absolute;
      will-change: left top transform;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      /* white-space: nowrap; */
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;

      opacity: 0;

      /* animation-name: ${rightAnimation}; */
      animation-duration: 2s;
      animation-delay: 1.75s;
      animation-timing-function: cubic-bezier(0, 0, 0.36, 1.16);
      animation-fill-mode: forwards;

      h2 {
        font-size: 4rem;
        text-align: center;
        margin-bottom: 1rem;
      }

      p {
        font-size: 1.5rem;
        margin-bottom: 2rem;
      }

      ul li {
        font-size: 1.15rem;
        margin-bottom: 0.5rem;
      }
    }
  }

  #thirdContainer {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    #productsContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 90%;
      height: 75%;
      overflow: hidden;
    }
  }

  @media screen and (max-width: 768px) {
    #firstContainer {
      #resume {
        padding: 1.5rem;
        height: fit-content;
        width: 100%;

        #resumeText {
          width: 90%;
          margin: 1rem;
        }
      }

      .modal {
        bottom: 170%;
        left: calc(100vw - 95%);
        min-width: 15rem;
        min-height: 15rem;
        position: absolute;
      }

      .tryStone {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: fit-content;
        margin-left: -1.25rem;
        .infoDiv {
          display: flex;
          justify-content: center;
          width: fit-content;
          height: fit-content;
          text-align: center;
          margin: 0 0 0 -1rem;
          b {
            font-size: 0.85rem;
          }
        }

        .stone {
          min-height: 250px;
          min-width: 250px;
          width: 37vw !important;
          height: 37vw !important;
        }
      }

      .itemsContainer {
        border-radius: 2rem;
        width: 90%;
        height: 6rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(1, 1fr);

        padding: 3rem;

        .card {
          width: 3.5rem;
          height: 3.5rem;
        }
      }
    }

    #secondContainer {
      #leftContent {
        /* animation-name: ${leftAnimationMobile}; */

        span {
          left: 0%;
          bottom: 50%;
          /* animation-name: ${leftBarAnimationMobile}; */

          button {
            width: 85vw;
            left: 0;
            bottom: -13.5%;
            border-width: 0.25rem;

            transform: translateX(0);
          }
        }
      }

      #rightContent {
        padding: 2rem;
        width: 100%;
        top: 50%;
        left: 55%;
        height: 100%;
        /* animation-name: ${rightAnimationMobile}; */

        h2 {
          color: white;
          text-align: start;
        }

        p {
          font-size: 1.3rem;
          color: white;
        }

        ul li {
          font-size: 1rem;
          margin-left: 0.5rem;
        }
      }
    }

    #thirdContainer {
      height: auto;
      padding-bottom: 2rem;
      #productsContainer {
        flex-direction: column;
      }
    }
  }
`;

export const Divisor = styled.div`
  background: rgba(0, 0, 0, 0.5);
  border-radius: 1rem;
  height: 50%;
  width: 0.3rem;

  @media screen and (max-width: 768px) {
    width: 50%;
    height: 0.1rem;
    margin-top: -0rem;
  }
`;

export const VerticalDivisor = styled.div`
  display: none;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 1rem;
  height: 8vh;
  width: 0.1rem;
  margin: 0 1rem;
  @media screen and (max-width: 768px) {
    display: initial;
  }
`;
