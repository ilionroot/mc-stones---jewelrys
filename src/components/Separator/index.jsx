import { Container } from "./styles";

const Separator = ({ style, vertical, width, height }) => {
  return (
    <Container
      style={{
        ...style,
        width: vertical ? (width ? width : "2px") : width ? width : "100%",
        height: vertical ? (height ? height : "100%") : height ? height : "2px",
      }}
    />
  );
};

export default Separator;
