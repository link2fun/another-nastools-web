import { postForm } from '@/utils/request';

const ApiUser = {
  /** 用户登录 */
  login: (username: string, password: string) =>
    postForm('/api/v1/user/login', { username, password }),

  /** 用户登出 */
  logout: () => postForm('/api/v1/system/logout'),

  /** 获取当前的用户 */
  currentUser: (options: any = {}) => {
    const userinfo_str = localStorage.getItem('userinfo') || '{}';
    // parse to obj
    const userinfo = JSON.parse(userinfo_str);
    return postForm('/api/v1/user/info', { username: userinfo.username }, options);
  },
};

export default ApiUser;
