import { commonRequest } from "@/utils/request/request";

interface Response<T = any> {
  code: number;
  status: string;
  data: T;
}

export const fetchPosters = () =>
  commonRequest.get<{ url: string; img: string }[]>("/posters");


export const fetchFeeds = (page: number, limit = 12) =>
  commonRequest.get<
    {
      id: number;
      image: string;
      title: string;
      like: boolean;
    }[]
  >(`/feeds?_page=${page}&_limit=${limit}`);
