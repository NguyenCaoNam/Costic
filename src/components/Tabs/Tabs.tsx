import React from 'react'

const Tabs = ({ children, className }: any) => {
  return (
    <div className={className} >
      {children.map((item: any, index: any) => (
        <div key={index} >
          {item}
        </div>
      ))}
    </div>
  )
}

export default Tabs
