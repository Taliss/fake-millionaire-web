import { ProfitInfo } from './ProfitInfo';
import { Row, Col, Typography } from 'antd';
import { useSelector } from 'react-redux';
import {
  getBuySellPointsStatus,
  getBuySellPointsErrorStatus,
} from '../store/millionaire';
const { Paragraph } = Typography;

export const ContentSection = () => {
  const status = useSelector(getBuySellPointsStatus);
  const errorStatus = useSelector(getBuySellPointsErrorStatus);

  const renderContent = () => {
    if (errorStatus) {
      return <Paragraph type="danger">{errorStatus}</Paragraph>;
    } else if (status === 'noSolution') {
      return (
        <Paragraph type="warning">
          A solution for the given time slice was not found
        </Paragraph>
      );
    }
    return <ProfitInfo />;
  };

  return (
    <Row className="gutter-row">
      <Col span={24}>{renderContent()}</Col>
    </Row>
  );
};
