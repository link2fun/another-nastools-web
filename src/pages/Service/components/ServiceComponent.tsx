import React from 'react';

export type ServiceComponentProps = {
  /** 图标 */
  icon: React.ReactNode;
  /** 图标背景色 */
  iconBgColor: string;
  /** 标题 */
  title: string;
  /** 描述 */
  description: string;
  /** 点击事件 */
  onClick: () => void;
};

const ServiceComponent: React.FC<ServiceComponentProps> = ({
  icon,
  iconBgColor,
  title,
  description,
  onClick,
}) => {
  return (
    <div
      className={
        'group hover:bg-gray-100 hover:cursor-pointer flex items-center p-3 rounded shadow-xl border border-solid border-gray-300'
      }
      onClick={onClick}
    >
      <div className={`p-1 rounded`} style={{ backgroundColor: iconBgColor }}>
        {icon}
      </div>
      <div className={'flex flex-col ml-2'}>
        <div className={'text-lg text-blue-500 group-hover:underline group-hover:cursor-pointer'}>
          {title}
        </div>
        {description && <div className={'text-gray-500'}>{description}</div>}
      </div>
    </div>
  );
};

export default ServiceComponent;
