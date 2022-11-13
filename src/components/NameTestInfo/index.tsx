import React from 'react';
import { NameTestResult } from '@/pages/Service/components/ServiceNameTest';

const NameTestInfo: React.FC<{ mediaInfo: Partial<NameTestResult> }> = ({ mediaInfo }) => {
  return (
    <div className={'flex '}>
      {mediaInfo && mediaInfo.type && (
        <span title={'类型'} className={'ml-2 badge-outline text-blue-500 border-blue-500'}>
          {mediaInfo.type}
        </span>
      )}
      {mediaInfo && mediaInfo.category && (
        <span title={'类别'} className={`ml-2 badge-outline text-blue-500 border-blue-500`}>
          {mediaInfo.category}
        </span>
      )}
      {mediaInfo && mediaInfo.name && (
        <span title={'识别名称'} className={'ml-2 badge-outline text-red-500 border-red-500'}>
          <a
            className={'text-red-500'}
            href={`https://www.themoviedb.org/search?query=${encodeURI(mediaInfo.name)}`}
            target={'_blank'}
            rel="noreferrer"
          >
            {mediaInfo.name}
          </a>
        </span>
      )}
      {mediaInfo && mediaInfo.title && (
        <span title={'标题'} className={'ml-2 badge-outline text-red-500 border-red-500'}>
          {mediaInfo.title}
        </span>
      )}
      {mediaInfo && mediaInfo.year && (
        <span title={'年份'} className={'ml-2 badge-outline text-orange-500 border-orange-500'}>
          {mediaInfo.year}
        </span>
      )}
      {mediaInfo && mediaInfo.season_episode && (
        <span title={'季集'} className={'ml-2 badge-outline text-orange-500 border-orange-500'}>
          <a
            className={'text-orange-500'}
            href={mediaInfo.tmdb_S_E_link}
            referrerPolicy={'no-referrer'}
            target={'_blank'}
            rel="noreferrer"
          >
            {mediaInfo.season_episode}
          </a>
        </span>
      )}
      {mediaInfo && mediaInfo.part && (
        <span title={'分集'} className={'ml-2 badge-outline text-orange-500 border-orange-500'}>
          {mediaInfo.part}
        </span>
      )}
      {mediaInfo && mediaInfo.tmdbid && mediaInfo.tmdbid !== 0 && (
        <span title={'TMDB ID'} className={'ml-2 badge-outline text-green-500 border-green-500'}>
          <a
            className={'text-green-500'}
            href={mediaInfo.tmdblink}
            target={'_blank'}
            referrerPolicy={'no-referrer'}
            rel="noreferrer"
          >
            {mediaInfo.tmdbid}
          </a>
        </span>
      )}
      {mediaInfo && mediaInfo.restype && (
        <span title={'质量'} className={'ml-2 badge-outline'}>
          {mediaInfo.restype}
        </span>
      )}
      {mediaInfo && mediaInfo.pix && (
        <span title={'分辨率'} className={'ml-2 badge-outline'}>
          {mediaInfo.pix}
        </span>
      )}
      {mediaInfo && mediaInfo.video_codec && (
        <span title={'视频编码'} className={'ml-2 badge-outline'}>
          {mediaInfo.video_codec}
        </span>
      )}
      {mediaInfo && mediaInfo.audio_codec && (
        <span title={'音频编码'} className={'ml-2 badge-outline'}>
          {mediaInfo.audio_codec}
        </span>
      )}
      {mediaInfo && mediaInfo.team && (
        <span
          title={'制作组/字幕组'}
          className={'ml-2 badge-outline text-yellow-500 border-yellow-500'}
        >
          {mediaInfo.team}
        </span>
      )}
    </div>
  );
};

export default NameTestInfo;
