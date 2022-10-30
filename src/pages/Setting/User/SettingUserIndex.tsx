import { PageContainer, ProTable } from '@ant-design/pro-components';
import { postForm } from '@/utils/request';
import { useEffect, useState } from 'react';
import { Button, message, Popconfirm, Tag } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import SettingUserEditModal from '@/pages/Setting/User/components/SettingUserEditModal';

type SettingUser = {
  id: number;
  username: string;
};

const SettingUserIndex = () => {
  /** 数据源 */
  const [dataSource, setDataSource] = useState<SettingUser[]>([]);
  const [selectedUser, setSelectedUser] = useState<Partial<SettingUser>>({});
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  /** 加载所有用户 */
  const loadUsers = () => {
    setLoading(true);
    return postForm('/api/v1/user/list', {})
      .then((data) => {
        setDataSource(data.result);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadUsers();
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
              setSelectedUser({});
              setOpen(true);
            }}
          >
            新建账号
          </Button>,
        ]}
        options={false}
        size={'small'}
        dataSource={dataSource}
        rowKey={'id'}
        columns={[
          { title: 'id', dataIndex: 'id', hideInSearch: true },
          { title: '登录名', dataIndex: 'name', hideInSearch: true },
          {
            title: '权限',
            dataIndex: 'pris',
            hideInSearch: true,
            render: (_, record) => {
              return (
                <>
                  {record.pris.map((pri: any) => (
                    <Tag color={'green'} key={`${record.name}-${pri}`}>
                      {pri}
                    </Tag>
                  ))}{' '}
                </>
              );
            },
          },
          {
            title: '操作',
            key: 'actions',
            render: (_, record) => (
              <Popconfirm
                title={'该操作不可恢复, 确认删除吗?'}
                onConfirm={async () => {
                  try {
                    setLoading(true);
                    await postForm('/api/v1/user/manage', {
                      oper: 'del',
                      name: record.name,
                    });
                    await message.success('操作成功, 稍后会刷新界面, 请稍等', 3);
                    await loadUsers(); // 重新加载
                  } catch (e) {
                  } finally {
                    setLoading(false);
                  }
                }}
              >
                <Button type={'link'} icon={<DeleteOutlined />} danger>
                  删除
                </Button>
              </Popconfirm>
            ),
          },
        ]}
      />

      <SettingUserEditModal
        open={open}
        loading={loading}
        setLoading={setLoading}
        onOk={() => {
          loadUsers();
          setOpen(false);
        }}
        onCancel={() => setOpen(false)}
        selectedUser={selectedUser}
      />
    </PageContainer>
  );
};

export default SettingUserIndex;
