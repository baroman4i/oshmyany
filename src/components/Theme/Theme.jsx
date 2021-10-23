import React from 'react'

function Theme({themes, activeTheme, setActiveTheme, setActivePlace}) {
  console.log(themes);
  return (
    <>
      {themes.map((reg, i) => 
      <div onClick={() => {
        setActiveTheme(i)
        setActivePlace(Math.floor(themes[i].subtopics.length/2))
      }} key={i} className={i === activeTheme ? 'theme active' : 'theme'}><h2>{reg.theme}</h2></div>)}
    </>
  )
}

export default Theme
