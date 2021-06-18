import styled from "styled-components";

export const Container = styled.div`
  display: none;

  width: 2.5rem;
  height: 1.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  z-index: 1;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const Bar = styled.span`
  background: var(--dark-green-text);
  width: 100%;
  height: 2px;
  border-radius: 8px;
  transition: 500ms ease;
`;

export const OverlayBackground = styled.div`
  background: rgba(0, 128, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: 500ms ease;
`;

export const MenuContainer = styled.div`
  background: white;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 65%;
  transition: 0.5s ease;
  transform: translate(-100%);

  padding: 5rem 1rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  h3 {
    margin: 1.5rem 0;
    width: 100%;
    font-size: 2rem;
    font-weight: 900;
  }

  .linksContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    width: 100%;

    a {
      padding-left: 1rem;
      font-size: 1.5rem;
      font-weight: 500;
      width: 100%;
      color: var(--dark-green-text);
      text-decoration: none;
      margin: 1rem;
    }
  }
`;
