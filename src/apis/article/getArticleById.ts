import request from '@/utils/request';

export interface IReqParams {
  articleId: string | number;
  type: string | number;
}

export default (params: IReqParams) => {
  let url = `/article/${params.articleId}`;
  if (params.type === 0) {
    url += `?type=${params.type}`;
  }
  return request.get(url);
};
