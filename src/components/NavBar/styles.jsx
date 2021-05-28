import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 5rem;
  background: snow;
  box-shadow: 0 0 15px -7.5px black;
  overflow: visible;

  display: flex;
  align-items: center;
  justify-content: space-around;

  a {
    color: var(--dark-green-text);
    text-decoration: none;
    margin: 3rem;
    font-size: 1.2rem;
    transition: 200ms ease;
    outline: 0;

    &:hover,
    &:focus {
      filter: brightness(0);
    }
  }

  img {
    width: 6rem;
  }

  #logo {
    display: none;
  }

  @media screen and (max-width: 768px) {
    #links {
      display: none !important;
    }

    #logo {
      display: initial;
    }
  }
`;
