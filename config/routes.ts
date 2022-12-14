/**
 * @name umi 的路由配置
 * @description 只支持 path,component,routes,redirect,wrappers,title 的配置
 * @param path  path 只支持两种占位符配置，第一种是动态参数 :id 的形式，第二种是 * 通配符，通配符只能出现路由字符串的最后。
 * @param component 配置 location 和 path 匹配后用于渲染的 React 组件路径。可以是绝对路径，也可以是相对路径，如果是相对路径，会从 src/pages 开始找起。
 * @param routes 配置子路由，通常在需要为多个路径增加 layout 组件时使用。
 * @param redirect 配置路由跳转
 * @param wrappers 配置路由组件的包装组件，通过包装组件可以为当前的路由组件组合进更多的功能。 比如，可以用于路由级别的权限校验
 * @doc https://umijs.org/docs/guides/routes
 */
export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './User/Login',
      },
    ],
  },
  {
    path: '/welcome',
    name: '开始',
    icon: 'HomeOutlined',
    component: './Welcome/Welcome',
  },

  {
    path: '/resource_search',
    name: '资源搜索',
    icon: 'SearchOutlined',
    component: './ResourceSearch/ResourceSearchIndex',
  },
  // 推荐
  {
    path: '/recommend',
    name: '推荐',
    icon: 'HeartOutlined',
    routes: [
      {
        path: '/recommend/hm',
        name: 'TMDB热门电影',
        component: './Recommend/RecommendIndex',
      },
      {
        path: '/recommend/ht',
        name: 'TMDB热门电视剧',
        component: './Recommend/RecommendIndex',
      },
      {
        path: '/recommend/nm',
        name: 'TMDB最新电影',
        component: './Recommend/RecommendIndex',
      },
      {
        path: '/recommend/nt',
        name: 'TMDB最新电视剧',
        component: './Recommend/RecommendIndex',
      },
      {
        path: '/recommend/dbom',
        name: '豆瓣正在上映',
        component: './Recommend/RecommendIndex',
      },
      {
        path: '/recommend/dbhm',
        name: '豆瓣热门电影',
        component: './Recommend/RecommendIndex',
      },
      {
        path: '/recommend/dbht',
        name: '豆瓣热门电视剧',
        component: './Recommend/RecommendIndex',
      },
      {
        path: '/recommend/dbdh',
        name: '豆瓣热门动画',
        component: './Recommend/RecommendIndex',
      },
      {
        path: '/recommend/dbnm',
        name: '豆瓣最新电影',
        component: './Recommend/RecommendIndex',
      },
      {
        path: '/recommend/dbtop',
        name: '豆瓣TOP250电影',
        component: './Recommend/RecommendIndex',
      },
      {
        path: '/recommend/dbzy',
        name: '豆瓣热门综艺',
        component: './Recommend/RecommendIndex',
      },
    ],
  },

  // - 站点管理
  {
    path: '/site',
    name: '站点管理',
    icon: 'CloudServerOutlined',
    routes: [
      {
        path: '/site/maintain',
        name: '站点维护',
        component: './Site/SiteMaintain/SiteMaintainIndex',
      },
      {
        path: '/site/data',
        name: '数据统计',
        component: './Site/SiteData/SiteDataIndex',
      },
      {
        path: '/site/rush_mission',
        name: '刷流任务',
        component: './Site/SiteRushMission/SiteRushMissionIndex',
      },
      {
        path: '/site/site_resource',
        name: '站点资源',
        component: './Blank/Blank',
      },
    ],
  },

  // - 订阅管理
  {
    path: '/subscribe',
    name: '订阅管理',
    icon: 'CheckCircleOutlined',
    component: './Blank/Blank',
    routes: [
      // 电影订阅
      { path: '/subscribe/movie', name: '电影订阅', component: './Blank/Blank' },
      // 电视剧订阅
      { path: '/subscribe/tv', name: '电视剧订阅', component: './Blank/Blank' },
      // 自定义订阅
      { path: '/subscribe/custom', name: '自定义订阅', component: './Blank/Blank' },
      // 订阅日历
      { path: '/subscribe/calendar', name: '订阅日历', component: './Blank/Blank' },
    ],
  },
  // 下载管理
  {
    path: '/download',
    name: '下载管理',
    icon: 'DownloadOutlined',
    component: './Blank/Blank',
    routes: [
      // 正在下载
      { path: '/download/ing', name: '正在下载', component: './Blank/Blank' },
      // 近期下载
      { path: '/download/recent', name: '近期下载', component: './Blank/Blank' },
    ],
  },
  {
    // 媒体整理
    path: '/media',
    name: '媒体整理',
    icon: 'FolderViewOutlined',
    routes: [
      // 媒体文件
      { path: '/media/file', name: '媒体文件', component: './Media/MediaFile/MediaFileIndex' },
      // 手动识别
      { path: '/media/manual', name: '手动识别', component: './Blank/Blank' },
      // 历史记录
      { path: '/media/history', name: '历史记录', component: './Blank/Blank' },
      // TMDB缓存
      { path: '/media/tmdb_cache', name: 'TMDB缓存', component: './Blank/Blank' },
    ],
  },

  // 服务
  {
    path: '/service',
    name: '服务',
    icon: 'AppstoreOutlined',
    component: './Service/ServiceIndex',
  },
  {
    // 设置
    path: '/setting',
    name: '设置',
    icon: 'SettingOutlined',
    routes: [
      // 基础设置
      { path: '/setting/base', name: '基础设置', component: './Blank/Blank' },
      // 用户管理
      { path: '/setting/user', name: '用户管理', component: './Setting/User/SettingUserIndex' },
      // 媒体库
      {
        path: '/setting/media',
        name: '媒体库',
        component: './Setting/Library/SettingLibraryIndex',
      },
      // 目录同步
      {
        path: '/setting/directory_sync',
        name: '目录同步',
        component: './Setting/DirectorySync/SettingDirectorySyncIndex',
      },
      // 消息通知
      { path: '/setting/message', name: '消息通知', component: './Blank/Blank' },
      // 过滤规则
      { path: '/setting/filter', name: '过滤规则', component: './Blank/Blank' },
      // 自定义识别词
      { path: '/setting/custom_word', name: '自定义识别词', component: './Blank/Blank' },
      // 索引器
      { path: '/setting/indexer', name: '索引器', component: './Blank/Blank' },
      // 下载器
      { path: '/setting/downloader', name: '下载器', component: './Blank/Blank' },
      // 媒体服务器
      { path: '/setting/media_server', name: '媒体服务器', component: './Blank/Blank' },
      // 字幕
      { path: '/setting/subtitle', name: '字幕', component: './Blank/Blank' },
      // 豆瓣
      { path: '/setting/douban', name: '豆瓣', component: './Blank/Blank' },
    ],
  },

  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/admin',
        redirect: '/admin/sub-page',
      },
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        component: './Admin',
      },
    ],
  },
  {
    name: '组件示例',
    path: '/component-demo',
    component: './ComponentDemo/ComponentDemoIndex',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '*',
    layout: false,
    component: './404',
  },
];
