import type { ProColumns } from '@ant-design/pro-components';
import { ProTable, TableDropdown } from '@ant-design/pro-components';

const valueEnum = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};

export type TableListItem = {
  key: number;
  siteName: string;
  siteIcon: string;
  siteStatus: number;
  siteLevel: string;
  siteUpload: number;
  siteDownload: number;
  creator: string;
  status: string;
  createdAt: number;
  memo: string;
};
const tableListDataSource: TableListItem[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];
const sites = ['柠檬', '我堡', '馒头', '观众', '红豆饭'];
const siteIcons = [
  'data:image/ico;base64,AAABAAEAMDAAAAEAIACoJQAAFgAAACgAAAAwAAAAYAAAAAEAIAAAAAAAACQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZAE4AmQDPAJkA/wCZAL8AmQCPAJkAPgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZAO8AmQD/AJkA/wCZAP8AmQD/AJkA/wCZAN8AmQBeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJkAHgCZAP8AmQD/AJkA/wOcCf8AmQD/AJkA/wCZAP8AmQD/AJkA3wCZAD4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJkAMACZAP8AmQD/AJkA/xavQ/8AmQD/AJkA/wCZAP8Npib/AJkA/wCZAP8AmQCvAJkADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZAP8AmQD/AJkA/wOcCv8Zskz/AJkA/wCZAP8pwnz/AJkA/wCZAP8AmQD/AJkAzwCZAC4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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//8ozP//M8z//zPM//8zzP//M8z//zPM//8zzP//zPL//8zy//8zzP//M8z//zPM//8zzP//M8z//zPM//8qzP//iuf////////u/P//aOH//xLQ//985f8cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGYAEABmAM8gpl//M8yZ/zPMmf8zzJn/M8yZ/zDGj/8WkkP/BnMT/yCmYP9P19v/H9L//+L5//9k3v//3Pj//+D4//8zzP//M8z//zPM//8zzP//M8z//zPM//8zzP//zPL//8zy//8zzP//M8z//zPM//8zzP//M8z//zPM//933f///v///6Dr//8az///+P7//0Ta//8/2f/nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmABAAZgDPAGYA/w2AJv8NgCb/DYAm/wNsCv8AZgD/AGYA/w50Hf8V0P7/vfL//5rp//8BzP//KMz//+L4///4/f//SdL//zPM//8zzP//M8z//zPM//8zzP//zPL//8zy//8zzP//M8z//zPM//8zzP//M8z//3fd///+////sOv//yvM//8HzP//Tdn//9X3//8U0P//cOL/bgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZgAQAGYAzwBmAP8AZgD/AGYA/wBmAP8AZgD/AGYA/0C/vv882P///////xHO//8YzP//M8z//zPM///i+P//+P3//0rS//8zzP//M8z//zPM//8zzP//zPL//8zy//8zzP//M8z//zPM//8zzP//d93///7///+w6///M8z//zPM//8gzP//Bcz//8rz//9p4f//Ndf/7wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGYAEABmAJ8AZgD/AGYA/wBmAP8AZgD/AGYA/x/Q+/+v7///heT//wTM//8zzP//M8z//zPM//8zzP//4fj///j9//9K0v//M8z//zPM//8zzP//zPL//8zy//8zzP//M8z//zPM//933f///v///7Dr//8zzP//M8z//zPM//8yzP//C8z//03Z///X9///Cc7//3fk/zoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZgBQAGYA3wBmAP8AZgD/J5BV/xTQ///1/f//JdH//xjM//8zzP//M8z//zPM//8zzP//M8z//+L4///4/f//SdL//zPM//8zzP//zPL//8zy//8zzP//M8z//3fd///+////sOv//zPM//8zzP//M8z//zPM//8zzP//Jsz//wXM////////Mtb//13f/60AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmAFAAZgCBRMTK70DZ////////Acz//yzM//8zzP//M8z//zPM//8zzP//M8z//zPM///i+P//+P3//0rS//8zzP//zPL//8zy//8zzP//d93///7////M8v//M8z//zPM//8zzP//M8z//zPM//8zzP//M8z//wPM//+a6f//c+P//zXX/+8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP9n/5XTj//+a6f//Bcz//zPM//8zzP//M8z//zPM//8zzP//M8z//zPM//8zzP//4fj///j9//9K0v//zPL//8zy//933f///v///+H4//8zzP//M8z//zPM//8zzP//M8z//zPM//8zzP//M8z//wvM//9O2f//vvL//xLQ//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANdf/76Xt//9x4P//C8z//zPM//8zzP//M8z//zPM//8zzP//M8z//zPM//8zzP//M8z//+L4///4/f//2PX//9Lz///4/f//4vj//zPM//8zzP//M8z//zPM//8zzP//M8z//zPM//8zzP//M8z//xPM//8x0///9P3//wPN//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANNb/79T2///0/f//8Pz///L8///y/P//8vz///L8///y/P//8vz///L8///y/P//8vz///L8///9///////////////9////8vz///L8///y/P//8vz///L8///y/P//8vz///L8///y/P//8vz///H8///x/P///////wfN//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANNb/79T3///S9f//wfL//8zy///M8v//zPL//8zy///M8v//zPL//8zy///M8v//zPL//8zy///S8//////////////d9v//zPL//8zy///M8v//zPL//8zy///M8v//zPL//8zy///M8v//zPL//8Xy///G8////////wbN//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANdf/76/v//9w4P//C8z//zPM//8zzP//M8z//zPM//8zzP//M8z//zPM//8zzP//M8z//0rS///4/f//+P3//+v6///+////d93//zPM//8zzP//M8z//zPM//8zzP//M8z//zPM//8zzP//M8z//xTM//8x0///9P3//wLM//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP9n/53Xj//+a6f//Bcz//zPM//8zzP//M8z//zPM//8zzP//M8z//zPM//8zzP//SdL///j9///h+P//zPL//8zy//+w6////v///3fd//8zzP//M8z//zPM//8zzP//M8z//zPM//8zzP//M8z//wzM//9O2f//xfP//xLQ//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVt3/vzvY////////Acz//yzM//8zzP//M8z//zPM//8zzP//M8z//zPM//9K0v//+P3//+L4//8zzP//zPL//8zy//8zzP//sOv///7///933f//M8z//zPM//8zzP//M8z//zPM//8zzP//Mcz//wXM//+a6f//deP//zXX/+8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAc+P/Vg/P///7/v//JdH//xjM//8zzP//M8z//zPM//8zzP//M8z//0nS///4/f//4vj//zPM//8zzP//zPL//8zy//8zzP//M8z//7Dr///+////d93//zPM//8zzP//M8z//zPM//8zzP//JMz//wXM////////Ndf//13f/60AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/S//us7v//hOT//wXM//8wzP//M8z//zPM//8zzP//M8z//+H4///i+P//M8z//zPM//8zzP//zPL//8zy//8zzP//M8z//zPM//+w6////v///4vi//8zzP//M8z//zPM//8zzP//Dsz//07Z///i+f//B83//3fk/zwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFbd/7892P//+/7//xLO//8czP//M8z//zPM//8zzP//4vj///j9//9M0v//M8z//zPM//8zzP//zPL//8zy//8zzP//M8z//zPM//8zzP//sOv///////+v6///M8z//zPM//8kzP//Bsz//8rz//9w4v//Ndf/7wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHzl/x4U0P//wPL//5rp//8EzP//J8z//zPM///h+P//+P3//0vS//8zzP//M8z//zPM//8zzP//zPL//8zy//8zzP//M8z//zPM//8zzP//M8z//7Dr////////r+v//y/M//8EzP//Tdn//+H5//8Lzv//buL/cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABd3/+tNdf//+X6//9O2f//Bsz//+H4///4/f//TNL//zPM//8zzP//M8z//zPM//8zzP//zPL//8zy//8zzP//M8z//zPM//8zzP//M8z//zPM//+w6////////6Dr//8Zz///+P7//07c//8/2f/nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANdf/71je////////4vn///b9//9C0v//M8z//zPM//8zzP//M8z//zPM//8zzP//zPL//8zy//8zzP//M8z//zPM//8zzP//M8z//zPM//8xzP//oOv///7////0/f//hef//xPQ//985f8eAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfOX/HivV//ec6////////2Pe//8EzP//G8z//zHM//8zzP//M8z//zPM//8zzP//zPL//8zy//8zzP//M8z//zPM//8zzP//M8z//yTM//8GzP//JNH//+n6///U9v//GtH//XTj/1YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHfk/zwr1f/3Wt7///X9//+Z6f//Cs3//wfM//8gzP//MMz//zPM//8zzP//zPL//8zy//8zzP//M8z//zDM//8hzP//C8z//wXM//9e3P///////3/l//8U0P//c+P/VgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB85f8eNdf/7y7V///K9P///////2/g//8Rzv//Asz//wjM//8PzP//xPL//8Ty//8RzP//Csz//wPM//8Kzf//Tdn//+P5///X9///Sdv//yDS//tz4/9WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFbd/78Y0f/9Vt3//8f0///7/v//yfP//4Tk//9N2f//0vX//9L1//9N2f//cOD//7Du///9////1/f//2fh//8Rz///Rtr/23zl/x4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB35P88Vt3/vxLQ//8c0v//Wd7//5nr///U9v//+/7///v+///U9v//pu3//23i//8v1f//BM3//0ba/9tz4/9WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABo4f+HTtz/zzTW/+8Rz///Acz//wHM//8BzP//NNb/70ba/9tj4P+dfOX/HgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////8AAP///////wAA////////AAD///////8AAP/w/////wAA/+A/////AAD/4A////8AAP/gA////wAA/+AB////AAD/4AD///8AAP/gAH///wAA+AAAf///AADgAAAAP/8AAMAAAAAP/wAAwAAAAAP/AADgAAAAAf8AAOAAAAAA/wAA8AAAAAB/AADwAAAAAD8AAPgAAAAAHwAA/AAAAAAfAAD+AAAAAA8AAP8AAAAADwAA/8AAAAAHAAD/8AAAAAcAAP/4AAAABwAA//gAAAAHAAD/+AAAAAcAAP/4AAAABwAA//gAAAAHAAD/+AAAAAcAAP/4AAAABwAA//wAAAAHAAD//AAAAA8AAP/8AAAADwAA//4AAAAfAAD//gAAAB8AAP//AAAAPwAA//+AAAB/AAD//8AAAP8AAP//4AAB/wAA///wAAP/AAD///wAD/8AAP///wA//wAA////////AAD///////8AAP///////wAA////////AAA=',
];
const siteLevels = ['(专科)Insane User', 'Elite User', 'POWER USER', '少校', '持剑下山'];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    siteName: sites[i],
    siteIcon: siteIcons[0],
    siteStatus: i,
    siteLevel: siteLevels[i],
    siteUpload: Math.floor(Math.random() * 999),
    siteDownload: Math.floor(Math.random() * 20),
    creator: creators[Math.floor(Math.random() * creators.length)],
    status: valueEnum[Math.floor(Math.random() * 10) % 4],
    createdAt: Date.now() - Math.floor(Math.random() * 100000),
    memo: i % 2 === 1 ? '很长很长很长很长很长很长很长的文本要展示但是要留下尾巴' : '简短备注文案',
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: '站点',
    dataIndex: 'siteName',
    render: (_, site) => (
      <div className={'flex flex-row justify-items-center align-middle items-center'}>
        <div>
          <div
            className={`w-2 h-2 rounded-full ${
              site.siteStatus % 3 === 2 ? 'bg-red-500' : 'bg-green-500'
            }`}
          ></div>{' '}
        </div>
        <div className={'pl-1'}>
          <img src={site.siteIcon} />
        </div>
        <div className={'pl-1'}>
          <div>
            <a href="#">{site.siteName}</a>
          </div>
          <div className={'text-gray-500'}>用户名</div>
        </div>
      </div>
    ),
  },
  {
    title: '等级',
    dataIndex: 'siteLevel',
  },
  {
    title: '数据量',
    dataIndex: 'siteUpload',
    render: (_, site) => (
      <div className={'flex flex-col'}>
        <div className={'text-green-500'}>上传 {site.siteUpload} GB</div>
        <div className={'text-orange-500'}>下载 {site.siteDownload} GB</div>
      </div>
    ),
    sorter: (a, b) => a.siteUpload - b.siteUpload,
  },
  {
    title: '分享率',
    width: 80,
    render: (_, site) => <>{(site.siteUpload / (site.siteDownload || 1)).toFixed(2)}</>,
  },
  {
    title: '操作',
    width: 180,
    key: 'option',
    valueType: 'option',
    render: () => [
      <a key="link3">刷新</a>,
      <TableDropdown
        key="actionGroup"
        menus={[
          { key: 'copy', name: '复制' },
          { key: 'delete', name: '删除' },
        ]}
      />,
    ],
  },
];

const SiteDataTable = () => {
  return (
    <ProTable<TableListItem>
      dataSource={tableListDataSource}
      rowKey="key"
      pagination={{
        showQuickJumper: true,
      }}
      columns={columns}
      search={false}
      dateFormatter="string"
      toolBarRender={() => []}
    />
  );
};

export default SiteDataTable;
