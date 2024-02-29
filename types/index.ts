import { MouseEventHandler } from 'react';

export interface QueryProps {
  country?: string;
  category?: string;
  limit?: number;
  sources?: number;
  q?: string;
}

export interface HomeProps {
  searchParams: QueryProps;
}
export interface sourceProps {
  id: string | null;
  name: string;
}

export interface ArticleProps {
  source?: sourceProps;
  author?: string | null;
  title?: string;
  description?: string;
  url?: string;
  urlToImage?: string;
  publishedAt?: string;
  content?: string;
}

export interface NewsCardProps {
  article: any;
}

export interface NewsCompProps {
  // articles?: ArticleProps;
  articles?: any;
  totalResults?: number;
  status?: string;
  topic?: string;
}

export interface NewsArticle {
  isOpen: boolean;
  closeDialog: () => void;
  article: ArticleProps;
}

export interface optionProps {
  title: string;
  value: string;
}

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: 'button' | 'submit';
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}
