import { Badge, Modal } from 'antd';
import { MediaInfo } from '@/models/mediaInfoModal';
import React from 'react';

type MediaInfoModalProps = {
  mediaInfo: Partial<MediaInfo>;
  visible: boolean;
  handleClose: () => void;
};

const MediaInfoModal: React.FC<MediaInfoModalProps> = ({
  visible,
  mediaInfo,
  handleClose = () => {},
}) => {
  return (
    <Modal
      open={visible}
      centered
      title={false}
      footer={false}
      closable={false}
      className={'rounded-2xl w-full md:w-full'}
      width={720}
      style={{ borderRadius: '1rem' }}
      bodyStyle={{ padding: 0, backgroundColor: 'inherit' }}
    >
      <Badge.Ribbon text={'6.8'} color={'purple'}>
        <div className={'rounded-lg md:rounded-l-lg '}>
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row md:max-w-3xl bg-white shadow-lg w-full">
              <img
                className="hidden md:block w-full h-96 md:h-auto object-cover md:w-1/4 rounded-t-lg
                md:rounded-none "
                src={mediaInfo.mainImgUrl}
                alt=""
              />
              <div className="p-6 flex flex-col justify-start w-full md:w-3/4">
                <div className="text-gray-900 text-xl font-medium mb-2 ">{mediaInfo.title}</div>
                <div className="text-gray-600 text-xs">{mediaInfo.releaseDate}</div>
                <div className="text-gray-700 text-base mb-4 ">
                  {mediaInfo.overview || '暂无介绍'}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="text-sm flex  font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 dark:divide-gray-600 dark:text-gray-400"
          id="fullWidthTab"
          data-tabs-toggle="#fullWidthTabContent"
          role="tablist"
        >
          <div className="w-full">
            <button
              id="stats-tab"
              data-tabs-target="#stats"
              type="button"
              role="tab"
              aria-controls="stats"
              className="inline-block p-4 w-full  rounded-tl-lg hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              详情
            </button>
          </div>
          <div className="w-full">
            <button
              id="about-tab"
              data-tabs-target="#about"
              type="button"
              role="tab"
              aria-controls="about"
              className="inline-block p-4 w-full  hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              订阅
            </button>
          </div>
          <div className="w-full">
            <button
              id="faq-tab"
              data-tabs-target="#faq"
              type="button"
              role="tab"
              aria-controls="faq"
              className="inline-block p-4 w-full   hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              搜索
            </button>
          </div>
          <div className="w-full">
            <button
              id="faq-tab"
              data-tabs-target="#faq"
              type="button"
              role="tab"
              aria-controls="faq"
              className="inline-block p-4 w-full   hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
              onClick={handleClose}
            >
              关闭
            </button>
          </div>
        </div>
      </Badge.Ribbon>
    </Modal>
  );
};

export default MediaInfoModal;
