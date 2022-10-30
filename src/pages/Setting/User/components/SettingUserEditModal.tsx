import React, { useEffect, useRef } from 'react';
import { message, Modal } from 'antd';
import type { ProFormInstance } from '@ant-design/pro-components';
import { ProFormCheckbox } from '@ant-design/pro-components';
import { ProForm } from '@ant-design/pro-components';
import { ProFormText } from '@ant-design/pro-components';
import { postForm } from '@/utils/request';

interface CollectionCreateFormProps {
  open: boolean;
  onOk: (values: any) => void;
  onCancel: () => void;
  selectedUser: any;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const SettingUserEditModal: React.FC<CollectionCreateFormProps> = ({
  open,
  selectedUser,
  onOk,
  onCancel,
  loading,
  setLoading,
}) => {
  const formRef = useRef<ProFormInstance>();

  useEffect(() => {
    if (!open) {
      formRef.current?.resetFields();
      return;
    }
    formRef.current?.setFieldsValue({ ...selectedUser });
    setLoading(false);
  }, [open, selectedUser]);

  return (
    <Modal
      open={open}
      title="新增/编辑用户"
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
            const { pris } = values;
            // concat pris to string with ','
            const pris_str = pris.join(',');
            await postForm('/api/v1/user/manage', { oper: 'add', ...values, pris: pris_str });
            await message.success('操作成功, 稍后会刷新界面, 请稍等', 5);
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
          label="登录名"
          name="name"
          rules={[{ required: true }]}
          placeholder="登录名"
          colProps={{ md: 12 }}
        />
        <ProFormText.Password
          label="密码"
          name="password"
          rules={[{ required: true }]}
          placeholder="密码"
          colProps={{ md: 12 }}
        />
        <ProFormCheckbox.Group
          name="pris"
          label="权限"
          rules={[{ required: true }]}
          options={[
            '我的媒体库',
            '资源搜索',
            '推荐',
            '站点管理',
            '订阅管理',
            '下载管理',
            '媒体整理',
            '服务',
            '系统设置',
          ]}
        />
      </ProForm>
    </Modal>
  );
};

export default SettingUserEditModal;
