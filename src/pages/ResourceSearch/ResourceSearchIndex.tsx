import { Button, Card, Col, Divider, Row, Tag } from 'antd';
import { ProCard } from '@ant-design/pro-components';
import Meta from 'antd/es/card/Meta';
import { useEffect, useState } from 'react';
import { postForm } from '@/utils/request';

type SearchResult = {
  /** id */
  id: number;
  /** 资源标题 */
  title_string: string;
  /** 分辨率 */
  restype: string;
  /** 资源大小 */
  size: string;
  /** 做种人数 */
  seeders: number;
  /** 下载地址 */
  enclosure: string;
  /** 来源站点 */
  site: string;
  /** 资源年份 */
  year: string;
  /** 资源 季集 */
  es_string: string;
  /** 资源主图 */
  image: string;
  /** 资源类型： ANI-动漫，MOV-电影，TV-电视剧 */
  type: string;
  /** 资源评分 */
  vote: string;
  /** 种子名称 */
  torrent_name: string;
  /** 资源描述 */
  description: string;
  /** TMDB ID */
  tmdbid: string;
  /** 资源海报 */
  poster: string;
  /** 资源介绍 */
  overview: string;
  /** 资源来源网址 */
  pageurl: string;
  /** 资源发布组 */
  releasegroup: string;
  /** 资源上传系数 */
  uploadvalue: number;
  /** 资源下载系数 */
  downloadvalue: number;
  /** 资源标题 */
  title: string;
  /** 本地是否已经下载 */
  exist: false;
};

const ResourceSearchIndex = () => {
  // 定义搜索结果
  const [searchResult, setSearchResult] = useState<SearchResult[]>([]);

  useEffect(() => {
    postForm('/api/v1/search/result', {})
      .then((data: any) => {
        const { result } = data;
        setSearchResult(result);
      })
      .catch(() => {});
  }, []);

  return (
    <ProCard
      style={{ margin: 0, padding: 0, backgroundColor: '#f5f7fb' }}
      direction={'column'}
      title={<span style={{ fontWeight: 'bold' }}>资源搜索</span>}
      extra={<Button type={'primary'}>搜索</Button>}
    >
      <Row style={{ margin: 0, padding: 0 }} gutter={[8, 12]}>
        {searchResult.map((item, index) => {
          return (
            <Col xs={24} sm={24} md={12} lg={8} xl={6}>
              <Card key={index} cover={<img referrerPolicy={'no-referrer'} src={item.image} />}>
                <Meta
                  description={
                    <>
                      <Tag color={'green'}>{item.site}</Tag>
                      <Tag color={'orange'}>{item.restype}</Tag>
                      <Tag color={'yellow'}>{item.size}</Tag>
                    </>
                  }
                />
                <Divider />
                <Meta title={item.title_string} description={item.torrent_name} />
              </Card>
            </Col>
          );
        })}
      </Row>
    </ProCard>
  );
};

export default ResourceSearchIndex;
