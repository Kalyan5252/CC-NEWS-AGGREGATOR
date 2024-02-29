import Image from 'next/image';
import Hero from '@/components/Hero';
import NewsComp from '@/components/NewsComp';
import { fetchData, fetchQuery } from '@/utils';
import { HomeProps } from '@/types';
import SearchBar from '@/components/SearchBar';

export default async function Home({ searchParams }: HomeProps) {
  const newsData_en = await fetchData({ category: 'entertainment' });
  const newsData_en_bus = await fetchData({ category: 'business' });
  const newsData_en_tech = await fetchData({ category: 'technology' });
  const search = searchParams;
  let reqData;
  if (searchParams.q) {
    reqData = await fetchQuery({ q: searchParams.q });
  }
  // console.log(reqData);
  // console.log('search:', search.q);

  // const newsData_en = await fetchData({});
  // console.log(newsData_en_1);
  return (
    <div className="flex flex-col">
      <Hero />
      <div id="trans"></div>
      <SearchBar />
      {!searchParams.q ? (
        <div className="py-10 px-10">
          <NewsComp
            articles={newsData_en_tech.articles}
            topic="Technology News Articles"
          />
          <NewsComp
            articles={newsData_en.articles}
            topic="Entertainment News Articles"
          />
          <NewsComp
            articles={newsData_en_bus.articles}
            topic="Bussiness News Articles"
          />
        </div>
      ) : (
        <div className="py-10 px-20">
          <NewsComp topic={`${searchParams.q}`} articles={reqData.articles} />
        </div>
      )}
      <div className="py-10 px-20">
        {/* <NewsComp topic={`${searchParams.q}`} articles={reqData.articles} /> */}
      </div>
    </div>
  );
}
