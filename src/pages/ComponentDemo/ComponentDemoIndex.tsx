import PathSelector from '@/components/PathSelector';
import { ProForm, ProFormItem } from '@ant-design/pro-components';

const ComponentDemoIndex = () => {
  return (
    <div>
      <ProForm
        onFinish={async (values) => {
          console.log(values);
          return false;
        }}
        initialValues={{ dir: '' }}
      >
        <ProFormItem name={'dir'} label={'目录'} rules={[{ required: true }]}>
          <PathSelector />
        </ProFormItem>
      </ProForm>
    </div>
  );
};

export default ComponentDemoIndex;
