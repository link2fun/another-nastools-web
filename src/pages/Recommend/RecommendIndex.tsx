import MediaInfoCard from '@/components/MediaInfoCard';
import MediaInfoModal from '@/components/MediaInfoModal';
import { useModel } from '@umijs/max';
import { postForm } from '@/utils/request';
import { useEffect, useRef, useState } from 'react';
import { useInViewport, useThrottleFn } from 'ahooks';
import { useLatest } from '@ant-design/pro-components';

type RecommendItem = {
  id: number;
  orgid: number;
  title: string;
  fav: number;
  date: string;
  vote: number;
  image: string;
  overview: string;
  year: string;
  rssid: string;
};

const RecommendIndex = () => {
  const [dataSource, setDataSource] = useState<RecommendItem[]>([]);

  const { visible, mediaInfo, showMediaInfoModal, hideMediaInfoModal } =
    useModel('media-info-modal');

  const [page, setPage] = useState(1);
  const latestPageRef = useLatest(page);

  // loading state
  const [loading, setLoading] = useState(false);
  const latestLoadingRef = useLatest(loading);

  const loadRecommend = async () => {
    if (latestLoadingRef.current) {
      return;
    }
    setLoading(true);
    const data = await postForm('/api/v1/recommend/list', {
      type: 'hm',
      page: latestPageRef.current,
    });
    setDataSource([...dataSource, ...data.data.Items]);
    setPage(latestPageRef.current + 1);
    setLoading(false);
  };

  const ref = useRef(null);
  const [inViewport] = useInViewport(ref);

  const { run } = useThrottleFn(
    async () => {
      await loadRecommend();
    },
    { wait: 1000 },
  );

  useEffect(() => {
    run();
  }, [inViewport]);

  return (
    <div className={'p-4'}>
      <div className={'font-bold text-2xl mb-2'}>正在热映</div>

      <div className={'container px-2 py-4 mx-auto flex flex-wrap '}>
        {dataSource.map((item) => {
          return (
            <div
              key={item.id}
              className={'w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6'}
              onClick={() => {
                showMediaInfoModal({
                  title: item.title,
                  type: '电影',
                  releaseDate: item.date,
                  mainImgUrl: item.image,
                  tmdbId: '',
                  doubanId: '',
                  overview: item.overview,
                });
              }}
            >
              <MediaInfoCard
                mediaType={'电影'}
                mediaScore={item.vote}
                mediaImgUrl={item.image}
                mediaTitle={item.title}
                mediaOverview={item.overview}
              />
            </div>
          );
        })}
      </div>
      <MediaInfoModal visible={visible} mediaInfo={mediaInfo} handleClose={hideMediaInfoModal} />
      <div ref={ref} className={'loadMore'}></div>
    </div>
  );
};

export default RecommendIndex;
