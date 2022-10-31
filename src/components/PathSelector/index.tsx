import { ProTable, useLatest } from '@ant-design/pro-components';
import { Input, InputRef, Modal } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { postForm } from '@/utils/request';

type PathSelectorProps = {
  value?: string;
  onChange?: (value: string) => void;
};

const PathSelector: React.FC<PathSelectorProps> = ({ value = '', onChange = () => {} }) => {
  const selectPathLatest = useLatest(value);
  const [open, setOpen] = useState<boolean>(false);
  const selectorInput = useRef<InputRef>(null);

  // dataSource
  const [dataSource, setDataSource] = useState<any[]>([]);

  useEffect(() => {
    postForm('/api/v1/system/path', { dir: selectPathLatest.current, filter: false })
      .then((data) => {
        console.log(data);
        // get upper dir
        const upperLevelDir = value.substring(0, value.lastIndexOf('/')) || '/';
        if (upperLevelDir) {
          setDataSource([{ path: upperLevelDir, aliasPath: '返回上一级', type: 'dir' }, ...data]);
        } else {
          setDataSource([...data]);
        }
      })
      .catch(() => {});
  }, [value]);

  return (
    <>
      <Input
        ref={selectorInput}
        onFocus={() => {
          setOpen(true);
          selectorInput.current?.blur();
        }}
        value={value}
      />

      <Modal
        open={open}
        title="选择路径"
        okText="选择"
        centered
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
          pagination={false}
          options={false}
          size={'small'}
          rowKey={'path'}
          scroll={{ y: 400 }}
          dataSource={dataSource}
          columns={[
            {
              title: '路径',
              key: 'path',
              render: (text, record) => {
                if (record?.aliasPath) {
                  return (
                    <span
                      className={'cursor-pointer'}
                      style={{ color: record.type === 'dir' ? 'blue' : 'black' }}
                    >
                      {record.aliasPath}
                    </span>
                  );
                }
                return <span className={'cursor-pointer'}>{record.path}</span>;
              },
            },
          ]}
          onRow={(record) => {
            return {
              onClick: () => {
                if (onChange) {
                  onChange(record.path);
                }
              },
            };
          }}
        />
      </Modal>
    </>
  );
};

export default PathSelector;
