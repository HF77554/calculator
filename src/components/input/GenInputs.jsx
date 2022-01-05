import { Container } from "react-bootstrap";
import { ButtonGrid } from "../reusable/ButtonGrid";

//import general button constants
import { GEN_BUTTONS } from "../logic/ButtonConstant";

const GenInputs = ({ onInput }) => {
  const grid = GEN_BUTTONS;

  return (
    <Container>
      <ButtonGrid grid={grid} onInput={onInput} />
    </Container>
  );
};
export default GenInputs;