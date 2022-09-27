import { useEffect, useState } from "react";
import axios, { Method, AxiosRequestConfig } from "axios";

axios.defaults.baseURL = "https://tinyurl.com/2p9d3prs";

type AxiosProps = {
  method: Method;
  url: string;
  config?: AxiosRequestConfig;
  body?: any;
};

const useAxios = ({ url, method, body, config }: AxiosProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const fetchData = async () => {
    try {
      const response = await axios({
        url: url,
        method: method,
        data: body,
      });
      const data = response?.data;
      setData(data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [url]);

  return { loading, error, data };
};

export { useAxios };
