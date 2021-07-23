import { Typography, Space } from 'antd';
import moment from 'moment';
const { Text } = Typography;

export const BuySellInfo = ({
  className,
  type,
  dateTimePoint,
  dateFormatter = 'MMMM Do YYYY, h:mm:ss',
}) => {
  const displayText = type === 'buy' ? 'Buy at:' : 'Sell at:';
  return (
    <div className={className}>
      <Space direction="horizontal" size={40}>
        <Text className="profitInfoText">
          {displayText}{' '}
          {dateTimePoint.dateTime
            ? moment(dateTimePoint.dateTime).format(dateFormatter)
            : '-missing date time info-'}
        </Text>
        <Text className="profitInfoText">Price at: {dateTimePoint.price}</Text>
      </Space>
    </div>
  );
};
