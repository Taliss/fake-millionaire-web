import React, { useState } from 'react';
import { Button } from 'antd';
import { DatePicker, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
  getBuySellPoints,
  getBuySellPointsStatus,
} from '../../store/millionaire';
import { clearDateTimeSlice } from '../../store/common';
const { RangePicker } = DatePicker;

export const DateTimePicker = () => {
  const dispatch = useDispatch();
  const status = useSelector(getBuySellPointsStatus);

  const [dateTimeValues, setDateTimeValues] = useState([]);

  const isLoading = status === 'loading';
  const isDisabled = !dateTimeValues || !dateTimeValues.length;

  const onChange = (startEndTimeMoments) => {
    console.log(startEndTimeMoments, ' tuka');
    if (!startEndTimeMoments) {
      console.log('a?');
      dispatch(clearDateTimeSlice());
    }
    setDateTimeValues(startEndTimeMoments);
  };

  const onClick = () => {
    dispatch(getBuySellPoints());
  };

  return (
    <Space size={20}>
      <RangePicker
        size="large"
        showTime
        onChange={onChange}
        value={dateTimeValues}
      />
      <Button
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
