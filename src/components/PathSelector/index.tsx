import { ProTable } from '@ant-design/pro-components';
import type { InputRef } from 'antd';
import { Input, Modal } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { postForm } from '@/utils/request';
import Utils from '@/utils/utils';
import { FileOutlined, FolderOutlined } from '@ant-design/icons';

type PathSelectorProps = {
  value?: string;
  onChange?: (value: string) => void;
  allowClear?: boolean;
};

export type pathItem = {
  /** 文件或文件夹名称 */
  name: string;
  /** 文件或文件夹路径 */
  path: string;
  /** 上级文件夹路径 */
  rel: string;
  /** 类型，file或dir */
  type: string;
};

const PathSelector: React.FC<PathSelectorProps> = (
  { value = '', onChange = () => {} },
  allowClear = true,
) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPath, setCurrentPath] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const selectorInput = useRef<InputRef>(null);

  // dataSource
  const [dataSource, setDataSource] = useState<any[]>([]);

  const handlePathClick = (record: any) => {
    if (onChange) {
      onChange(record.path);
    }
    if (record.type === 'upperLevel') {
      const upperLevel = Utils.getPrevPath(record.path);
      console.log(upperLevel);
      if (upperLevel.endsWith('/')) {
        setCurrentPath(upperLevel);
      } else {
        setCurrentPath(upperLevel + '/');
      }
      // onChange(record.path);
    } else {
      if (record.type === 'dir') {
        const upperLevel = record.path;
        console.log(upperLevel);
        setCurrentPath(record.path);
      }
    }
  };

  useEffect(() => {
    setLoading(true);
    postForm('/api/v1/system/path', { dir: currentPath, filter: 'ALL' })
      .then(({ data }: { data: pathItem[] }) => {
        // get upper dir
        // 去掉末尾的斜杠
        console.log('==>', currentPath);

        const upperLevelDir = currentPath;
        console.log(currentPath);
        if (upperLevelDir) {
          setDataSource([
            { path: upperLevelDir, aliasPath: '返回上一级', type: 'upperLevel' },
            ...data,
          ]);
        } else {
          setDataSource([...data]);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [currentPath]);

  return (
    <>
      <Input
        ref={selectorInput}
        onFocus={() => {
          setOpen(true);
          selectorInput.current?.blur();
        }}
        value={value}
        allowClear={allowClear}
      />

      <Modal
        open={open}
        confirmLoading={loading}
        title="选择路径"
        okText="选择"
        centered
        width={'90vw'}
        cancelText="取消"
        onCancel={() => setOpen(false)}
        footer={false}
        wrapClassName={'padding-0 padding-inline-0'}
        className={'padding-0  padding-inline-0'}
        bodyStyle={{ padding: 0, paddingInline: 0 }}
      >
        <ProTable<any>
          search={false}
          // pagination={{pageSize: 10}}
          loading={loading}
          pagination={false}
          options={false}
          size={'small'}
          rowKey={'path'}
          scroll={{ y: 400 }}
          dataSource={dataSource}
          columnEmptyText={'-'}
          columns={[
            {
              title: '路径',
              key: 'path',
              render: (text, record) => {
                if (record.type === 'upperLevel') {
                  // 上级目录
                  return (
                    <div
                      className={'flex items-center cursor-pointer w-full'}
                      onClick={() => handlePathClick(record)}
                    >
                      <span
                        className={'pl-2'}
                        style={{ color: record.type === 'upperLevel' ? 'blue' : 'black' }}
                      >
                        {record.aliasPath}
                      </span>
                    </div>
                  );
                }
                if (record.type == 'dir') {
                  return (
                    <div
                      className={'flex items-center cursor-pointer w-full'}
                      onClick={() => handlePathClick(record)}
                    >
                      <FolderOutlined />
                      <span
                        className={'pl-2 '}
                        style={{ color: record.type === 'upperLevel' ? 'blue' : 'black' }}
                      >
                        {record.path}
                      </span>
                    </div>
                  );
                }

                return (
                  <div
                    className={'flex items-center cursor-pointer w-full'}
                    onClick={() => handlePathClick(record)}
                  >
                    <FileOutlined />
                    <span className={'pl-2 '}>{record.path}</span>
                  </div>
                );
              },
            },
            {
              title: '大小',
              key: 'size',
              dataIndex: 'size',
              width: 100,
            },
          ]}
        />
      </Modal>
    </>
  );
};

export default PathSelector;
