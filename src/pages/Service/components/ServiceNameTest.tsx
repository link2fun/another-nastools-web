import { IconAlphabetGreek } from '@tabler/icons';
import ServiceComponent from '@/pages/Service/components/ServiceComponent';
import { ModalForm, ProFormInstance, ProFormText } from '@ant-design/pro-components';
import { message } from 'antd';
import { useRef } from 'react';

const ServiceNameTest = () => {
  const formRef = useRef<ProFormInstance>();

  return (
    <ModalForm
      title="名称识别测试"
      formRef={formRef}
      trigger={
        <ServiceComponent
          icon={
            <IconAlphabetGreek
              size={40} // set custom `width` and `height`
              color={'white'} // set custom `fill` color
              stroke={2} // set `stroke-width`
              strokeLinejoin="round" // override other SVG props
            />
          }
          iconBgColor={'#74b816'}
          title={'名称识别测试'}
          description={''}
          onClick={() => {}}
        />
      }
      submitter={false}
      onFinish={async (values) => {
        console.log(values);
        message.success('提交成功');
        return true;
      }}
    >
      <ProFormText name={'name'} label={'名称'} placeholder={'请输入名称'} />
    </ModalForm>
  );
};

export default ServiceNameTest;
