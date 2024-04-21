import React from 'react'

const TabItem = ({ children, className }: any) => {
  let childrens: any[] = []
  if (!Array.isArray(children)) {
    childrens.push(children)
  } else {
    childrens = children
  }
  return (
    <div className={className}>
      {childrens?.map((item: any, index: any) => (
        <React.Fragment key={index}>
          {item}
        </React.Fragment>
      ))}
    </div>
  )
}

export default TabItem
