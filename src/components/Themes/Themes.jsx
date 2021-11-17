import React from 'react'
import Slider from '../Slider/Slider'
function Themes({setActiveTheme, themes, activeTheme, setActivePlace}) {
  return (
    <div className="themes">
      <Slider 
        activeEl={activeTheme} 
        setActiveEl={setActiveTheme} 
        array={themes}
        setActivePlace={setActivePlace}
      />
    </div>
  )
}
export default Themes
