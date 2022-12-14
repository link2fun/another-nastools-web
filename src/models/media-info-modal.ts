// media-info-modal.ts
import { useState, useCallback } from 'react';

export type MediaInfo = {
  /** 媒体名称 */
  title: string;
  /** 媒体类型: MOVIE, TV, ANIME */
  type: string;
  /** 上线/发布日期 */
  releaseDate: string;
  overview: string;
  mainImgUrl: string;

  /** TMDB ID */
  tmdbid: string;
  /** 豆瓣 ID */
  doubanId: string;
};

export default () => {
  /** 控制 Modal 是否显示 */
  const [visible, setVisible] = useState(false);

  const [mediaInfo, setMediaInfo] = useState<Partial<MediaInfo>>({
    title: '',
    type: '',
    releaseDate: '',
    tmdbid: '',
    doubanId: '',
  });

  const showMediaInfoModal = useCallback((_mediaInfo) => {
    setMediaInfo(_mediaInfo);
    setVisible(true);
  }, []);

  const hideMediaInfoModal = useCallback(() => {
    setVisible(false);
    setMediaInfo({});
  }, []);

  return { visible, mediaInfo, showMediaInfoModal, hideMediaInfoModal };
};
