import React from 'react'

export default function Badges({ children }:any) {
  return (
    <div className="flex w-full overflow-x-auto gap-2 items-center my-2">
      {children}
    </div>
  )
}
