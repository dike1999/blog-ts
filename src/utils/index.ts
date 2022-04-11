import { get } from '@/utils/storage';

/**
 * 获取 token
 * @returns
 */
export function getToken() {
  let token = '';
  const userInfo = get('userInfo');

  if (userInfo && userInfo.token) {
    token = `Bearer ${userInfo.token}`;
  }

  return token;
}
