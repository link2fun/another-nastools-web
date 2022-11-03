import {
  ModalForm,
  PageContainer,
  ProFormGroup,
  ProFormInstance,
  ProFormItem,
  ProFormSelect,
  ProFormSwitch,
  ProTable,
} from '@ant-design/pro-components';
import PathSelector from '@/components/PathSelector';
import { useEffect, useRef, useState } from 'react';
import { postForm } from '@/utils/request';
import { Button, message, Popconfirm } from 'antd';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';

type DirectorySyncItemConfig = {
  // {"id": 1, "from": "D:\\tmp", "to": "", "unknown": "", "syncmod": "link", "syncmod_name": "\u786c\u94fe\u63a5", "rename": 1, "enabled": 0}
  id: number;
  from: string;
  to: string;
  unknown: string;
  syncmod: string;
  syncmod_name: string;
  rename: number;
  enabled: number;
};

const SettingDirectorySyncIndex = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const formRef = useRef<ProFormInstance>();
  const [dataSource, setDataSource] = useState<DirectorySyncItemConfig[]>([]);
  const [selectedItem, setSelectedItem] = useState<Partial<DirectorySyncItemConfig>>({});

  const loadItems = async () => {
    const { result: _dirList } = await postForm('/api/v1/sync/directory/list', {});
    setLoading(false);
    setDataSource(_dirList);
  };

  const handleSave = async (values: DirectorySyncItemConfig) => {
    await postForm('/api/v1/sync/directory/update', values);
    message.success('保存成功');
    await loadItems();
    setOpen(false);
  };

  useEffect(() => {
    loadItems().catch(() => {});
  }, []);

  return (
    <PageContainer breadcrumbRender={false} waterMarkProps={{ content: '' }}>
      <ProTable<any>
        pagination={false}
        loading={loading}
        search={false}
        toolBarRender={() => [
          <Button
            type={'primary'}
            icon={<PlusOutlined />}
            key={'tool-add'}
            onClick={() => {
              setSelectedItem({ syncmod: 'link', enabled: 1, rename: 1 });
              formRef.current?.resetFields();
              formRef.current?.setFieldsValue({ syncmod: 'link', enabled: 1, rename: 1 });
              setOpen(true);
            }}
          >
            新增
          </Button>,
        ]}
        options={false}
        size={'small'}
        dataSource={dataSource}
        rowKey={'from'}
        columns={[
          { title: 'id', dataIndex: 'id', hideInSearch: true },
          { title: '源目录', dataIndex: 'from', hideInSearch: true },
          { title: '目的目录', dataIndex: 'to', hideInSearch: true },
          { title: '同步方式', dataIndex: 'syncmod_name', hideInSearch: true },
          { title: '重命名', dataIndex: 'rename', hideInSearch: true },
          { title: '启用', dataIndex: 'enabled', hideInSearch: true },
          {
            title: '操作',
            key: 'actions',
            render: (_, record) => [
              <Button
                type={'link'}
                icon={<EditOutlined />}
                key={'edit'}
                onClick={async () => {
                  setSelectedItem({ sid: record.id, ...record });
                  await formRef.current?.setFieldsValue({ sid: record.id, ...record });
                  setOpen(true);
                }}
              >
                修改
              </Button>,
              <Popconfirm
                title={'该操作不可恢复, 确认删除吗?'}
                key={'del'}
                onConfirm={async () => {
                  try {
                    setLoading(true);
                    await postForm('/api/v1/sync/directory/delete', {
                      sid: record.id,
                    });
                    await message.success('操作成功, 稍后会刷新界面, 请稍等', 3);
                    await loadItems(); // 重新加载
                  } catch (e) {
                  } finally {
                    setLoading(false);
                  }
                }}
              >
                <Button type={'link'} icon={<DeleteOutlined />} danger>
                  删除
                </Button>
              </Popconfirm>,
            ],
          },
        ]}
      />

      <ModalForm
        title="目录设置"
        open={open}
        layout={'horizontal'}
        submitter={{
          searchConfig: {
            submitText: '确认',
            resetText: '取消',
          },
        }}
        formRef={formRef}
        modalProps={{
          onCancel: () => setOpen(false),
        }}
        onFinish={async (values) => {
          console.log(values);
          const formData = { sid: selectedItem.id, ...values };
          await handleSave(formData);
          await setOpen(false);
          return true;
        }}
      >
        <ProFormItem name={'from'} label={'源目录'} rules={[{ required: true }]}>
          <PathSelector />
        </ProFormItem>
        <ProFormItem name={'to'} label={'目的目录'}>
          <PathSelector />
        </ProFormItem>
        <ProFormItem name={'unknown'} label={'未识别目录'}>
          <PathSelector />
        </ProFormItem>
        <ProFormSelect
          name={'syncmod'}
          label={'同步方式'}
          rules={[{ required: true }]}
          options={[
            { label: '硬链接', value: 'link' },
            { label: '软链接', value: 'softlink' },
            { label: '复制', value: 'copy' },
            { label: '移动', value: 'move' },
            { label: 'Rclone复制', value: 'rclonecopy' },
            { label: 'Rclone移动', value: 'rclone' },
            { label: 'Minio复制', value: 'miniocopy' },
            { label: 'Minio移动', value: 'minio' },
          ]}
          tooltip={{
            title: (
              <div>
                <p>按目录设置文件转移方式，将覆盖默认文件转移方式设置。</p>
                <p>
                  {' '}
                  硬链接:
                  要求源目录和目的目录或媒体库目录在一个磁盘分区或者存储空间/共享文件夹，Docker运行时需要直接映射源目录和目的目录或媒体库目录的上级目录，否则docker仍然会认为是跨盘；
                </p>
                <p> 移动: 会直接移动原文件，会影响做种，请谨慎使用；</p>
                <p>
                  {' '}
                  RCLONE:
                  针对网盘场景，需要自行映射rclone配置目录到容器中（/root/.config/rclone）或在容器内使用rclone
                  config完成rclone配置，网盘配置名称必须为：NASTOOL;
                </p>
                <p>
                  {' '}
                  minio: 针对S3/云原生场景，需要自行在容器内使用mc alias set NASTOOL
                  http://your_domain_name_or_ip:port ACCESS_KEY
                  SECRET_KEY完成minio配置(alias的名称必须为NASTOOL)，并在minio控制台增加一个名为data的bucket(名称必须为data)
                </p>
              </div>
            ),
            showArrow: true,
            overlayInnerStyle: { width: '80vw' },
          }}
        />

        <ProFormGroup colProps={{ span: 24 }}>
          <ProFormSwitch
            name={'rename'}
            label={'识别并重命名'}
            checkedChildren="启用"
            unCheckedChildren="禁用"
          />
          <ProFormSwitch
            name={'enabled'}
            label={'开启同步'}
            checkedChildren="启用"
            unCheckedChildren="禁用"
          />
        </ProFormGroup>
      </ModalForm>
    </PageContainer>
  );
};

export default SettingDirectorySyncIndex;
