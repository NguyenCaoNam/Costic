/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import IconHeart from '../../utils/icon/iconHeart';

const LikeHandle = () => {
  const [isLike, setIsLike] = React.useState(false);
  const handleLike = () => {
    setIsLike(!isLike);
  };
  if (isLike) {
    return(
      <button onClick={handleLike} className='h-[40px] w-[40px] flex flex-col items-center justify-center rounded-full border-solid border-[#6E706E] border-[1px] bg-black'>
        <IconHeart height={18} width={19.62} color='#FFFFFF'/>
      </button>
    );
  } 
  return (
    <button onClick={handleLike} className='h-[40px] w-[40px] flex flex-col items-center justify-center rounded-full border-solid border-[#6E706E] border-[1px] bg-white'>
        <IconHeart height={18} width={19.62} color='#000000'/>
      </button>
  )
}

export default LikeHandle