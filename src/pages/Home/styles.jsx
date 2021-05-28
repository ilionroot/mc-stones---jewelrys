import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 5rem);
  overflow: hidden;
`;

export const View = styled.div`
  width: 100%;
  height: calc(100vh - 5rem);
  overflow: hidden auto;
  display: flex;
  align-items: center;
  justify-content: space-around;

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
    z-index: 999;
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
    bottom: 6.25%;
    left: -98.15%;
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

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;

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
      bottom: 150%;
      left: calc(100vw - 97%);
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
