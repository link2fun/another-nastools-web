import { Card, Col, Row, Space, Tag } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import Meta from 'antd/es/card/Meta';

const SiteMaintainIndex = () => {
  const dataSource = [];
  for (let i = 0; i < 12; i++) {
    // siteTag choose 2 from ['动漫','电影', '剧集']
    const siteTag = ['动漫', '电影'];
    dataSource.push({
      siteName: `站点${i}`,
      siteOrder: 1,
      siteUrl: 'https://demo.com',
      siteCookie: '***',
      siteTag: siteTag,
    });
  }

  return (
    <div className="site-card-wrapper">
      <Row gutter={[16, 32]}>
        {dataSource.map((item, index) => {
          return (
            <Col span={24} sm={24} md={12} lg={12} xl={8} xxl={8} key={index}>
              <Card
                title={
                  <div>
                    <span className={'bg-gray-400 inline-block w-6 text-center rounded-full mr-3'}>
                      {item.siteOrder}
                    </span>
                    <span>{item.siteName}</span>
                  </div>
                }
                bordered={false}
                extra={[
                  <Space>
                    <EditOutlined />
                    <DeleteOutlined />
                  </Space>,
                ]}
              >
                <Meta
                  title={<span>站点地址：{item.siteUrl}</span>}
                  description={
                    <>
                      <Tag color={'blue'}>COOKIE</Tag>
                      <Tag color={'green'}>RSS</Tag>
                      <Tag color={'yellow'}>仿真</Tag>
                      {item.siteTag.map((tag) => {
                        return <Tag color={'orange'}>{tag}</Tag>;
                      })}
                    </>
                  }
                />
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default SiteMaintainIndex;
