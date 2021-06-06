import styled from "styled-components";

export const Container = styled.div`
  width: 20vw;
  height: 65vh;
  background: whitesmoke;
  transition: 100ms ease;
  cursor: pointer;

  img {
    width: 100%;
    height: 70%;
    object-fit: cover;
  }

  border: 1px solid gray;

  transition: 200ms ease;

  &:hover {
    box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.5);
  }

  #description {
    width: 100%;
    height: 30%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    padding: 1rem;

    hr {
      width: 100%;
      height: 1px;
      background: gray;
    }

    b {
      font-size: 1.4rem;
    }

    p {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 1.25rem;

      button {
        padding: 1rem;
        width: 50%;
        cursor: pointer;
        background: black;
        color: white;
        display: flex;
        align-items: center;
        justify-content: space-around;
        position: relative;

        transition: 100ms ease;

        svg {
          width: 1.25rem;
          height: 1.25rem;
        }

        &:hover {
          background: rgba(0, 0, 0, 0.75);
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 80vw;
  }
`;
