import React, { useState } from 'react';
import { Button } from 'antd';
import { DatePicker, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
  getBuySellPoints,
  getBuySellPointsStatus,
} from '../../store/millionaire';
import './style.css';
const { RangePicker } = DatePicker;

export const DateTimePicker = () => {
  const dispatch = useDispatch();
  const status = useSelector(getBuySellPointsStatus);

  const [dateTimeValues, setDateTimeValues] = useState([]);
  const [startDateTime, endDateTime] = dateTimeValues;

  const isLoading = status === 'loading';
  const isDisabled = !startDateTime || !endDateTime;

  const onChange = (value, dateStrings) => {
    setDateTimeValues(dateStrings);
  };

  const onClick = () => {
    dispatch(getBuySellPoints());
  };

  return (
    <Space size={20}>
      <RangePicker size="large" showTime onChange={onChange} />
      <Button
        shape="round"
        size="large"
        type="primary"
        onClick={onClick}
        loading={isLoading}
        disabled={isDisabled}
      >
        Make me rich
      </Button>
    </Space>
  );
};
