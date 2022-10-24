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
  });
};

export { postForm };
