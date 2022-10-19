import { Pie } from '@ant-design/plots';

const TrafficPieChart = () => {
  // TODO 等待后端接口
  const data = [
    {
      type: '猫',
      value: 27,
    },
    {
      type: '柠檬',
      value: 25,
    },
    {
      type: '观众',
      value: 18,
    },
    {
      type: '馒头',
      value: 15,
    },
    {
      type: '红豆饭',
      value: 10,
    },
    {
      type: '阿童木',
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

  return <Pie {...config} />;
};

export default TrafficPieChart;
