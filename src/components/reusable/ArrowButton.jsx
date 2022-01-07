import { Button } from "react-bootstrap";
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';


const ArrowButton = ({ onCollapse, onPress, onVariant, onSize }) => {

  return (
    <Button className="text-light" size={onSize} variant={onVariant ? onVariant : 'secondary'} onClick={onPress}>
      {onCollapse ? 
      <AiOutlineArrowUp />
      : 
      <AiOutlineArrowDown />
      }
    </Button>
  );
};
export default ArrowButton;