import { IconAlphabetGreek } from '@tabler/icons';
import ServiceComponent from '@/pages/Service/components/ServiceComponent';
import type { ProFormInstance } from '@ant-design/pro-components';
import { ModalForm, ProFormText } from '@ant-design/pro-components';
import { message } from 'antd';
import { useRef, useState } from 'react';
import { postForm } from '@/utils/request';
import NameTestInfo from '@/components/NameTestInfo';

export type NameTestResult = {
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
          try {
            const { data: _mediaInfo } = await postForm('/api/v1/service/name/test', values);
            setMediaInfo(_mediaInfo);
          } catch (e: any) {
            message.error('识别失败' + e?.message);
          }
          return false;
        }}
      >
        <ProFormText name={'name'} label={'名称'} placeholder={'请输入名称'} allowClear />
        <NameTestInfo mediaInfo={mediaInfo} />
      </ModalForm>
    </div>
  );
};

export default ServiceNameTest;
