'use client';
import { CustomButtonProps } from '@/types';
// import React from 'react';
import Image from 'next/image';

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
}: CustomButtonProps) => {
  return (
    <button
      type={btnType || 'button'}
      onClick={handleClick}
      disabled={false}
      className={`custom-btn  hover:bg-white hover:${containerStyles}`}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className={`relative w-6 h-6 `}>
          <Image src={rightIcon} alt="icon" fill className="object-contain" />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
