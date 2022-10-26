import { IconAlphabetGreek } from '@tabler/icons';
import ServiceComponent from '@/pages/Service/components/ServiceComponent';
import type { ProFormInstance } from '@ant-design/pro-components';
import { ModalForm, ProFormText } from '@ant-design/pro-components';
import { message } from 'antd';
import { useRef, useState } from 'react';
import { postForm } from '@/utils/request';

type NameTestResult = {
  /** 类型: 动漫/ 电影/ 电视剧/ 综艺 */
  type: string;
  /** 名称 */
  name: string;
  /** 标题 */
  title: string;
  /** 年份 */
  year: string;
  /** 第XX季 */
  season_episode: string;
  part: any;
  /** tmdb id */
  tmdbid: number;
  /** tmdb 详情 url */
  tmdblink: string;
  /** imdb 季度详情 url */
  tmdb_S_E_link: string;
  /** 识别的分类 */
  category: string;
  /** 资源类型 "WEB-DL"*/
  restype: string;
  /** 识别的分辨率 "2160p" */
  pix: string;
  /** 制作组  */
  team: string;
  /** 视频编码 "H265" */
  video_codec: string;
  /** 音频编码 "DTS-HD MA" */
  audio_codec: string;
  /** 原始文件名 */
  org_string: string;
  ignored_words: any[];
  replaced_words: any[];
  offset_words: any[];
};

const ServiceNameTest = () => {
  const [open, setOpen] = useState(false);
  const [mediaInfo, setMediaInfo] = useState<Partial<NameTestResult>>({});
  const formRef = useRef<ProFormInstance>();

  return (
    <div>
      <ServiceComponent
        icon={
          <IconAlphabetGreek
            size={40} // set custom `width` and `height`
            color={'white'} // set custom `fill` color
            stroke={2} // set `stroke-width`
            strokeLinejoin="round" // override other SVG props
          />
        }
        iconBgColor={'#74b816'}
        title={'名称识别测试'}
        description={''}
        onClick={() => setOpen(true)}
      />
      <ModalForm
        title="名称识别测试"
        formRef={formRef}
        open={open}
        modalProps={{ onCancel: () => setOpen(false), maskClosable: false, okText: '识别' }}
        submitter={{ resetButtonProps: false, submitButtonProps: { title: 'hello' } }}
        onFinish={async (values) => {
          console.log(values);
          const apiResult: any = await postForm('/api/v1/service/name/test', values);
          const { success, data, message: _message } = apiResult;
          if (!success) {
            message.error(_message);
            return false;
          }
          const { data: _mediaInfo } = data;
          setMediaInfo(_mediaInfo);
          return false;
        }}
      >
        <ProFormText name={'name'} label={'名称'} placeholder={'请输入名称'} allowClear />
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
          {mediaInfo && mediaInfo.tmdbid && (
            <span
              title={'TMDB ID'}
              className={'ml-2 badge-outline text-green-500 border-green-500'}
            >
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
      </ModalForm>
    </div>
  );
};

export default ServiceNameTest;
