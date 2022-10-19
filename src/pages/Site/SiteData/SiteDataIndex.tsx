import { Col, Row } from 'antd';

const SiteDataIndex = () => {
  return (
    <div className={'bg-[#f5f7fb] p-4'}>
      <div className={'py-4 font-bold text-2xl'}>数据统计</div>
      <Row className={''} gutter={[16, 32]}>
        <Col span={24} sm={24} md={12} lg={8} xl={6}>
          <div
            className={
              ' rounded shadow shadow-gray-400 bg-white p-4 flex justify-items-center align-middle items-center'
            }
          >
            <div className={'mr-2 p-1 align-middle'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-white w-10 h-10 rounded bg-blue-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <desc>Download more icon variants from https://tabler-icons.io/i/world-upload</desc>
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M21 12a9 9 0 1 0 -9 9"></path>
                <path d="M3.6 9h16.8"></path>
                <path d="M3.6 15h8.4"></path>
                <path d="M11.578 3a17 17 0 0 0 0 18"></path>
                <path d="M12.5 3c1.719 2.755 2.5 5.876 2.5 9"></path>
                <path d="M18 21v-7m3 3l-3 -3l-3 3"></path>
              </svg>
            </div>
            <div>
              <div className={'text-gray-500 font-bold'}>总上传量</div>
              <div className={'text-xl font-bold'}>188.4 TiB</div>
            </div>
          </div>
        </Col>
        <Col span={24} sm={24} md={12} lg={8} xl={6}>
          <div
            className={
              ' rounded shadow shadow-gray-400 bg-white p-4 flex justify-items-center align-middle items-center'
            }
          >
            <div className={'mr-2 p-1 align-middle'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-white font-normal w-10 h-10 rounded bg-red-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <desc>
                  Download more icon variants from https://tabler-icons.io/i/world-download
                </desc>
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M21 12a9 9 0 1 0 -9 9"></path>
                <path d="M3.6 9h16.8"></path>
                <path d="M3.6 15h8.4"></path>
                <path d="M11.578 3a17 17 0 0 0 0 18"></path>
                <path d="M12.5 3c1.719 2.755 2.5 5.876 2.5 9"></path>
                <path d="M18 14v7m-3 -3l3 3l3 -3"></path>
              </svg>
            </div>
            <div>
              <div className={'text-gray-500 font-bold'}>总下载量</div>
              <div className={'text-xl font-bold'}>9.7 TiB</div>
            </div>
          </div>
        </Col>
        <Col span={24} sm={24} md={12} lg={8} xl={6}>
          <div
            className={
              ' rounded shadow shadow-gray-400 bg-white p-4 flex justify-items-center align-middle items-center'
            }
          >
            <div className={'mr-2 p-1 align-middle'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="rounded bg-green-500  text-white"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 12h-3.586a1 1 0 0 1 -.707 -1.707l6.586 -6.586a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 -.707 1.707h-3.586v3h-6v-3z"></path>
                <path d="M9 21h6"></path>
                <path d="M9 18h6"></path>
              </svg>
            </div>
            <div>
              <div className={'text-gray-500 font-bold'}>总做种数</div>
              <div className={'text-xl font-bold'}>791</div>
            </div>
          </div>
        </Col>
        <Col span={24} sm={24} md={12} lg={8} xl={6}>
          <div
            className={
              ' rounded shadow shadow-gray-400 bg-white p-4 flex justify-items-center align-middle items-center'
            }
          >
            <div className={'mr-2 p-1 align-middle'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" rounded bg-green-500 text-white"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1"></path>
                <polyline points="9 15 12 12 15 15"></polyline>
                <line x1="12" y1="12" x2="12" y2="21"></line>
              </svg>
            </div>
            <div>
              <div className={'text-gray-500 font-bold'}>总上传量</div>
              <div className={'text-xl font-bold'}>36.4 TiB</div>
            </div>
          </div>
        </Col>
      </Row>
      <div>
        <div>今日上传</div>
        <div>今日下载</div>
      </div>
      <div>历史数据</div>
      <div>站点数据</div>
    </div>
  );
};

export default SiteDataIndex;
