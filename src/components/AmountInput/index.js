import { InputNumber } from 'antd';

export const AmountInput = ({ onChange, value }) => {
  return (
    <InputNumber size="middle" max={100000} onChange={onChange} value={value} />
  );
};