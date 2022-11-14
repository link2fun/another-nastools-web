import { useState } from 'react';
import { NameTestResult } from '@/pages/Service/components/ServiceNameTest';

export type TransferInfo = {
  fromPath: string;
  toPath: string;
  transferType: string;
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

  return {
    open,
    transferInfo,
    nameTestResult,
    openMediaTransferModal,
    closeMediaTransferModal,
  };
};
export default useMediaTransferModal;
