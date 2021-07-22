import { Button } from 'antd';
import { DatePicker, Space } from 'antd';
import './style.css';

const { RangePicker } = DatePicker;

export const DateTimePicker = () => {
  const onChange = (value, dateStrings) => {
    console.log(dateStrings, ' TUKA');
  };

  return (
    <Space size={20}>
      <RangePicker size="large" showTime onChange={onChange} />
      <Button shape="round" size="large" type="primary">
        Make me rich
      </Button>
    </Space>
  );
};
