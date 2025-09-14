import React from 'react'

function Button({ className, value }) {
  return <button className={`p-2 bg-blue-500 ${className}`}>{value} </button>
}

export default Button