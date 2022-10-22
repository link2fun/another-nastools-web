import { Button, Col, Row } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import SiteInfoCard from '@/pages/Site/SiteMaintain/components/SiteInfoCard';
import SiteInfoEditModal from '@/pages/Site/SiteMaintain/components/SiteInfoEditModal';
import { useState } from 'react';

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

  const [modalVisible, setModalVisible] = useState(false);
  const [currentSite, setCurrentSite] = useState<any>({});

  return (
    <div className="p-4">
      <div className={'flex justify-between items-center my-3 '}>
        <div className={'font-bold text-xl'}>站点维护</div>
        <div>
          <Button
            type={'primary'}
            icon={<PlusOutlined />}
            onClick={() => {
              setCurrentSite({});
              setModalVisible(true);
            }}
          >
            新增站点
          </Button>
        </div>
      </div>
      <Row gutter={[16, 32]}>
        {dataSource.map((item, index) => {
          return (
            <Col span={24} sm={24} md={12} lg={12} xl={8} xxl={8} key={index}>
              <div
                className={'w-full'}
                onClick={() => {
                  setCurrentSite(item);
                  setModalVisible(true);
                }}
              >
                <SiteInfoCard />
              </div>
            </Col>
          );
        })}
      </Row>
      <SiteInfoEditModal
        open={modalVisible}
        currentSite={currentSite}
        onCancel={() => {
          setModalVisible(false);
          setCurrentSite({});
        }}
        onOk={() => {
          setModalVisible(false);
          setCurrentSite({});
        }}
      />
    </div>
  );
};

export default SiteMaintainIndex;
