import React from 'react'

type TagProps = {
  content: string
}

const Tag = ({content}:TagProps) => {
  return (
    <div className='Tag'>{content}</div>
  )
}
export default Tag