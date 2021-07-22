import './App.css';
import 'antd/dist/antd.css';
import { DateTimePicker } from './components/DateTimePicker/';
import { AmountInput } from './components/AmountInput/';
import { Space, Row, Col } from 'antd';

function App() {
  return (
    <div className="App">
      <Row gutter={[24, 16]}>
        <Col className="gutter-row" span={18} offset={1}>
          <Space size={50}>
            <AmountInput />
            <DateTimePicker />
          </Space>
        </Col>
        <Col className="gutter-row" span={20}>
          <div className="dataContainer"> Data Container </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
