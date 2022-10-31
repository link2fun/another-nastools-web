import { IconPlus, IconX } from '@tabler/icons';
import React from 'react';
import { LibraryItemConfig } from '@/pages/Setting/Library/SettingLibraryIndex';

type SettingLibraryItemProps = {
  /** 配置项 */
  item: LibraryItemConfig;
  /** 监听新增按钮点击 */
  onAdd?: (key: string) => void;
  /** 监听删除按钮点击 */
  onRemove?: (path: string) => void;
};

const SettingLibraryItem: React.FC<SettingLibraryItemProps> = ({
  item,
  onAdd = () => {},
  onRemove = () => {},
}) => {
  return (
    <div className={' rounded-xl shadow-md mb-4'}>
      <div className={'flex justify-between items-center bg-white px-3 py-4 rounded-t-xl'}>
        <div className={'font-bold text-2xl'}>{item.name}</div>
        <div className={'mr-2'}>
          <IconPlus
            className={'bg-[#1b5ba7] rounded cursor-pointer'}
            color={'white'}
            size={32}
            onClick={() => onAdd(item.key)}
          />
        </div>
      </div>
      <div className={'text-gray-600 font-bold bg-[#f2f3f4]  p-3 '}>目录</div>
      <div className={'bg-white  divide-gray-200 divide-y rounded-b-xl'}>
        {item.paths.map((dir) => (
          <div className={'row flex  justify-between items-center p-3 '} key={dir}>
            <div>{dir}</div>
            <div>
              <IconX color={'#206bc4'} onClick={() => onRemove(dir)} className={'cursor-pointer'} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingLibraryItem;
