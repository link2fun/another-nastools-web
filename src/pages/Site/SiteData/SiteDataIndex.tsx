import { Card, Col, Row } from 'antd';
import IconWorldUpload from '@/components/Icons/IconWorldUpload';
import IconWorldDownload from '@/components/Icons/IconWorldDownload';
import IconArrowBigUpLines from '@/components/Icons/IconArrowBigUpLines';
import IconCloudUpload from '@/components/Icons/IconCloudUpload';
import TrafficPieChart from '@/pages/Site/SiteData/components/TrafficPieChart';
import TrafficHistoryColumnChart from '@/pages/Site/SiteData/components/TrafficHistoryColumnChart';
import SiteDataTable from '@/pages/Site/SiteData/components/SiteDataTable';

const SiteDataIndex = () => {
  return (
    <div className={'bg-[#f5f7fb] p-4'}>
      <div className={'py-4 font-bold text-2xl'}>数据统计</div>
      <Row className={''} gutter={[16, 32]}>
        <Col span={24} sm={24} md={12} lg={8} xl={6}>
          <div
            className={
              ' rounded shadow shadow-gray-400 bg-white p-4 flex justify-items-center align-middle items-center'
            }
          >
            <div className={'mr-2 p-1 align-middle'}>
              <IconWorldUpload />
            </div>
            <div>
              <div className={'text-gray-500 font-bold'}>总上传量</div>
              <div className={'text-xl font-bold'}>188.4 TiB</div>
            </div>
          </div>
        </Col>
        <Col span={24} sm={24} md={12} lg={8} xl={6}>
          <div
            className={
              ' rounded shadow shadow-gray-400 bg-white p-4 flex justify-items-center align-middle items-center'
            }
          >
            <div className={'mr-2 p-1 align-middle'}>
              <IconWorldDownload />
            </div>
            <div>
              <div className={'text-gray-500 font-bold'}>总下载量</div>
              <div className={'text-xl font-bold'}>9.7 TiB</div>
            </div>
          </div>
        </Col>
        <Col span={24} sm={24} md={12} lg={8} xl={6}>
          <div
            className={
              ' rounded shadow shadow-gray-400 bg-white p-4 flex justify-items-center align-middle items-center'
            }
          >
            <div className={'mr-2 p-1 align-middle'}>
              <IconArrowBigUpLines />
            </div>
            <div>
              <div className={'text-gray-500 font-bold'}>总做种数</div>
              <div className={'text-xl font-bold'}>791</div>
            </div>
          </div>
        </Col>
        <Col span={24} sm={24} md={12} lg={8} xl={6}>
          <div
            className={
              ' rounded shadow shadow-gray-400 bg-white p-4 flex justify-items-center align-middle items-center'
            }
          >
            <div className={'mr-2 p-1 align-middle'}>
              <IconCloudUpload />
            </div>
            <div>
              <div className={'text-gray-500 font-bold'}>总上传量</div>
              <div className={'text-xl font-bold'}>36.4 TiB</div>
            </div>
          </div>
        </Col>
      </Row>
      <Row gutter={[16, 32]} className={'mt-4'}>
        <Col span={24} lg={12}>
          <Card title={'今日上传 1.5 TiB'} className={'rounded'}>
            <TrafficPieChart />
          </Card>
        </Col>
        <Col span={24} lg={12}>
          <Card title={'今日下载 696.3 MiB'}>
            <TrafficPieChart />
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 32]} className={'mt-4'}>
        <Col span={24}>
          <Card title={'历史数据 (上传量 9.6 TiB / 下载量 89.5 GiB)'}>
            <TrafficHistoryColumnChart />
          </Card>
        </Col>
      </Row>
      <Row className={'mt-4'}>
        <Col span={24}>
          <Card title={'站点数据'}>
            <SiteDataTable />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SiteDataIndex;
