import {Button, Card, Col, Divider, Row, Tag} from "antd";
import {ProCard} from "@ant-design/pro-components";
import Meta from "antd/es/card/Meta";

const ResourceSearchIndex = () => {

  const dataSource = [];
  for (let i = 0; i < 7; i++) {
    dataSource.push({
      key: i,
      name: `欢迎来到实力至上主义教室 (2017) S1E${i}`,
      age: 32,
      address: ` 【极影字幕社】★7月新番【欢迎来到实力至上主义教室/Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e】【${i}】【GB】【1080P】【MP4】 `,
    });
  }


  return (
    <ProCard style={{margin: 0, padding: 0, backgroundColor: '#f5f7fb'}} direction={"column"}
             title={<span style={{fontWeight: "bold"}}>资源搜索</span>}
             extra={<Button type={"primary"}>搜索</Button>}
    >
      <Row style={{margin: 0, padding: 0}} gutter={[8, 12]}>
        {
          dataSource.map((item, index) => {
            return (
              <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                <Card
                  key={index}
                  cover={
                    <img
                      alt="example"
                      src="https://image.tmdb.org/t/p/w500/c2sl2dLlyFFeb18pJtOpBD8cidr.jpg"
                    />
                  }
                >
                  <Meta
                    description={<>
                      <Tag color={'green'}>动漫花园</Tag>
                      <Tag color={'orange'}>1080P</Tag>
                      <Tag color={'yellow'}>1.2GB</Tag>
                    </>}
                  />
                  <Divider/>
                  <Meta
                    title={item.name}
                    description={item.address}
                  />
                </Card>
              </Col>


            )


          })
        }
      </Row>
    </ProCard>
  );
};

export default ResourceSearchIndex;
