import { useMemo, useRef, useState } from 'react';
import { IconNetwork } from '@tabler/icons';
import ServiceComponent from '@/pages/Service/components/ServiceComponent';
import { postForm } from '@/utils/request';
import type { ProFormInstance } from '@ant-design/pro-components';
import { ModalForm, ProTable, useLatest } from '@ant-design/pro-components';

const targetHosts = [
  'www.themoviedb.org',
  'api.themoviedb.org',
  'api.tmdb.org',
  'image.tmdb.org',
  'webservice.fanart.tv',
  'api.telegram.org',
  'qyapi.weixin.qq.com',
  'www.opensubtitles.org',
];

const testResultInit = targetHosts.map((host) => {
  return { host: host, res: undefined, time: '' };
});

const NetworkTest = () => {
  const [open, setOpen] = useState(false);
  const formRef = useRef<ProFormInstance>();
  const [testResult, setTestResult] = useState<any[]>([...testResultInit.map((item) => item)]);
  const [testIndex, setTestIndex] = useState(0);
  const [testStatus, setTestStatus] = useState('idle');
  const testIndexLatest = useLatest(testIndex);
  const testResultLatest = useLatest(testResult);
  const btnName = useMemo(() => (testStatus === 'idle' ? '开始测试' : '测试中'), [testStatus]);

  const processTest = async () => {
    if (testIndexLatest.current < targetHosts.length) {
      setTestStatus('running');
      const host = targetHosts[testIndexLatest.current];
      const { data } = await postForm('/api/v1/service/network/test', { url: host });
      const _testResultLatest = testResultLatest.current;
      _testResultLatest[testIndexLatest.current].res = data.res;
      _testResultLatest[testIndexLatest.current].time = data.time;
      setTestResult(_testResultLatest);
      setTestIndex(testIndexLatest.current + 1);
      await processTest();
    }
    setTestStatus('idle');
  };

  const startTest = async () => {
    await setTestResult(
      testResultInit.map((item) => {
        return { host: item.host, res: undefined, time: '' };
      }),
    );
    setTestIndex(0);
    await processTest();
  };

  return (
    <div>
      <ServiceComponent
        icon={
          <IconNetwork
            size={40} // set custom `width` and `height`
            color={'white'} // set custom `fill` color
            stroke={2} // set `stroke-width`
            strokeLinejoin="round" // override other SVG props
          />
        }
        iconBgColor={'#17a2b8'}
        title={'网络连通性测试'}
        description={''}
        onClick={() => setOpen(true)}
      />

      <ModalForm
        title="网络连通性测试"
        formRef={formRef}
        open={open}
        modalProps={{ onCancel: () => setOpen(false), maskClosable: false, okText: btnName }}
        submitter={{ resetButtonProps: false }}
        onFinish={async () => {
          await startTest();
          return false;
        }}
      >
        <ProTable<any>
          pagination={false}
          search={false}
          toolbar={undefined}
          options={false}
          size={'small'}
          dataSource={testResult}
          rowKey={'host'}
          columns={[
            { title: '测试对象', dataIndex: 'host', hideInSearch: true },
            {
              title: '连通性',
              dataIndex: 'res',
              render: (_, record) => {
                if (record.res === undefined) {
                  return <></>;
                }
                if (record.res) {
                  return <span style={{ color: 'green' }}>连通</span>;
                }
                return <span style={{ color: 'red' }}>不通</span>;
              },
              hideInSearch: true,
            },
            { title: '耗时', dataIndex: 'time', hideInSearch: true },
          ]}
        />
      </ModalForm>
    </div>
  );
};

export default NetworkTest;
