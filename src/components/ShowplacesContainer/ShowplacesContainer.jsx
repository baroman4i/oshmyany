import React from 'react'
import Slider from '../Slider/Slider'
function Showplaces({themes, activeTheme, activePlace, setActivePlace}) {
  return (
    <div className="showplaces-container">
      <button 
        className="slide-btn" 
        onClick={() => {
        if (activePlace > 0) setActivePlace(() => activePlace-1)}}
      > 	
        &#8249;
      </button>
      <Slider 
        activeEl={activePlace} 
        setActiveEl={setActivePlace} 
        array={themes[activeTheme].subtopics}
      />
      <button 
        className="slide-btn" 
        onClick={() => {
        if (themes[activeTheme].subtopics.length-1 > activePlace) 
        setActivePlace(() => activePlace+1)}}
      > 	
        &#8250;
      </button>
    </div>
  )
}

export default Showplaces
