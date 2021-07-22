import { useSelector } from 'react-redux';
import { getBuySellPointsErrorStatus } from '../../store/millionaire';
import { Typography } from 'antd';
import './style.css';

const { Text } = Typography;

export const ErrorMessageInfo = () => {
  const errorWhileFetching = useSelector(getBuySellPointsErrorStatus);
  return errorWhileFetching ? (
    <div className="errorInfoWrapper">
      <Text type="danger">{errorWhileFetching}</Text>
    </div>
  ) : null;
};
