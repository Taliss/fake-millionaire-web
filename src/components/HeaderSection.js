import { AmountInput } from './AmountInput';
import { DateTimePicker } from './DateTimePicker';
import { Space, Row, Col } from 'antd';

export const HeaderSection = () => {
  return (
    <Row className="gutter-row">
      <Col>
        <Space size={10}>
          <AmountInput />
          <DateTimePicker />
        </Space>
      </Col>
    </Row>
  );
};
