import React from 'react'

const loading = () => {
  return (
    // <div className="animate-pulse text-gray-600 text-3xl">Loading...</div>
    <>
        <div className="flex space-x-2">
            Loading
  <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
  <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
  <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></span>
</div>
    </>
  )
}

export default loading