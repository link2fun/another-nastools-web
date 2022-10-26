import { Col, Row } from 'antd';
import ServiceNameTest from '@/pages/Service/components/ServiceNameTest';
import NetworkTest from '@/pages/Service/components/NetworkTest';
import { PageContainer } from '@ant-design/pro-components';

const ServiceIndex = () => {
  return (
    <PageContainer breadcrumbRender={false} waterMarkProps={{ content: '' }}>
      <Row gutter={[16, 32]}>
        <Col span={24} sm={24} md={12} lg={12} xl={8} xxl={8}>
          <ServiceNameTest />
        </Col>
        <Col span={24} sm={24} md={12} lg={12} xl={8} xxl={8}>
          <NetworkTest />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default ServiceIndex;
