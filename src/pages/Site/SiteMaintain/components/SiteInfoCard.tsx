import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Tag } from 'antd';

const SiteInfoCard = () => {
  return (
    <div className="rounded-lg shadow-lg bg-white  ">
      <div className="py-2 px-4 border-b border-gray-300 flex justify-between items-center">
        <div className={'text-lg font-bold'}>
          红豆饭
          <span className="inline-flex justify-center items-center ml-2 w-5 h-5 text-lg font-semibold text-blue-800 bg-blue-200 rounded-full">
            2
          </span>
        </div>
        <div className={'flex items-center font'}>
          <span className={'p-2  inline-flex  hover:bg-gray-200 rounded cursor-pointer'}>
            <EditOutlined className={'w-4 h-4 '} />
          </span>
          <span className={'p-2  inline-flex  hover:bg-gray-200 rounded cursor-pointer'}>
            <DeleteOutlined className={'w-4 h-4 '} />
          </span>
        </div>
      </div>
      <div className="px-4 py-2">
        <div>
          <span className="text-gray-900 text-md font-bold mb-2 mr-3 w-1/4">站点地址: </span>{' '}
          <span className={'w-3/4'}>https://demo.com</span>
        </div>
        <p className="text-gray-700 text-base mb-4 mt-3">
          <Tag color="blue">电影</Tag>
          <Tag color="green">Cookie</Tag>
          <Tag color="purple">RSS</Tag>
        </p>
      </div>
    </div>
  );
};

export default SiteInfoCard;
