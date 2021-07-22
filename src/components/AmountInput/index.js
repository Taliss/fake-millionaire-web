import { InputNumber } from 'antd';

export const AmountInput = ({ value }) => {
  const parser = (value) => {
    console.log(value, ' KUR ', typeof value);
    return value;
  };

  const onChange = (value) => {
    console.log('ON CHANGE: ', value);
  };

  return (
    <InputNumber
      precision={0}
      style={{ minWidth: 150 }}
      size="large"
      max={100000}
      min={0}
      onChange={onChange}
      value={value}
      placeholder="Insert Amount"
      // formatter={formatter}
      parser={parser}
    />
  );
};
