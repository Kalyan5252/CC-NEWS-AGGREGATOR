'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { ArticleProps, NewsCompProps, NewsCardProps } from '@/types';
import NewsArticle from './NewsArticle';

const NewsCard = ({ article }: NewsCardProps) => {
  // const NewsCard = (article: NewsCompProps) => {
  // const { source, description, urlToImage, publishedAt, content } = news.title;
  // console.log(
  //   'title:',
  //   title,
  //   source,
  //   description,
  //   urlToImage,
  //   publishedAt,
  //   content
  // );
  const {
    source,
    author,
    title,
    description,
    urlToImage,
    publishedAt,
    content,
  } = article;

  // console.log('news:', {
  //   source,
  //   author,
  //   title,
  //   description,
  //   urlToImage,
  //   publishedAt,
  //   content,
  // });
  // const { news: art } = news;
  // console.log('out:', art);

  const handleClick = () => {
    setIsOpen(true);
  };

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className=" p-4 min-w-[300px] justify-between flex flex-col space-y-5 bg-blue-50 rounded-lg hover:shadow-md transition-all
    cursor-pointer"
      onClick={handleClick}
    >
      <h1 className="font-bold text-center">{title}</h1>
      <div className="flex justify-center rounded-lg">
        <Image
          src={
            urlToImage
              ? `${urlToImage}`
              : 'https://imgs.search.brave.com/QrJh_YZxTIO9ecx-kfTfI3TmtTw6Utu4jdEtXvCCv20/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdC5k/ZXBvc2l0cGhvdG9z/LmNvbS8xMDA2ODk5/LzM3NzYvaS80NTAv/ZGVwb3NpdHBob3Rv/c18zNzc2NTMzOS1z/dG9jay1waG90by1u/ZXdzLmpwZw'
          }
          alt="pic"
          height={100}
          width={100}
          className="rounded-lg"
        />
      </div>
      <div className="flex text-sm gap-1 text-gray-500">
        Source:
        <span className="">{source.name}</span>
      </div>

      <NewsArticle
        isOpen={isOpen}
        article={article}
        closeDialog={() => setIsOpen(false)}
      />
    </div>
  );
};

export default NewsCard;
