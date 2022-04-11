import { marked } from 'marked';
import Prismjs from 'prismjs';
import xss from 'xss';
import { get } from '@/utils/storage';

/**
 * 转换md语法为html
 * @param plainText
 * @param isGuardXss
 * @returns
 */
export const translateMarkdown = (plainText: string, isGuardXss = false) => {
  return marked(isGuardXss ? xss(plainText) : plainText, {
    renderer: new marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    breaks: true,
    smartLists: true,
    smartypants: true,
    highlight(code) {
      return Prismjs.highlight(code, Prismjs.languages.javascript, 'javascript');
    },
  });
};

/**
 * 获取 url query 参数
 * @param url
 * @returns
 */
export const decodeQuery = (url: string) => {
  url = decodeURIComponent(url);
  const params: any = {};
  const paramsStr = url.replace(/\.*\?/, ''); // a=1&b=2&c=&d=xxx&e
  paramsStr.split('&').forEach((v) => {
    const [key, value] = v.split('=');
    if (value && key) params[key] = value;
  });
  return params;
};

/**
 * 计算 评论数
 * @param commentList
 * @returns
 */
export const calcCommentsCount = (commentList: { replies: [] }[]) => {
  let count = commentList.length;
  commentList.forEach((item) => {
    count += item.replies.length;
  });
  return count;
};

/**
 * 取数组中的随机数
 * @param arr
 * @returns
 */
export const randomIndex = (arr: string | any[]) => Math.floor(Math.random() * arr.length);

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

/**
 * 生成随机 ID
 * @param {Number} len - 长度
 */
export function RandomId(len: number | undefined) {
  return Math.random().toString(36).substr(3, len);
}

/**
 * 对数组进行分组
 * @param {Array} arr - 分组对象
 * @param {Function} f
 * @returns 数组分组后的新数组
 */
export const groupBy = (arr: Array<any>, f: (arg0: any) => any) => {
  const groups: any = {};
  arr.forEach((item) => {
    const group = JSON.stringify(f(item));
    groups[group] = groups[group] || [];
    groups[group].push(item);
  });
  return Object.keys(groups).map((group) => groups[group]);
};

/**
 * 生成 color
 * @param list
 * @param colorList
 * @returns
 */
export function genertorColor(
  list = [],
  colorList = ['magenta', 'blue', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'geekblue', 'purple']
) {
  const _list = [...list];
  _list.forEach((l: { color: string }, i) => {
    l.color = colorList[i] || colorList[randomIndex(colorList)];
  });
  return _list;
}

export function debounce(func: any, wait: number) {
  let timer: NodeJS.Timeout | null = null;
  return function (this: any, ...args: any) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}
