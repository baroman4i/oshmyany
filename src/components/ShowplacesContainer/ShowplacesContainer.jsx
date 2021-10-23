import React from 'react'
import Slider from '../Slider/Slider'
// import styles from './Showplaces.module.css';
function Showplaces({themes, activeTheme, activePlace, setActivePlace, setActivePlaceContent}) {
  return (
    <div className="showplaces-container">
      <button onClick={() => {
        if (activePlace > 0) {setActivePlace(activePlace-1)}}}> 	
        &#8249;
      </button>
      <Slider activeEl={activePlace} setActiveEl={setActivePlace} array={themes[activeTheme].subtopics}/>
      <button onClick={() => {
        if (themes[activeTheme].subtopics.length-1 > activePlace) {setActivePlace(activePlace+1)}}}> 	
        &#8250;
      </button>
    </div>
  )
}

export default Showplaces
