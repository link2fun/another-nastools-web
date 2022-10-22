import MediaInfoCard from '@/components/MediaInfoCard';
import MediaInfoModal from '@/components/MediaInfoModal';

const RecommendIndex = () => {
  const dataSource = [
    {
      title: '孤儿怨：首杀',
      score: '4',
      img: 'https://image.tmdb.org/t/p/original//a62ePavtFxPpDknc67mtAjUU2mZ.jpg',
    },
    {
      title: '双子座计划',
      score: '5.5',
      img: 'https://image.tmdb.org/t/p/original//OiiJmGgTZzWrraTO0fohjMqxfQ.jpg',
    },
    {
      title: '坠落',
      score: '7.4',
      img: 'https://image.tmdb.org/t/p/original//iFVVpIAzk9IZ8lGNAsB6jG9D3kc.jpg',
    },
    {
      title: '女巫也疯狂2',
      score: '7.7',
      img: 'https://image.tmdb.org/t/p/original//pXEn9MwmK8fP8F873SH955m8Z2Z.jpg',
    },
    {
      title: '钢之炼金术师完结篇：最后的炼成',
      score: '6.5',
      img: 'https://image.tmdb.org/t/p/original//qJD1kg5vrKKllZaZWyELVdxdbid.jpg',
    },
    {
      title: '月光光心慌慌：终结',
      score: '7',
      img: 'https://image.tmdb.org/t/p/original//3uDwqxbr0j34rJVJMOW6o8Upw5W.jpg',
    },
    {
      title: '雅典娜',
      score: '6.6',
      img: 'https://image.tmdb.org/t/p/original//66hefmZ1ZVLO1Hb57sZVGSlDAmM.jpg',
    },
    {
      title: 'Bullet Train',
      score: '7.5',
      img: 'https://image.tmdb.org/t/p/original//zl8dcSjJKj54JQss7BPxlxUYo99.jpg',
    },
    {
      title: '炼狱机器',
      score: '6.9',
      img: 'https://image.tmdb.org/t/p/original//bSqpOGzaKBdGkBLmcm1JJIVryYy.jpg',
    },
    {
      title: '秘密总部',
      score: '6.9',
      img: 'https://image.tmdb.org/t/p/original//8PsHogUfvjWPGdWAI5uslDhHDx7.jpg',
    },
    {
      title: '匹诺曹',
      score: '6.7',
      img: 'https://image.tmdb.org/t/p/original//zlKR9o7MSfCrfHv1UY4Ixv2fKJQ.jpg',
    },
    {
      title: '多哥',
      score: '6.8',
      img: 'https://image.tmdb.org/t/p/original//vBvHFU97cmep48zbl5X85gvXCn.jpg',
    },
    {
      title: 'Monster High: The Movie',
      score: '6.9',
      img: 'https://image.tmdb.org/t/p/original//tn3GWm0Erehkpur8PUuYWxGpul5.jpg',
    },
    {
      title: '蝙蝠侠和超人：超凡双子之战',
      score: '8.3',
      img: 'https://image.tmdb.org/t/p/original//nBaVsNvUxIuvhPw3xTaAJIw8me4.jpg',
    },
    {
      title: '雷神4：爱与雷霆',
      score: '6.7',
      img: 'https://image.tmdb.org/t/p/original//i1NAuDW8oOlV5dBbXPPTuPlt8sl.jpg',
    },
    {
      title: '孤岛寻踪',
      score: '6.5',
      img: 'https://image.tmdb.org/t/p/original//32PGid1UNXEzdZSyTeliIG4crKY.jpg',
    },
    {
      title: '野兽',
      score: '7',
      img: 'https://image.tmdb.org/t/p/original//uXYImv3I0aPuPBagN9qkB4l6iND.jpg',
    },
    {
      title: 'Werewolf by Night',
      score: '7.3',
      img: 'https://image.tmdb.org/t/p/original//jmv7EbqBuEk4V1U7OoSBaxkwawO.jpg',
    },
    {
      title: '黑亚当',
      score: '8.8',
      img: 'https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg',
    },
    {
      title: '之后4',
      score: '7',
      img: 'https://image.tmdb.org/t/p/original//6b7swg6DLqXCO3XUsMnv6RwDMW2.jpg',
    },
  ];
  return (
    <div className={'p-4'}>
      <div className={'font-bold text-2xl mb-2'}>正在热映</div>

      <div className={'container px-2 py-4 mx-auto flex flex-wrap '}>
        {dataSource.map((item, index) => {
          return (
            <div className={'w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6'} key={index}>
              <MediaInfoCard
                mediaType={'电影'}
                mediaScore={item.score}
                mediaImgUrl={item.img}
                mediaTitle={item.title}
              />
            </div>
          );
        })}
      </div>
      <MediaInfoModal />
    </div>
  );
};

export default RecommendIndex;
