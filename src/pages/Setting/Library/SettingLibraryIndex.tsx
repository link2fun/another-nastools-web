import { ModalForm, PageContainer, ProFormItem } from '@ant-design/pro-components';
import SettingLibraryItem from '@/pages/Setting/Library/components/SettingLibraryItem';
import { useEffect, useState } from 'react';
import { postForm } from '@/utils/request';
import PathSelector from '@/components/PathSelector';
import { message } from 'antd';

export type LibraryItemConfig = {
  name: string;
  key: string;
  paths: string[];
};

const SettingLibraryIndex = () => {
  const [libraryItems, setLibraryItems] = useState<LibraryItemConfig[]>([]);
  const [open, setOpen] = useState(false);
  const [activeKey, setActiveKey] = useState<string>('');

  const loadConfigInfo = () => {
    postForm('/api/v1/config/info', {}).then((config) => {
      const { media } = config;
      const { movie_path, tv_path, anime_path, unknown_path } = media;
      setLibraryItems([
        { name: '电影', key: 'movie_path', paths: movie_path || [] },
        { name: '电视剧', key: 'tv_path', paths: tv_path || [] },
        { name: '动漫', key: 'anime_path', paths: anime_path || [] },
        { name: '未识别', key: 'unknown_path', paths: unknown_path || [] },
      ]);
    });
  };

  useEffect(() => {
    loadConfigInfo();
  }, []);

  return (
    <PageContainer breadcrumbRender={false} waterMarkProps={{ content: '' }}>
      <div>
        {libraryItems.map((item) => {
          return (
            <SettingLibraryItem
              key={item.key}
              item={item}
              onAdd={(key: string) => {
                console.log('add', key);
                setActiveKey(item.key);
                setOpen(true);
              }}
              onRemove={async (path) => {
                console.log('remove', item.key, path);
                await postForm('/api/v1/config/directory', {
                  oper: 'sub',
                  key: 'media.' + item.key,
                  value: path,
                });
                message.success('移除成功');
                await loadConfigInfo();
              }}
            />
          );
        })}
      </div>

      <ModalForm
        title="目录设置"
        open={open}
        submitter={{
          searchConfig: {
            submitText: '确认',
            resetText: '取消',
          },
        }}
        modalProps={{
          onCancel: () => setOpen(false),
        }}
        onFinish={async (values) => {
          console.log({ ...values, key: activeKey });
          await postForm('/api/v1/config/directory', {
            oper: 'add',
            key: 'media.' + activeKey,
            value: values.path,
          });
          message.success('添加成功');
          await loadConfigInfo();
          await setOpen(false);
          await setActiveKey('');
          return true;
        }}
      >
        <ProFormItem name={'path'} label={'目录'} rules={[{ required: true }]}>
          <PathSelector />
        </ProFormItem>
      </ModalForm>
    </PageContainer>
  );
};

export default SettingLibraryIndex;
