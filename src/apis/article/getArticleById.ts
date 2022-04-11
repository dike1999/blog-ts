import request from '@/utils/request';

export interface IReqParams {
  articleId: number;
  type: number | undefined;
}

export interface IRes {
  id: number;
  title: string;
  content: string;
  tags: { name: string }[];
  categories: { name: string }[];
  like: number;
  viewCount: number;
  createdAt: string;
  updatedAt: string;
}

export default (params: IReqParams): Promise<IRes> => {
  let url = `/article/${params.articleId}`;
  if (params.type === 0) {
    url += `?type=${params.type}`;
  }
  return request.get(url);
};
