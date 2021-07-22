import { ProfitInfo } from './ProfitInfo';
import { Space, Row, Col, Typography } from 'antd';
import { useSelector } from 'react-redux';
import { getBuySellPointsErrorStatus } from '../store/millionaire';
const { Text } = Typography;

export const ContentSection = () => {
  const errorWhileFetching = useSelector(getBuySellPointsErrorStatus);
  return (
    <Row className="gutter-row">
      <Col span={errorWhileFetching ? 16 : 23}>
        {errorWhileFetching ? (
          <Text type="danger">{errorWhileFetching}</Text>
        ) : (
          <ProfitInfo />
        )}
      </Col>
    </Row>
  );
};
