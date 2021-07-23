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

  const [dateTimeMoments, setDateTimeMoments] = useState([]);

  const isLoading = status === 'loading';
  const isDisabled = !dateTimeMoments || !dateTimeMoments.length;

  const onChange = (startEndDateTimeMoments) => {
    // TODO: Missing in antd documentation. This could also be a null.
    if (!startEndDateTimeMoments) {
      dispatch(clearDateTimeSlice());
    }
    setDateTimeMoments(startEndDateTimeMoments);
  };

  const onClick = () => {
    const [startMoment, endMoment] = dateTimeMoments;
    dispatch(getBuySellPoints(startMoment, endMoment));
  };

  return (
    <Space size={20}>
      <RangePicker
        size="large"
        showTime
        onChange={onChange}
        value={dateTimeMoments}
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
