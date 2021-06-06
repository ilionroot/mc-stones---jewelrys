import styled from "styled-components";

export const Container = styled.div`
  margin-top: 5rem;
  width: 100%;
  height: calc(100vh - 5rem);
  overflow: hidden auto;
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;
