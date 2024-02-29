import { QueryProps } from '@/types';

export async function fetchData(params: QueryProps) {
  const { q, country, sources, category, limit } = params;
  const headers = {
    'x-api-key': 'c08e47d6586442898872aac520d58a88',
  };
  // console.log(category);
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=10`,
    {
      headers: headers,
    }
  );
  const result = await res.json();
  return result;
}
export async function fetchQuery(params: QueryProps) {
  const { q, country, sources, category, limit } = params;
  const headers = {
    'x-api-key': 'c08e47d6586442898872aac520d58a88',
  };
  // console.log(category);
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${q}&pageSize=20`,
    {
      headers: headers,
    }
  );
  const result = await res.json();
  return result;
}
