import { IconAdjustmentsHorizontal } from '@tabler/icons';
import ServiceComponent from '@/pages/Service/components/ServiceComponent';
import { ProFormDigit, ProFormInstance, ProFormTextArea } from '@ant-design/pro-components';
import { ModalForm } from '@ant-design/pro-components';
import { message } from 'antd';
import { useRef, useState } from 'react';
import { postForm } from '@/utils/request';

type RuleTestResult = {
  /** 是否匹配成功 */
  flag: boolean;
  /** 匹配的规则 */
  name: string;
  /** 优先级 */
  order: number;
  /** 文本提示 */
  text: string;
};

const ServiceRuleTest = () => {
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState<Partial<RuleTestResult>>({ flag: false });
  const formRef = useRef<ProFormInstance>();

  return (
    <div>
      <ServiceComponent
        icon={
          <IconAdjustmentsHorizontal
            size={40} // set custom `width` and `height`
            color={'white'} // set custom `fill` color
            stroke={2} // set `stroke-width`
            strokeLinejoin="round" // override other SVG props
          />
        }
        iconBgColor={'#f59f00'}
        title={'过滤规则测试'}
        description={''}
        onClick={() => setOpen(true)}
      />
      <ModalForm
        title="过滤规则测试"
        formRef={formRef}
        open={open}
        layout={'vertical'}
        modalProps={{ onCancel: () => setOpen(false), maskClosable: false, okText: '识别' }}
        submitter={{ resetButtonProps: false }}
        onFinish={async (values) => {
          console.log(values);
          const apiResult: any = await postForm('/api/v1/service/rule/test', values);
          console.log(apiResult);
          const { success, data, message: _message } = apiResult;
          if (!success) {
            message.error(_message);
            return false;
          }
          setResult(data);
          return false;
        }}
      >
        <ProFormTextArea
          name={'title'}
          label={'标题'}
          placeholder={'请输入标题'}
          allowClear
          colProps={{ span: 24, lg: 16 }}
          rules={[{ required: true }]}
        />
        <ProFormDigit
          name={'size'}
          label={'大小'}
          placeholder={'大小(GB)'}
          allowClear
          addonAfter={'GB'}
          colProps={{ span: 24, lg: 8 }}
          rules={[{ required: true }]}
        />
        <ProFormTextArea name={'subtitle'} label={'描述'} placeholder={'请输入描述'} allowClear />

        <div className={'flex '}>
          {result?.flag && (
            <>
              <span className={'ml-2 badge-outline text-blue-500 border-blue-500'}>
                {result.text}
              </span>
              <span
                title="命中规则组"
                className={'ml-2 badge-outline text-orange-500 border-orange-500'}
              >
                {result.name}
              </span>
              <span
                title="命中规则在规则组内的序号"
                className={'ml-2 badge-outline text-blue-500 border-blue-500'}
              >
                优先级: {result.order}
              </span>
            </>
          )}
          {!result?.flag && <span className={'ml-2 badge-outline bg-red-500'}>{result.text}</span>}
        </div>
      </ModalForm>
    </div>
  );
};

export default ServiceRuleTest;
