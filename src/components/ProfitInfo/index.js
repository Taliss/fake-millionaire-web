import { useSelector } from 'react-redux';
import { Typography, Divider } from 'antd';
import { getBuySellPointsErrorStatus } from '../../store/millionaire';
import './style.css';

const { Text } = Typography;

export const ProfitInfo = () => {
  const errorWhileFetching = useSelector(getBuySellPointsErrorStatus);

  return !errorWhileFetching ? (
    <div className="profitInfoWrapper">
      <Text className="profitInfoText">Hello 123</Text>
      <Divider className="customDevider" />
      <Text className="profitInfoText">Hello 123</Text>
      <Divider className="customDevider" />
      <Text className="profitInfoText">Hello 123</Text>
      <Divider className="customDevider" />
      <Text className="profitInfoText">Hello 123</Text>
      <Divider className="customDevider" />
      <Text className="profitInfoText">Hello 123 nakraq</Text>
    </div>
  ) : null;
};
