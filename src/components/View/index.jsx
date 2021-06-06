import { Container } from "./styles";

const View = ({ children, className, id }) => {
  return (
    <Container id={id} className={className}>
      {children}
    </Container>
  );
};

export default View;
