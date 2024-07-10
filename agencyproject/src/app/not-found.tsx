import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>This Page is not existing. </p>
      <Link href="/">Return Home Page</Link>
    </div>
  )
}

export default NotFound
