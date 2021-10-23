import React from 'react'

function Dots({themes, activeTheme, setActiveTheme, setActivePlace}) {
  return (
    <div className="dot-list">
      {themes.map((reg, i) => 
      <div onClick={() => {
        setActiveTheme(i)
        setActivePlace(Math.floor(themes[i].subtopics.length/2))
      }} key={i} className={i === activeTheme ? 'dot active' : 'dot'}></div>)}
    </div>
  )
}

export default Dots
