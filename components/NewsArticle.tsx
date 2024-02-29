import React from 'react';
import Image from 'next/image';
import { Fragment } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import { NewsArticle } from '@/types';

const NewsArticle = ({ isOpen, closeDialog, article }: NewsArticle) => {
  const date = article.publishedAt;
  //   console.log(date);
  // const pbdate = new Date(date);
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeDialog}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25"></div>
          </Transition.Child>
          <div className="fixed  inset-0  overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-10 pb-0 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-in duration-300"
                enterFrom="opacity-100 -translate-y-full"
                enterTo="opacity-100 translate-y-0"
                leave="ease-in duration-500"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-full"
              >
                <Dialog.Panel
                  className="relative w-full  min-w-full p-5 min-h-[100vh] overflow-y-auto transform
                rounded-2xl bg-blue-50 text-left shadow-xl transition-all flex flex-col gap-5"
                >
                  <button
                    type="button"
                    onClick={closeDialog}
                    className="absolute text-black right-5 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                  >
                    <Image
                      src="/close.png"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>
                  <div className="mt-10 p-10 flex flex-col items-center gap-10">
                    <div className="font-bold text-4xl hero_txt">
                      {article.title}
                    </div>
                    <div className="self-start flex flex-col gap-4">
                      <div className=" items-center pr-10">
                        {article.author ? `Author: ${article?.author}` : ''}
                      </div>
                      <div className="pr-10">
                        Published: {article.publishedAt?.split('T')[0]}
                      </div>
                    </div>
                    <div className="flex justify-center sm:w-fit w-full rounded-lg">
                      <Image
                        src={
                          article.urlToImage
                            ? `${article.urlToImage}`
                            : 'https://imgs.search.brave.com/QrJh_YZxTIO9ecx-kfTfI3TmtTw6Utu4jdEtXvCCv20/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdC5k/ZXBvc2l0cGhvdG9z/LmNvbS8xMDA2ODk5/LzM3NzYvaS80NTAv/ZGVwb3NpdHBob3Rv/c18zNzc2NTMzOS1z/dG9jay1waG90by1u/ZXdzLmpwZw'
                        }
                        alt="pic"
                        width={650}
                        height={650}
                        className="rounded-lg "
                      />
                    </div>
                    <div className="font-semibold text-gray-500 text-center">
                      {article.description}
                    </div>
                    <div className="text-center">
                      {article.content?.split('[')[0]}
                    </div>
                    <div className="font-semibold self-start">
                      Source Link:
                      <span className="underline ml-2">
                        <a href={article.url}>Redirect</a>
                      </span>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default NewsArticle;
