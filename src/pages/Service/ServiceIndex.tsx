import { Col, Row } from 'antd';
import ServiceNameTest from '@/pages/Service/components/ServiceNameTest';
const ServiceIndex = () => {
  return (
    <div className="p-4">
      <div className={'flex justify-between items-center my-3 '}>
        <div className={'font-bold text-xl'}>站点维护</div>
        <div></div>
      </div>
      <Row gutter={[16, 32]}>
        <Col span={24} sm={24} md={12} lg={12} xl={8} xxl={8}>
          <ServiceNameTest />
        </Col>
        <Col span={24} sm={24} md={12} lg={12} xl={8} xxl={8}>
          <ServiceNameTest />
        </Col>
        <Col span={24} sm={24} md={12} lg={12} xl={8} xxl={8}>
          <ServiceNameTest />
        </Col>
        <Col span={24} sm={24} md={12} lg={12} xl={8} xxl={8}>
          <ServiceNameTest />
        </Col>
        <Col span={24} sm={24} md={12} lg={12} xl={8} xxl={8}>
          <ServiceNameTest />
        </Col>
        <Col span={24} sm={24} md={12} lg={12} xl={8} xxl={8}>
          <ServiceNameTest />
        </Col>
        <Col span={24} sm={24} md={12} lg={12} xl={8} xxl={8}>
          <ServiceNameTest />
        </Col>
      </Row>
    </div>
  );
};

export default ServiceIndex;
