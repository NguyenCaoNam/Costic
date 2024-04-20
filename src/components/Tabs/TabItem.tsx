import React from 'react'

const TabItem = ({ children, className }: any) => {
  return (
    <div className={className}>
      {children?.map((item: any, index: any) => (
        <React.Fragment key={index}>
          {item}
        </React.Fragment>
      ))}
    </div>
  )
}

export default TabItem
