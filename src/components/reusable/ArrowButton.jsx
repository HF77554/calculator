import { Button } from "react-bootstrap";

const ArrowButton = ({ onCollapse, onPress }) => {
  return (
    <Button className="text-light" variant="secondary" onClick={onPress}>
      {onCollapse ? "<" : ">"}
    </Button>
  );
};
export default ArrowButton;