import React from 'react'
// import Theme from '../Theme/Theme'
import Slider from '../Slider/Slider'
function Themes({setActiveTheme, themes, activeTheme, setActivePlace, setActivePlaceContent}) {
  return (
    // <div className="themes" style={{transform: `translate(calc(-33.33vw *${activeTheme-1}))`}}>
    //   <Theme themes={themes} activeTheme={activeTheme} setActiveTheme={setActiveTheme} setActivePlace={setActivePlace}/>
    // </div>
    <div className="themes">
      <Slider activeEl={activeTheme} setActiveEl={setActiveTheme} array={themes}
/>
    </div>
  )
}
export default Themes
