import axios, { type AxiosRequestConfig } from "axios";

interface AxiosResponse<T = never> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
  config: AxiosRequestConfig<T>;
  request?: any;
}

const fetcher = (url: string) =>
  axios.get<AxiosResponse>(url).then((res) => res.data);

export default fetcher;
