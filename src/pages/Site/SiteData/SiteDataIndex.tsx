import { Card, Col, Row } from 'antd';
import { Pie } from '@ant-design/plots';
import IconWorldUpload from '@/components/Icons/IconWorldUpload';
import IconWorldDownload from '@/components/Icons/IconWorldDownload';
import IconArrowBigUpLines from '@/components/Icons/IconArrowBigUpLines';
import IconCloudUpload from '@/components/Icons/IconCloudUpload';

const SiteDataIndex = () => {
  const data = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其他',
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
    },
    interactions: [
      {
        type: 'pie-legend-active',
      },
      {
        type: 'element-active',
      },
    ],
  };

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
            <Pie {...config} />
          </Card>
        </Col>
        <Col span={24} lg={12}>
          <Card title={'今日下载 696.3 MiB'}>
            <Pie {...config} />
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 32]} className={'mt-4'}>
        <Col span={24}>
          <Card title={'历史数据 (上传量 9.6 TiB / 下载量 89.5 GiB)'}></Card>
        </Col>
      </Row>
      <div>站点数据</div>
    </div>
  );
};

export default SiteDataIndex;
