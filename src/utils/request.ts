import { request } from '@@/exports';
import qs from 'qs';

const postForm = (url: string, formData: any = {}, options: any = {}) => {
  const data = qs.stringify(formData);
  const token = localStorage.getItem('token') || '';
  return request<any>(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: token,
    },
    data: data,
    ...(options || {}),
  }).then((res) => {
    const { code, success, data: _data, message } = res as any;
    if (code === 0 || success) {
      return Promise.resolve({ ..._data });
    }
    return Promise.reject(message);
  });
};

/** POST json */
const postJSON = (url: string, data: any = {}, options: any = {}) => {
  const token = localStorage.getItem('token') || '';
  return request(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    data: data,
    ...(options || {}),
  }).then((res) => {
    const { code, success, data: _data, message } = res as any;
    if (code === 0 || success) {
      return Promise.resolve({ ..._data });
    }
    return Promise.reject(message);
  });
};

export { postForm, postJSON };
