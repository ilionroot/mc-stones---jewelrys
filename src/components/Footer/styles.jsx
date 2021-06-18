import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 45vh;
  overflow: hidden;

  .header {
    width: 100%;
    height: 15%;
    background: var(--green-text);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3rem;

    p {
      font-size: 1.1rem;
    }

    .networks {
      a {
        text-decoration: none;
        color: black;
        margin: 0 1rem;
      }
    }
  }

  .content {
    background: rgba(0, 0, 0, 0.75);
    width: 100%;
    height: 75%;
    padding: 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    .section {
      max-width: 25%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: 0 1rem;

      h3 {
        font-size: 1.5rem;
        color: rgba(255, 255, 255, 0.75);
      }

      p {
        color: rgba(255, 255, 255, 0.75);
      }

      ul {
        padding: 0 1rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        li {
          color: rgba(255, 255, 255, 0.75);
          margin: 0.5rem 0;

          svg {
            margin-right: 1rem;
          }

          a {
            text-decoration: none;
            color: rgba(255, 255, 255, 0.75);
          }
        }
      }
    }
  }

  .footer {
    background: rgba(0, 0, 0, 0.9);
    color: gray;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10%;
  }

  @media screen and (max-width: 768px) {
    height: auto;
    .header {
      padding: 0 1rem;
      height: 5rem;
      p {
        font-size: 0.8rem;
        width: 45%;
      }
      .networks {
        a {
          text-decoration: none;
          color: black;
          margin: 0 1rem;
        }
      }
    }

    .content {
      height: auto;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;

      .section {
        overflow: hidden;
        height: auto;
        margin: 1.5rem;
        max-width: 100%;
      }
    }

    .footer {
      height: 3rem;
    }
  }
`;
