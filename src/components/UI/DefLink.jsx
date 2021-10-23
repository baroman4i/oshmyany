import React from 'react'

function DefLink({children, href}) {
  return (
    <a href={href}>{children}</a>
  )
}

export default DefLink
