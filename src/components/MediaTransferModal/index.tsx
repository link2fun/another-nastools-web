import React, { useEffect, useRef, useState } from 'react';
import { Button, message, Modal } from 'antd';
import {
  ProFormDigit,
  ProFormGroup,
  ProFormInstance,
  ProFormRadio,
  ProFormSelect,
} from '@ant-design/pro-components';
import { ProForm, ProFormText } from '@ant-design/pro-components';
import { TransferInfo, TransferRequest } from '@/hooks/useMediaTransferModal';
import { NameTestResult } from '@/pages/Service/components/ServiceNameTest';

type MediaTransferModalProps = {
  transferInfo: Partial<TransferInfo>;
  nameTestResult: Partial<NameTestResult>;
  visible: boolean;
  handleClose: () => void;
  startTransfer: (transferRequest: TransferRequest) => Promise<void>;
};

const MediaTransferModal: React.FC<MediaTransferModalProps> = ({
  visible,
  transferInfo,
  nameTestResult,
  handleClose = () => {},
  startTransfer,
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
        outpath: '',
        syncmod: 'link',
        type: nameTestResult.type,
        tmdb: '' + nameTestResult.tmdbid,
        season,
      };
      console.log(transferInfo, nameTestResult, _data);
      setFormData(_data);
      formRef.current?.setFieldsValue(_data);
    }
  }, [nameTestResult]);

  useEffect(() => {
    if (!visible) {
      formRef.current?.resetFields();
    }
  }, [visible]);

  const processTransfer = () => {
    startTransfer(formData).then(() => {});
    return false;
  };

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
            return [
              <div className={'flex justify-between'}>
                <Button key={'cancel'} onClick={handleClose}>
                  ??????
                </Button>
                ,
                <Button key={'confirm'} type={'primary'} onClick={processTransfer}>
                  ??????
                </Button>
              </div>,
            ];
          },
        }}
        layout={'vertical'}
        initialValues={{ syncmod: 'link' }}
        onFinish={async (values) => {
          console.log(values);
          message.success('????????????');
          return true;
        }}
      >
        <ProFormText
          name="inpath"
          label="????????????"
          placeholder="inpath"
          proFieldProps={{ mode: 'read' }}
        />
        <ProFormText name="outpath" label="????????????" placeholder="outpath" />
        <ProFormGroup>
          <ProFormSelect
            name="syncmod"
            label="????????????"
            placeholder="????????????"
            options={[
              { value: 'link', label: '?????????' },
              { value: 'softlink', label: '?????????' },
              { value: 'copy', label: '??????' },
              { value: 'move', label: '??????' },
              { value: 'rclonecopy', label: 'rclone??????' },
              { value: 'rclone', label: 'rclone??????' },
              { value: 'miniocopy', label: 'minio??????' },
              { value: 'minio', label: 'minio??????' },
            ]}
            rules={[{ required: true, message: '?????????????????????' }]}
          />
          <ProFormRadio.Group
            name="type"
            label="????????????"
            placeholder="????????????"
            options={[
              { value: '??????', label: '??????' },
              { value: '?????????', label: '?????????' },
              { value: '??????', label: '??????' },
            ]}
            rules={[{ required: true, message: '?????????????????????' }]}
          />
        </ProFormGroup>
        {formData.type === '??????' && (
          <ProFormGroup>
            <ProFormText name="tmdb" label="TMDB ID" placeholder="TMDB?????????" allowClear />
            <ProFormText
              name="min_filesize"
              label="??????????????????"
              placeholder="??????????????????(MB)"
              allowClear
            />
          </ProFormGroup>
        )}

        {formData.type !== '??????' && (
          <>
            <ProFormGroup>
              <ProFormText name="tmdb" label="TMDB ID" placeholder="TMDB?????????" allowClear />
              <ProFormDigit name="season" label="???" placeholder="???" />
              <ProFormText
                name="min_filesize"
                label="??????????????????"
                placeholder="??????????????????(MB)"
                allowClear
              />
            </ProFormGroup>
            <ProFormGroup
              label={'????????????'}
              tooltip={{
                title: (
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        "3??????????????????????????????<br>{ep}: ??????????????????????????????<br>&nbsp;&nbsp;&nbsp;&nbsp;(BD)???????????? ???45?????????????????? ???????????? ?????????(1440x1080 x264-10bpp flac).mkv<br>&nbsp;&nbsp;&nbsp;&nbsp;(BD)???????????? ???32?????????????????? ????????????????????????(1440x1080 x264-10bpp flac).mkv<br>&nbsp;&nbsp;&nbsp;&nbsp;???????????????(BD)???????????? ???{ep}???{a}(1440x1080 x264-10bpp flac).mkv ep????????????a???????????????????????????????????????????????????????????????????????????????????????????????????ep??????<br>start_ep[, end_ep], ??????????????? ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br>&nbsp;&nbsp;&nbsp;&nbsp;?????? '1' ???????????????, '2,4' ?????????2?????????4??????'1-2'?????????1-2??????????????????????????????<br>offset: ????????????, ??????ep??????????????????11, ??????????????????, ?????????-10, ??????????????????????????????",
                    }}
                  />
                ),
              }}
            >
              <ProFormText name="episode_format" placeholder="{ep}.mp4" />
              <ProFormText name="episode_details" placeholder="start_ep[, end_ep] ??????" />
              <ProFormText name="episode_offset" placeholder="offset, ??????" />
            </ProFormGroup>
          </>
        )}
      </ProForm>
    </Modal>
  );
};

export default MediaTransferModal;
