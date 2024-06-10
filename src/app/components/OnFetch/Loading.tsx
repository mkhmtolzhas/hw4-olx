import React from 'react'

const Loading = () => {
  return (
    <div className="inset-0 flex items-center justify-center bg-white w-full h-screen">
        <div className="animate-spin rounded-full border-4 border-black border-t-transparent h-14 w-14" />
    </div>
  )
}

export default Loading