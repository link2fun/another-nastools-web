import React, { useEffect, useRef, useState } from 'react';
import { message, Modal } from 'antd';
import {
  ProFormDigit,
  ProFormGroup,
  ProFormInstance,
  ProFormRadio,
  ProFormSelect,
} from '@ant-design/pro-components';
import { ProForm, ProFormText } from '@ant-design/pro-components';
import { TransferInfo } from '@/hooks/useMediaTransferModal';
import { NameTestResult } from '@/pages/Service/components/ServiceNameTest';

type MediaTransferModalProps = {
  transferInfo: Partial<TransferInfo>;
  nameTestResult: Partial<NameTestResult>;
  visible: boolean;
  handleClose: () => void;
};

const MediaTransferModal: React.FC<MediaTransferModalProps> = ({
  visible,
  transferInfo,
  nameTestResult,
  handleClose = () => {},
}) => {
  const formRef = useRef<ProFormInstance>();
  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    if (visible) {
      const season_episode = nameTestResult?.season_episode || '';
      // S01 E05 => 1
      const season = season_episode?.split(' ')[0]?.replace('S', '') || '';

      const _data = {
        path: transferInfo?.fromPath,
        inpath: transferInfo?.fromPath,
        type: nameTestResult.type,
        tmdb: nameTestResult.tmdbid,
        season,
      };
      console.log(transferInfo, nameTestResult, _data);
      formRef.current?.setFieldsValue(_data);
    }
  }, [nameTestResult]);

  useEffect(() => {
    if (!visible) {
      formRef.current?.resetFields();
    }
  }, [visible]);

  return (
    <Modal
      open={visible}
      centered
      title={false}
      footer={false}
      // closable={false}
      onCancel={handleClose}
      // className={'rounded-2xl w-full md:w-full'}
      width={720}
      // style={{borderRadius: '1rem'}}
      // bodyStyle={{padding: 0, backgroundColor: 'inherit'}}
    >
      <ProForm
        formRef={formRef}
        onValuesChange={(values) => setFormData(values)}
        submitter={{
          render: () => {
            return [];
          },
        }}
        layout={'vertical'}
        initialValues={{ syncmod: 'link' }}
        onFinish={async (values) => {
          console.log(values);
          message.success('提交成功');
          return true;
        }}
      >
        <ProFormText name="inpath" label="输入路径" placeholder="inpath" />
        <ProFormText name="outpath" label="输出路径" placeholder="outpath" />
        <ProFormGroup>
          <ProFormSelect
            name="syncmod"
            label="转移方式"
            placeholder="转移方式"
            options={[
              { value: 'link', label: '硬链接' },
              { value: 'softlink', label: '软链接' },
              { value: 'copy', label: '复制' },
              { value: 'move', label: '移动' },
              { value: 'rclonecopy', label: 'rclone复制' },
              { value: 'rclone', label: 'rclone移动' },
              { value: 'miniocopy', label: 'minio复制' },
              { value: 'minio', label: 'minio移动' },
            ]}
            rules={[{ required: true, message: '请选择转移方式' }]}
          />
          <ProFormRadio.Group
            name="type"
            label="资源类型"
            placeholder="资源类型"
            options={[
              { value: '电影', label: '电影' },
              { value: '电视剧', label: '电视剧' },
              { value: '动漫', label: '动漫' },
            ]}
            rules={[{ required: true, message: '请选择资源类型' }]}
          />
        </ProFormGroup>
        {formData.type === '电影' && (
          <ProFormGroup>
            <ProFormText name="tmdb" label="TMDB ID" placeholder="TMDB的编号" allowClear />
            <ProFormText
              name="min_filesize"
              label="最小文件大小"
              placeholder="最小文件大小(MB)"
              allowClear
            />
          </ProFormGroup>
        )}

        {formData.type !== '电影' && (
          <>
            <ProFormGroup>
              <ProFormText name="tmdb" label="TMDB ID" placeholder="TMDB的编号" allowClear />
              <ProFormDigit name="season" label="季" placeholder="季" />
              <ProFormText
                name="min_filesize"
                label="最小文件大小"
                placeholder="最小文件大小(MB)"
                allowClear
              />
            </ProFormGroup>
            <ProFormGroup
              label={'集数定位'}
              tooltip={{
                title: (
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        "3个都不填，用默认识别<br>{ep}: 标定集数位置，例如：<br>&nbsp;&nbsp;&nbsp;&nbsp;(BD)十二国記 第45話「東の海神 西の滄海 五章」(1440x1080 x264-10bpp flac).mkv<br>&nbsp;&nbsp;&nbsp;&nbsp;(BD)十二国記 第32話「風の万里 黎明の空　九章」(1440x1080 x264-10bpp flac).mkv<br>&nbsp;&nbsp;&nbsp;&nbsp;此处可以填(BD)十二国記 第{ep}話{a}(1440x1080 x264-10bpp flac).mkv ep表示集，a表示理解成一个变量，随意用一个变量表示，如果没有变化的部分，只标定ep就行<br>start_ep[, end_ep], 裁定范围， 如果输入是文件，输出就是单个文件，如果输入是目录，输出可以根据填的值批量识别<br>&nbsp;&nbsp;&nbsp;&nbsp;例如 '1' 表示第一集, '2,4' 只取第2集到第4集，'1-2'表示第1-2集，此选项优先级最高<br>offset: 集数偏移, 例如ep定位出集数是11, 实际是第一集, 此处填-10, 以应付多季合集的场景",
                    }}
                  />
                ),
              }}
            >
              <ProFormText name="episode_format" placeholder="{ep}.mp4" />
              <ProFormText name="episode_details" placeholder="start_ep[, end_ep] 可选" />
              <ProFormText name="episode_offset" placeholder="offset, 可选" />
            </ProFormGroup>
          </>
        )}
      </ProForm>
    </Modal>
  );
};

export default MediaTransferModal;
