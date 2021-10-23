import React from 'react'

function Slider({array, activeEl, setActiveEl}) {
  return (
    <div className="slider">
        <div className="slider-cards" style={{left:`calc(-100% / 3 * ${activeEl -1})`}}>
          {array.map((place, i) => 
          <div onClick={
            () => {
              setActiveEl(i)
            }} 
            key={i} 
            className={i === activeEl ? 'slide-card active' : 'slide-card'
            }>
          {place.img ? <img src={place.img} alt={place.name || 'alt'}/> : null}
          <h3>{place.name || null}</h3>
          <h4>{place.text || null}</h4>
        </div>)}
        </div>
      </div>
  )
}

export default Slider
