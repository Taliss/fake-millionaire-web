import './App.css';
import 'antd/dist/antd.css';
import { DateTimePicker } from './components/DateTimePicker/';
import { AmountInput } from './components/AmountInput/';
import { Space } from 'antd';

function App() {
  return (
    <div className="App">
      <Space direction="vertical" size={10}>
        <DateTimePicker />
        <AmountInput />
      </Space>
    </div>
  );
}

export default App;
