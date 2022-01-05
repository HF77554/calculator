import { Container } from "react-bootstrap";

import TrigInputs from "./TrigInputs";
import GenInputs from "./GenInputs";

const InputHub = ({ onInput }) => {
  return (
    <Container className="mb-2">
      <TrigInputs onInput={onInput} />
      <GenInputs onInput={onInput} />
    </Container>
  );
};
export default InputHub;