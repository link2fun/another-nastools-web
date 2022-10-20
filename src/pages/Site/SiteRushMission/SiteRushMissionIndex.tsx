import { Button, Card, Col, Descriptions, Row, Space, Tag } from 'antd';
import { AppstoreAddOutlined, DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import IconDefaultSite from '@/components/Icons/IconDefaultSite';

const SiteRushMissionIndex = () => {
  const dataSource = [];
  // put 3 item in dataSource
  for (let i = 0; i < 3; i++) {
    dataSource.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }

  return (
    <div className={'bg-[#f5f7fb] p-4'}>
      <div className={'flex justify-between my-3'}>
        <div className={'font-bold text-2xl'}>刷流任务</div>
        <div>
          <Space>
            <Button type={'primary'} icon={<PlusOutlined />}>
              新建任务
            </Button>
            <Button icon={<AppstoreAddOutlined />}>自定义下载器</Button>
          </Space>
        </div>
      </div>
      <div className={'mt-3'}>
        <Row gutter={[16, 32]}>
          {dataSource.map((item, index) => {
            return (
              <Col span={24} key={index}>
                <Card
                  title={<span className={'text-xl text-gray-700'}>红豆饭</span>}
                  extra={[
                    <Space>
                      <EditOutlined
                        className={
                          'mr-1 hover:bg-gray-200  p-3 rounded hover:shadow shadow-gray-500'
                        }
                      />
                      <DeleteOutlined
                        className={
                          'mr-3  hover:bg-gray-200 p-3 rounded hover:shadow shadow-gray-500'
                        }
                      />
                    </Space>,
                  ]}
                  bordered={false}
                >
                  <Descriptions layout="vertical" column={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 4 }}>
                    <Descriptions.Item label={<span>站点</span>}>
                      <div className={'flex align-middle items-center'}>
                        <IconDefaultSite />
                        红豆饭
                      </div>
                    </Descriptions.Item>
                    <Descriptions.Item label="促销">
                      <Tag color={'green'}>FREE</Tag>{' '}
                    </Descriptions.Item>
                    <Descriptions.Item label="选种规则">
                      <div className={'flex flex-wrap'}>
                        <Tag color={'blue'}>发布时间: {'<'} 1小时</Tag>
                        <Tag color={'red'}>排除: HR</Tag>
                      </div>
                    </Descriptions.Item>
                    <Descriptions.Item label="删种规则">未启用</Descriptions.Item>
                    <Descriptions.Item label="保种体积">10240 GB</Descriptions.Item>
                    <Descriptions.Item label="刷新间隔">5 分钟</Descriptions.Item>
                    <Descriptions.Item label="下载器">刷流</Descriptions.Item>
                    <Descriptions.Item label="消息通知">
                      <Tag color={'red'}>关</Tag>
                    </Descriptions.Item>
                    <Descriptions.Item label="强制做种">
                      <Tag color={'green'}>开</Tag>
                    </Descriptions.Item>
                    <Descriptions.Item label="转移到媒体库">
                      <Tag color={'green'}>开</Tag>
                    </Descriptions.Item>
                    <Descriptions.Item label="已下载种子">178</Descriptions.Item>
                    <Descriptions.Item label="已删除种子数">122</Descriptions.Item>
                    <Descriptions.Item label="下载量">433 GB</Descriptions.Item>
                    <Descriptions.Item label="上传量">142 GB</Descriptions.Item>
                    <Descriptions.Item label="最后更新时间">2022-10-20 11:01:55</Descriptions.Item>
                    <Descriptions.Item label="状态">
                      <Tag color={'green'}>运行中</Tag>
                    </Descriptions.Item>
                  </Descriptions>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default SiteRushMissionIndex;
