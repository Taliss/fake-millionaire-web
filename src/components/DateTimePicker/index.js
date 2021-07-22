import { Button } from 'antd';
import { DatePicker, Space } from 'antd';
import './style.css';

const { RangePicker } = DatePicker;

export const DateTimePicker = ({ onChange }) => {
  return (
    <Space size={20}>
      <RangePicker size="large" showTime />
      <Button shape="round" size="large" type="primary">
        Make me rich
      </Button>
    </Space>
  );
};
