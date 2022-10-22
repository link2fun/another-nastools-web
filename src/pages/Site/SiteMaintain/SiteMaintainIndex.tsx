import { Button, Col, Row } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import SiteInfoCard from '@/pages/Site/SiteMaintain/components/SiteInfoCard';

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
    <div className="p-4">
      <div className={'flex justify-between items-center my-3 '}>
        <div className={'font-bold text-xl'}>站点维护</div>
        <div>
          <Button type={'primary'} icon={<PlusOutlined />}>
            新增站点
          </Button>
        </div>
      </div>
      <Row gutter={[16, 32]}>
        {dataSource.map((item, index) => {
          return (
            <Col span={24} sm={24} md={12} lg={12} xl={8} xxl={8} key={index}>
              <div className={'w-full'}>
                <SiteInfoCard />
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default SiteMaintainIndex;
