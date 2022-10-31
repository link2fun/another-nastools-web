import { IconPlus, IconX } from '@tabler/icons';

const SettingLibraryItem = () => {
  return (
    <div className={' rounded-xl shadow-md mb-4'}>
      <div className={'flex justify-between items-center bg-white px-3 py-4 rounded-t-xl'}>
        <div className={'font-bold text-2xl'}>电影</div>
        <div className={'mr-2'}>
          <IconPlus className={'bg-[#1b5ba7] rounded'} color={'white'} size={32} />
        </div>
      </div>
      <div className={'text-gray-600 font-bold bg-[#f2f3f4]  p-3 '}>目录</div>
      <div className={'bg-white  divide-gray-200 divide-y rounded-b-xl'}>
        <div className={'row flex  justify-between items-center p-3 '}>
          <div>/nastools/电影</div>
          <div>
            <IconX color={'#206bc4'} />
          </div>
        </div>
        <div className={'row flex  justify-between items-center p-3 '}>
          <div>/nastools/电影</div>
          <div>
            <IconX color={'#206bc4'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingLibraryItem;
