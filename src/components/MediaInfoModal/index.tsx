import { Badge, Modal } from 'antd';
import { useModel } from '@@/exports';

const MediaInfoModal = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { visible, mediaInfo, showMediaInfoModal, hideMediaInfoModal } = useModel('mediaInfoModal');

  return (
    <Modal
      open={visible}
      centered
      title={false}
      footer={false}
      closable={false}
      // width={720}
      className={'rounded-2xl'}
      style={{ borderRadius: '1rem' }}
      bodyStyle={{ padding: 0, backgroundColor: 'inherit' }}
    >
      <Badge.Ribbon text={'6.8'} color={'purple'}>
        <div className={'rounded-lg md:rounded-l-lg '}>
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row md:max-w-xl bg-white shadow-lg">
              <img
                className="hidden md:block w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none "
                src="https://image.tmdb.org/t/p/w500/brFiOc27fi9obISGfsdtkP9YtAi.jpg"
                alt=""
              />
              <div className="p-6 flex flex-col justify-start">
                <h5 className="text-gray-900 text-xl font-medium mb-2">月光光心慌慌：终结</h5>
                <p className="text-gray-600 text-xs">2022-10-12</p>
                <p className="text-gray-700 text-base mb-4 md:min-w-full">
                  该片为2021年电影《月光光心慌慌：杀戮》的续集、“月光光心慌慌”系列的第十三部作品，同时也是《月光光新慌慌》三部曲的最后一部电影。距离上次恐怖事件四年后，洛莉（杰米·李·柯蒂斯
                  饰）和她的外孙女爱丽森（安迪·马蒂切克
                  饰）住在一起，并且正在完成她的回忆录。杀人魔麦克迈尔斯自从上次大开杀戒之后就消失无踪，而洛莉这几十年来一直活在麦克·迈尔斯的恐怖阴影下，她受到的心理创伤以及报复心态也左右了她的人生
                  ...
                </p>
              </div>
            </div>
          </div>
        </div>

        <ul
          className="text-sm flex  font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 dark:divide-gray-600 dark:text-gray-400"
          id="fullWidthTab"
          data-tabs-toggle="#fullWidthTabContent"
          role="tablist"
        >
          <li className="w-full">
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
          </li>
          <li className="w-full">
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
          </li>
          <li className="w-full">
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
          </li>
          <li className="w-full">
            <button
              id="faq-tab"
              data-tabs-target="#faq"
              type="button"
              role="tab"
              aria-controls="faq"
              className="inline-block p-4 w-full   hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              关闭
            </button>
          </li>
        </ul>
      </Badge.Ribbon>
    </Modal>
  );
};

export default MediaInfoModal;
