import { InputNumber } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import {
  getCurrentAmount,
  changeAmount,
  amountReseted,
  recalculateProfitInfo,
} from '../../store/amount';

export const AmountInput = () => {
  const dispatch = useDispatch();
  const amount = useSelector(getCurrentAmount);

  const onChange = (value) => {
    if (value) {
      dispatch(changeAmount(value));
      dispatch(recalculateProfitInfo());
    } else {
      dispatch(amountReseted());
    }
  };

  const debouncedOnChange = debounce(onChange, 100);

  return (
    <InputNumber
      precision={0}
      style={{ minWidth: 100 }}
      size="large"
      max={10000}
      min={0}
      onChange={debouncedOnChange}
      value={amount}
      placeholder="Insert Amount"
      step={50}
    />
  );
};
