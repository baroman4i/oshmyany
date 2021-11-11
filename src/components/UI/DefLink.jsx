import React from 'react'

function DefLink({children, href, target}) {
  return (
    <a href={href} target={target}>{children}</a>
  )
}

export default DefLink
