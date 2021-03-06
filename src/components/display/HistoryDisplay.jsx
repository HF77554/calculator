import {useState} from 'react'
import { Container, Row, Col } from "react-bootstrap";

import ArrowButton from "../reusable/ArrowButton";
import HistoryItems from './HistoryItems';

const HistoryDisplay = ({ onHistory, onSelect }) => {
  const [classStyle, classStyleTask] = useState('historyDisplay')
  const [collapsed, collapsedTask] = useState(true);

  const overflowHandler = () => {
    collapsedTask(!collapsed)
    if (classStyle === 'historyDisplay') {
      classStyleTask('historyDisplayOverflow')
    } else {
      classStyleTask('historyDisplay')
    }
  }
  
  return (
    <Container>
      <Row className='mt-2'>
        <Col className={classStyle} xs={10}>
          {onHistory && <HistoryItems onHistory={onHistory} onCollapsed={collapsed} onSelect={onSelect} />}
        </Col>
        <Col xs={2}>
          <ArrowButton onCollapse={collapsed} onPress={() => overflowHandler()} onSize={'sm'} onVariant={'dark'} />
        </Col>
      </Row>
    </Container>
  );
};
export default HistoryDisplay;