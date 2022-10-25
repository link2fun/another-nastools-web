import { Badge } from 'antd';
import React from 'react';

type MediaInfoCardProps = {
  /** 媒体类型: 动漫, 电影, 电视剧 */
  mediaType: string;
  /** 媒体评分 */
  mediaScore: number | string;
  /** 媒体图片链接 */
  mediaImgUrl: string;
  /** 媒体标题 */
  mediaTitle: string;
  /** 媒体简介 */
  mediaOverview: string;
};

const MediaInfoCard: React.FC<MediaInfoCardProps> = ({
  mediaType,
  mediaScore,
  mediaImgUrl,
  mediaTitle,
}) => {
  const badgeColor = mediaScore > 7 ? 'green' : mediaScore > 5 ? 'orange' : 'red';

  return (
    <div className="flex justify-center  px-2 pb-3">
      <div className="group rounded-lg shadow-lg bg-white max-w-sm relative shadow hover:shadow-2xl transform hover:-translate-y-0.5">
        <Badge.Ribbon color={badgeColor} text={mediaScore}>
          <a href="#!">
            <img className="rounded-t-lg" src={mediaImgUrl} alt="" referrerPolicy={'no-referrer'} />
          </a>
        </Badge.Ribbon>
        <div className="p-3">
          <h5 className="text-gray-900 text-xl font-medium mb-2 select-all">{mediaTitle}</h5>
          <p className="text-gray-700 text-base mb-3">2022-10-21</p>
        </div>
        <div className={'absolute top-2 left-2 bg-purple-400 text-white  rounded-lg px-1'}>
          {mediaType}
        </div>
      </div>
    </div>
  );
};

export default MediaInfoCard;
