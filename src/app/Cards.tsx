import React from 'react'

export default function Cards({ children }:any) {
  return (
    <div className="w-full mx-auto lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {children}
    </div>
  )
}
