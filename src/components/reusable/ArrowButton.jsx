import { Button } from "react-bootstrap";

import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';

const ArrowButton = ({ onCollapse, onPress }) => {
  return (
    <Button className="text-light" variant="secondary" onClick={onPress}>
      {onCollapse ? 
      <AiOutlineArrowUp />
      : 
      <AiOutlineArrowDown />
      }
    </Button>
  );
};
export default ArrowButton;