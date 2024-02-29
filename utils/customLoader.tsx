import { ImageLoaderProps } from 'next/image';

const customLoader = ({ src, width, quality }: ImageLoaderProps) => {
  // Modify this function to handle images from any domain
  return `${src}?w=${width}&q=${quality || 75}`;
};

export default customLoader;
