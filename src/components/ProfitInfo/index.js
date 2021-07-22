import { useSelector } from 'react-redux';
import { Typography, Divider } from 'antd';
import { BuySellInfo } from './BuySellInfo';
import { getBuySellBoints } from '../../store/millionaire';
import { getProfitInfo } from '../../store/amount';
import './style.css';

const { Text } = Typography;

export const ProfitInfo = () => {
  const { buyPoint, sellPoint } = useSelector(getBuySellBoints);
  const { bought, sold, profit } = useSelector(getProfitInfo);
  return (
    <div className="profitInfoWrapper">
      <BuySellInfo
        type="buy"
        dateTimePoint={buyPoint}
        className="buySellInfo"
      />
      <Divider className="customDevider" />
      <BuySellInfo
        type="sell"
        dateTimePoint={sellPoint}
        className="buySellInfo"
      />
      <Divider className="customDevider" />
      <Text className="profitInfoText">Profit: {profit}</Text>
      <Divider className="customDevider" />
      <Text className="profitInfoText">Bought: {bought}</Text>
      <Divider className="customDevider" />
      <Text className="profitInfoText">Sold: {sold}</Text>
    </div>
  );
};
