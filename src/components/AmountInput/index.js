import { InputNumber } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentAmount, changeAmount } from '../../store/amount';

export const AmountInput = () => {
  const dispatch = useDispatch();
  const amount = useSelector(getCurrentAmount);

  const onChange = (value) => {
    dispatch(changeAmount(value));
  };

  const formatter = (value) => {
    console.log('In formatter: ', value);
    return value;
  };

  const parser = (value) => {
    console.log('In parser: ', value);
    return value;
  };

  return (
    <InputNumber
      precision={0}
      style={{ minWidth: 100 }}
      size="large"
      max={10000}
      min={0}
      onChange={onChange}
      value={amount}
      placeholder="Insert Amount"
      // formatter={formatter}
      // parser={parser}
    />
  );
};
