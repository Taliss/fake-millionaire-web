import { Typography, Space } from 'antd';
const { Text } = Typography;

export const BuySellInfo = ({ className, type, dateTimePoint }) => {
  const displayText = type === 'buy' ? 'Buy at:' : 'Sell at:';
  return (
    <div className={className}>
      <Space direction="horizontal" size={40}>
        <Text className="profitInfoText">
          {displayText} {dateTimePoint.dateTime}
        </Text>
        <Text className="profitInfoText">Price at: {dateTimePoint.price}</Text>
      </Space>
    </div>
  );
};
