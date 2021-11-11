import React from 'react'

function Slider({array, activeEl, setActiveEl, setActivePlace}) {
  return (
    <div className="slider">
        <div className="slider-cards" style={{left:`calc(-100% / 3 * ${activeEl -1})`}}>
          {array.map((place, i) => 
          <div onClick={
            () => {
              if (typeof(setActivePlace) === "function") setActivePlace(() => 1)
              setActiveEl(() => i)
            }} 
            key={i} 
            className={i === activeEl ? 'slide-card active' : 'slide-card'
            }>
          {place.img ? <img src={place.img} alt={place.name || 'alt'}/> : null}
          <h3>{place.name || null}</h3>
          <h4>{place.text !== undefined ? place.text.substr(0, (place.text.indexOf('.')))+"..." : null}</h4>
        </div>)}
        </div>
      </div>
  )
}

export default Slider