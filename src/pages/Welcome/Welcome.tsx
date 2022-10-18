import {ProCard} from '@ant-design/pro-components';
import {Button, Divider} from 'antd';
import RcResizeObserver from 'rc-resize-observer';
import { StatisticCard } from '@ant-design/pro-components';
import React, {useState} from 'react';



const Welcome: React.FC = () => {

  const [responsive, setResponsive] = useState(false);

  return (
    <ProCard style={{ marginBlockStart: 8,backgroundColor:'#f5f7fb' }} gutter={8} title={<span style={{fontWeight:'bold'}}>我的媒体库</span>} extra={<Button type={"primary"}>媒体库同步</Button>}>
      <RcResizeObserver
        key="resize-observer"
        onResize={(offset) => {
          setResponsive(offset.width < 596);
        }}
      >
        <StatisticCard.Group direction={responsive ? 'column' : 'row'} style={{backgroundColor:'#f5f7fb'}} >
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
          <Divider type={responsive ? 'horizontal' : 'vertical'} />
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
          <Divider type={responsive ? 'horizontal' : 'vertical'} />
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
          <Divider type={responsive ? 'horizontal' : 'vertical'} />
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
  );
};

export default Welcome;
