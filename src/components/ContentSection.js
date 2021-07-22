import { ErrorMessageInfo } from './ErrorMessageInfo';
import { ProfitInfo } from './ProfitInfo';
import { Space, Row, Col } from 'antd';

export const ContentSection = () => (
  <Row className="gutter-row">
    <Col span={12}>
      <Space>
        <ErrorMessageInfo />
        <ProfitInfo />
      </Space>
    </Col>
  </Row>
);
