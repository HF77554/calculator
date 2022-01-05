import { Button } from "react-bootstrap";

const CalcButton = ({ input, onInput }) => {
  return (
    <div className="mb-1 d-grid gap-2 border border-dark rounded">
      {input && (
        <Button variant={input.color} size="sm" onClick={() => onInput(input)}>
          {input.value}
        </Button>
      )}
    </div>
  );
};
export default CalcButton;