import { PageContainer } from '@ant-design/pro-components';
import { useEffect, useState } from 'react';
import { postForm } from '@/utils/request';
import type { pathItem } from '@/components/PathSelector';
import Utils from '@/utils/utils';

const MediaFileIndex = () => {
  const [, onChange] = useState<string>('');

  const [loading, setLoading] = useState<boolean>(true);
  const [currentPath, setCurrentPath] = useState<string>('');

  // dataSource
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [_upperLevel, setUpperLevel] = useState<any>({});

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
        const upperLevelDir = currentPath;
        setDataSource([...data]);
        if (upperLevelDir) {
          setUpperLevel({ path: upperLevelDir, aliasPath: '返回上一级', type: 'upperLevel' });
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [currentPath]);

  return (
    <PageContainer breadcrumbRender={false} waterMarkProps={{ content: '' }} loading={loading}>
      <div className={'mb-3 flex justify-between text-lg'}>
        <div>
          <div
            className={'cursor-pointer hover:underline transform transition-all hover:font-medium'}
            onClick={() => handlePathClick(_upperLevel)}
          >
            返回上级
          </div>
        </div>
        <div className={'flex justify-end'}>
          <div className={'ml-1'}>转移目录</div>
          <div className={'ml-1'}>硬链接查询</div>
        </div>
      </div>
      <div>当前目录: {_upperLevel?.path}</div>
      <div>
        <div className={'scroll-auto h-auto'}>
          {dataSource.map((item: any) => {
            return (
              <div
                key={item.path}
                className={`flex items-center p-1 my-3 border border-solid border-gray-250 rounded-lg transition-all hover:-translate-y-1
                  hover:shadow-lg hover:border-gray-500 hover:bg-gray-100`}
              >
                <div
                  className={
                    'text-gray-600 text-center items-center mx-2 text-2xl align-middle flex items-center w-20 h-20 p-1 '
                  }
                >
                  <div
                    className={
                      'bg-gray-300 text-lg font-bold w-full h-full flex items-center text-center rounded-lg'
                    }
                  >
                    <span className={'w-full'}>{item?.ext || '目录'}</span>
                  </div>
                </div>
                <div className={'w-full'}>
                  <div
                    className={
                      'text-lg font-medium w-full cursor-pointer hover:underline link mb-2'
                    }
                    onClick={() => handlePathClick(item)}
                  >
                    {item.name || item.path}
                  </div>
                  <div></div>
                  <div className={'flex justify-between w-full flex-col md:flex-row'}>
                    <div>{item.size}</div>
                    <div className={'flex '}>
                      <div className={'badge-action'}>识别</div>
                      <div className={'badge-action'}>转移</div>
                      <div className={'badge-action'}>下载字幕</div>
                      <div className={'badge-action'}>硬链接查询</div>
                      <div className={'badge-action'}>重命名</div>
                      <div className={'badge-action'}>删除</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageContainer>
  );
};

export default MediaFileIndex;
