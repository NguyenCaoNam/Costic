import React from 'react'
import IconRatingActive from '../../utils/icon/Rating/iconRatingActive'
import IconRatingDefault from '../../utils/icon/Rating/iconRatingDefault';

const Rating = ({ rating }: any) => {
  const goldStars = Array.from({ length: rating }, (_, index) => (
    <IconRatingActive key={index} />
  ));

  const greyStars = Array.from({ length: 5 - Number(rating) }, (_, index) => (
    <IconRatingDefault key={index} />
  ));
  return (
    <div className='flex flex-row gap-1'>
      {goldStars}
      {greyStars}
    </div>
  )
}

export default Rating
