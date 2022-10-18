import {ProCard, ProList} from '@ant-design/pro-components';
import {Button, Divider, Progress} from 'antd';
import RcResizeObserver from 'rc-resize-observer';
import {StatisticCard} from '@ant-design/pro-components';
import React, {useState} from 'react';
import {EyeOutlined, UserOutlined} from "@ant-design/icons";


const Welcome: React.FC = () => {

  const [responsive, setResponsive] = useState(false);

  const dataSource = [

  ];
  for (let i = 0; i < 20; i++) {
    const type = 0%2 ==0 ? 'login':'watch'
    dataSource.push({
      messageId: i,
      icon: type === 'login' ? <UserOutlined /> :<EyeOutlined />,
      message: type === 'login' ? 'admin 登陆成功 IP: 192.168.1.102' : 'admin 在 admin-PC 上开始播放 圣诞之吻SS - 中多纱江 恋人',
      time: '2021-01-01 12:12:12',
    });
  }

  return (
    <ProCard direction={"column"} ghost gutter={[0, 8]}>
      <ProCard style={{marginBlockStart: 8, backgroundColor: '#f5f7fb'}}
               title={<span style={{fontWeight: 'bold'}}>我的媒体库</span>}
               extra={<Button type={"primary"}>媒体库同步</Button>}>
        <RcResizeObserver
          key="resize-observer"
          onResize={(offset) => {
            setResponsive(offset.width < 596);
          }}
        >
          <StatisticCard.Group direction={responsive ? 'column' : 'row'} style={{backgroundColor: '#f5f7fb'}}>
            <StatisticCard
              statistic={{
                title: '电影',
                value: 51,
              }}
              chart={
                <img
                  src="https://gw.alipayobjects.com/zos/alicdn/RLeBTRNWv/bianzu%25252043x.png"
                  alt="直方图"
                  width="100%"
                />
              }
            />
            <Divider type={responsive ? 'horizontal' : 'vertical'}/>
            <StatisticCard
              statistic={{
                title: '电视剧/动漫',
                value: 142,
                suffix: '/ 2,439',
              }}
              chart={
                <img
                  src="https://gw.alipayobjects.com/zos/alicdn/RLeBTRNWv/bianzu%25252043x.png"
                  alt="直方图"
                  width="100%"
                />
              }
            />
            <Divider type={responsive ? 'horizontal' : 'vertical'}/>
            <StatisticCard
              statistic={{
                title: '音乐',
                value: 0,
                suffix: '/ 100',
              }}
              chart={
                <img
                  src="https://gw.alipayobjects.com/zos/alicdn/RLeBTRNWv/bianzu%25252043x.png"
                  alt="直方图"
                  width="100%"
                />
              }
            />
            <Divider type={responsive ? 'horizontal' : 'vertical'}/>
            <StatisticCard
              statistic={{
                title: '活跃用户',
                value: 2,
              }}
              chart={
                <img
                  src="https://gw.alipayobjects.com/zos/alicdn/RLeBTRNWv/bianzu%25252043x.png"
                  alt="直方图"
                  width="100%"
                />
              }
            />
          </StatisticCard.Group>
        </RcResizeObserver>

      </ProCard>
      <ProCard style={{marginBlockStart: 8, backgroundColor: '#f5f7fb'}} direction={"column"}
               title={'存储空间 共 47.14 TB'}
      >
        <ProCard>
          <Progress strokeLinecap="butt" percent={75} />
        </ProCard>
      </ProCard>
      <ProCard style={{marginBlockStart: 8, backgroundColor: '#f5f7fb'}} direction={"column"}
      >
        <ProList<any>

          rowKey="messageId"
          headerTitle="近期活动"
          dataSource={dataSource}
          metas={{
            title: {
              dataIndex: 'message',
            },
            avatar: {
              dataIndex: 'icon',
            },
            description: {
              dataIndex: 'time',
            },

          }}
        />
      </ProCard>

    </ProCard>
  );
};

export default Welcome;
