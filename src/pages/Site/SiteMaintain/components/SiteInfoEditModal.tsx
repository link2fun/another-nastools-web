import React, { useEffect, useRef, useState } from 'react';
import { message, Modal } from 'antd';
import {
  ProForm,
  ProFormCheckbox,
  ProFormInstance,
  ProFormSelect,
  ProFormSlider,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { ProFormText } from '@ant-design/pro-components';

interface CollectionCreateFormProps {
  open: boolean;
  onOk: (values: any) => void;
  onCancel: () => void;
  currentSite: any;
}

const SiteInfoEditModal: React.FC<CollectionCreateFormProps> = ({
  open,
  currentSite,
  onOk,
  onCancel,
}) => {
  const formRef = useRef<ProFormInstance>();
  // 定义 loading
  const [loading, setLoading] = useState(true);

  const waitTime = (time: number = 100) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  };
  useEffect(() => {
    if (!open) {
      formRef.current?.resetFields();
      return;
    }
    formRef.current?.setFieldsValue({ ...currentSite });
    setLoading(false);
  }, [open, currentSite]);

  return (
    <Modal
      open={open}
      title="新增/编辑站点"
      okText="保存"
      centered
      cancelText="关闭"
      onCancel={onCancel}
      width={768}
      onOk={() => {
        formRef.current?.submit();
      }}
      confirmLoading={loading}
    >
      <ProForm
        title="新建表单"
        formRef={formRef}
        grid={true}
        layout={'horizontal'}
        submitter={false}
        onFinish={async (values) => {
          setLoading(true);
          try {
            await waitTime(2000);
            console.log(values);
          } catch (e) {
            message.error('保存失败请重试！');
            return false;
          } finally {
            setLoading(false);
          }
          message.success('提交成功');
          onOk(values);
          return true;
        }}
      >
        <ProFormText
          label="名称"
          name="siteName"
          rules={[{ required: true }]}
          placeholder="自定义站点名称"
          colProps={{ md: 12 }}
        />
        <ProFormSlider
          label="优先级"
          name="priority"
          rules={[{ required: true }]}
          placeholder="优先级"
          colProps={{ md: 12 }}
        />
        <ProFormText
          label="站点地址"
          name="siteUrl"
          rules={[{ required: true }]}
          placeholder="站点地址"
          colProps={{ md: 12 }}
        />
        <ProFormCheckbox.Group
          label="站点用途"
          name="sitePurpose"
          colProps={{ md: 12 }}
          options={['签到', '订阅', '刷流', '数据统计']}
        />

        <ProFormTextArea
          label={'COOKIE'}
          name={'siteCookie'}
          placeholder={'请填写COOKIE'}
          colProps={{ md: 24 }}
        />
        <ProFormText label={'RSS订阅地址'} name={'rssUrl'} />
        <ProFormSelect
          label={'RSS解析种子详情'}
          name={'rssResolveDetail'}
          colProps={{ md: 8 }}
          rules={[{ required: true }]}
          options={['是', '否']}
        />

        <ProFormSelect
          label={'过滤规则'}
          name={'filterRule'}
          colProps={{ md: 8 }}
          rules={[{ required: true }]}
          options={['未选择', '不过滤']}
        />

        <ProFormSelect
          label={'RSS解析种子详情'}
          name={'handleSiteMessage'}
          colProps={{ md: 8 }}
          rules={[{ required: true }]}
          options={['是', '否']}
        />
        <ProFormSelect
          label={'开启浏览器仿真'}
          name={'browserMock'}
          colProps={{ md: 8 }}
          rules={[{ required: true }]}
          options={['是', '否']}
        />
        <ProFormSelect
          label={'使用代理服务器'}
          name={'proxyAccess'}
          colProps={{ md: 8 }}
          rules={[{ required: true }]}
          options={['是', '否']}
        />

        <ProFormText
          label={'User-Agent'}
          name={'userAgent'}
          placeholder={'访问站点的User-Agent'}
          colProps={{ md: 24 }}
        />
      </ProForm>
    </Modal>
  );
};

export default SiteInfoEditModal;
