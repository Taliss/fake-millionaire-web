import { ProfitInfo } from './ProfitInfo';
import { Space, Row, Col, Typography } from 'antd';
import { useSelector } from 'react-redux';
import { getBuySellPointsErrorStatus } from '../store/millionaire';
const { Paragraph } = Typography;

export const ContentSection = () => {
  const errorWhileFetching = useSelector(getBuySellPointsErrorStatus);
  return (
    <Row className="gutter-row">
      <Col span={errorWhileFetching ? 12 : 23}>
        {errorWhileFetching ? (
          <Paragraph type="danger">{errorWhileFetching}</Paragraph>
        ) : (
          <ProfitInfo />
        )}
      </Col>
    </Row>
  );
};
