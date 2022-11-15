import { useState } from 'react';
import { NameTestResult } from '@/pages/Service/components/ServiceNameTest';
import { postForm } from '@/utils/request';
import { notification } from 'antd';

export type TransferInfo = {
  fromPath: string;
  toPath: string;
  transferType: string;
};

export type TransferRequest = {
  /** 源目录 */
  inpath: string;
  /** 目的目录 */
  outpath: string;
  /** 转移模式 */
  syncmod: string;
  /** TMDB ID */
  tmdb: number;
  /** 标题 */
  title: string;
  /** 年份 */
  year: string;
  /** 类型（MOV/TV/ANIME） */
  type: string;
  /** 季号 */
  season: number;
  /** 集数定位 */
  episode_format: string;
  /** 集数范围 */
  episode_details: string;
  /** 集数偏移 */
  episode_offset: string;
  /** 最小文件大小 */
  min_filesize: number;
};

const useMediaTransferModal = () => {
  // 控制媒体转移模态框的显示与隐藏
  const [open, setOpen] = useState(false);

  // 控制转换信息
  const [transferInfo, setTransferInfo] = useState<Partial<TransferInfo>>({});

  // 控制初始化加载媒体信息
  const [nameTestResult, setNameTestResult] = useState<Partial<NameTestResult>>({});

  const openMediaTransferModal = (
    _transferInfo: Partial<TransferInfo>,
    _mediaInfo: Partial<NameTestResult>,
  ) => {
    setTransferInfo(_transferInfo);
    setNameTestResult(_mediaInfo);
    setOpen(true);
  };

  const closeMediaTransferModal = () => {
    setOpen(false);
    setNameTestResult({});
    setTransferInfo({});
  };

  /** 开始转移, 如果转移成功, 则关闭弹窗, 否则保持现状 */
  const startTransfer = async (transferRequest: Partial<TransferRequest>) => {
    console.log('start transfer');
    try {
      const renameResult = await postForm(
        '/api/v1/organization/unknown/renameudf',
        transferRequest,
      );

      console.log('renameResult', renameResult);
      notification.success({ message: '转移成功' });
    } catch (e) {
      console.log('rename error', e);
    }
  };

  return {
    open,
    transferInfo,
    nameTestResult,
    openMediaTransferModal,
    closeMediaTransferModal,
    startTransfer,
  };
};
export default useMediaTransferModal;
