import ServiceNameTest from '@/pages/Service/components/ServiceNameTest';
import NetworkTest from '@/pages/Service/components/NetworkTest';
import { PageContainer } from '@ant-design/pro-components';
import ServiceScheduleTask from '@/pages/Service/components/ServiceScheduleTask';

const ServiceIndex = () => {
  return (
    <PageContainer breadcrumbRender={false} waterMarkProps={{ content: '' }}>
      <div className={'flex flex-wrap'}>
        <div className={'w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2'}>
          <ServiceScheduleTask taskId={'rssdownload'} />
        </div>
        <div className={'w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2'}>
          <ServiceScheduleTask taskId={'rsssearch_all'} />
        </div>
        <div className={'w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2'}>
          <ServiceScheduleTask taskId={'pttransfer'} />
        </div>
        <div className={'w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2'}>
          <ServiceScheduleTask taskId={'autoremovetorrents'} />
        </div>
        <div className={'w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2'}>
          <ServiceScheduleTask taskId={'ptsignin'} />
        </div>
        <div className={'w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2'}>
          <ServiceScheduleTask taskId={'sync'} />
        </div>
        <div className={'w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2'}>
          <ServiceScheduleTask taskId={'douban'} />
        </div>
        <div className={'w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2'}>
          <ServiceScheduleTask taskId={'blacklist'} />
        </div>
        <div className={'w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2'}>
          <ServiceScheduleTask taskId={'rsshistory'} />
        </div>
        <div className={'w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2'}>
          <ServiceNameTest />
        </div>
        <div className={'w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2'}>
          <NetworkTest />
        </div>
      </div>
    </PageContainer>
  );
};

export default ServiceIndex;
