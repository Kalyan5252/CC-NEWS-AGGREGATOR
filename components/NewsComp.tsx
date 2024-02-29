import React from 'react';
import NewsCard from './NewsCard';
import { NewsCompProps } from '@/types';
import { ArticleProps } from '@/types';

const NewsComp = ({ articles, topic }: NewsCompProps) => {
  // console.log('ch', articles);
  return (
    <div className="">
      <h2 className="font-bold text-2xl">{topic}</h2>
      <div className="p-10 flex flex-row overflow-scroll paralax gap-8 pt-14 cards">
        {/* <NewsCard /> */}
        {articles?.map((article: any, index: number) => {
          // console.log('chck:', article);
          return <NewsCard key={index} article={article} />;
        })}
      </div>
    </div>
  );
};

export default NewsComp;
