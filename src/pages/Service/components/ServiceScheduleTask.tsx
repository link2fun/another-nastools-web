import {
  IconBookmarks,
  IconCloudDownload,
  IconEraser,
  IconRefresh,
  IconReplace,
  IconSearch,
  IconTrash,
  IconUserCheck,
} from '@tabler/icons';
import ServiceComponent from '@/pages/Service/components/ServiceComponent';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { message, Modal } from 'antd';
import { postForm } from '@/utils/request';
import React from 'react';

const { confirm } = Modal;

type ScheduleTask = {
  taskId: string;
  taskName: string;
  confirmText: string;
  color: string;
  icon: React.ReactElement;
};

const ScheduleTaskList: ScheduleTask[] = [
  // rssdownload RSS订阅
  {
    taskId: 'rssdownload',
    taskName: 'RSS订阅',
    confirmText: '是否立即运行 RSS订阅 ?',
    color: '#206bc4',
    icon: <IconCloudDownload size={40} color={'white'} stroke={2} strokeLinejoin="round" />,
  },
  // rsssearch_all 订阅搜索
  {
    taskId: 'rsssearch_all',
    taskName: '订阅搜索',
    confirmText: '是否立即运行 订阅搜索 ?',
    color: '#206bc4',
    icon: <IconSearch size={40} color={'white'} stroke={2} strokeLinejoin="round" />,
  },
  // pttransfer 下载文件转移
  {
    taskId: 'pttransfer',
    taskName: '下载文件转移',
    confirmText: '是否立即运行 下载文件转移 ?',
    color: '#2fb344',
    icon: <IconReplace size={40} color={'white'} stroke={2} strokeLinejoin="round" />,
  },
  // autoremovetorrents 删种
  {
    taskId: 'autoremovetorrents',
    taskName: '删种',
    confirmText: '是否立即运行 删种 ?',
    color: '#1da1f2',
    icon: <IconTrash size={40} color={'white'} stroke={2} strokeLinejoin="round" />,
  },
  // ptsignin 站点签到
  {
    taskId: 'ptsignin',
    taskName: '站点签到',
    confirmText: '是否立即运行 站点签到 ?',
    color: '#3b5998',
    icon: <IconUserCheck size={40} color={'white'} stroke={2} strokeLinejoin="round" />,
  },
  // sync 目录同步
  {
    taskId: 'sync',
    taskName: '目录同步',
    confirmText: '是否立即运行 目录同步 ?',
    color: '#f76707',
    icon: <IconRefresh size={40} color={'white'} stroke={2} strokeLinejoin="round" />,
  },
  // douban 豆瓣想看
  {
    taskId: 'douban',
    taskName: '豆瓣想看',
    confirmText: '是否立即运行 豆瓣想看 ?',
    color: '#d6336c',
    icon: <IconBookmarks size={40} color={'white'} stroke={2} strokeLinejoin="round" />,
  },
  // blacklist 清理转移缓存
  {
    taskId: 'blacklist',
    taskName: '清理转移缓存',
    confirmText: '是否立即运行 清理转移缓存 ?',
    color: '#d63939',
    icon: <IconEraser size={40} color={'white'} stroke={2} strokeLinejoin="round" />,
  },
  // rsshistory 清理RSS缓存
  {
    taskId: 'rsshistory',
    taskName: '清理RSS缓存',
    confirmText: '是否立即运行 清理RSS缓存 ?',
    color: '#ae3ec9',
    icon: <IconEraser size={40} color={'white'} stroke={2} strokeLinejoin="round" />,
  },
];

type ServiceScheduleTaskProps = {
  taskId: string;
};

const ServiceScheduleTask: React.FC<ServiceScheduleTaskProps> = ({ taskId = '' }) => {
  const task = ScheduleTaskList.find((item) => item.taskId === taskId) || {
    taskId: '',
    taskName: '',
    confirmText: '',
    icon: <></>,
    color: '',
  };
  if (!task) {
    return <></>;
  }
  const showConfirm = () => {
    confirm({
      title: task.taskName,
      icon: <ExclamationCircleOutlined />,
      content: task.confirmText,
      centered: true,
      onOk() {
        return postForm('/api/v1/service/run', { item: task.taskId }).then(
          ({ message: _message }) => {
            return message.success(_message, 1);
          },
        );
      },
    });
  };

  return (
    <div>
      <ServiceComponent
        icon={task.icon}
        iconBgColor={task.color}
        title={task.taskName}
        description={''}
        onClick={showConfirm}
      />
    </div>
  );
};

export default ServiceScheduleTask;
