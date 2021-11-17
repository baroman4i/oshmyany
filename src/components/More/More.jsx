import React from 'react'
import Slider from '../Slider/Slider'
import DefLink from '../UI/DefLink'
import ContentInput from '../ContentInput/ContentInput'
function More({themes, activeTheme, activePlace, activePlaceContent, setActivePlaceContent}) {
  return (
      <section className="more" id="more" style={{backgroundImage: `url(${themes[activeTheme].subtopics[activePlace].img})`}}>
        <div className="text-content">
              <h2>{themes[activeTheme].subtopics[activePlace].name}</h2>
              <p>{themes[activeTheme].subtopics[activePlace].text}</p>
              <div className="links">
                <DefLink 
                    href={`https://www.google.com/maps/search/${themes[activeTheme].subtopics[activePlace].name},+Ошямнский+район`.replace(/ /gi, '+')} 
                    target="_blank">
                    Просмотреть на карте
                </DefLink>
                <DefLink href="#main">Вернуться к темам</DefLink>
              </div>
              <div className="map">
                <iframe 
                    title="map" 
                    src={'https://www.google.com/maps/embed?pb='+themes[activeTheme].subtopics[activePlace].map} allowfullscreen="" 
                    loading="lazy">
                </iframe>
            </div>
        </div>
        <div className="media-content">
            <h3>Архивные материалы</h3>
            <div className="media-input">
                <ContentInput 
                    themes={themes} 
                    activeTheme={activeTheme} 
                    activePlace={activePlace} 
                    activePlaceContent={activePlaceContent}
                />
            </div>
            <span className="media-input-text">{themes[activeTheme].subtopics[activePlace].content[activePlaceContent].text}</span>
            <Slider 
                activeEl={activePlaceContent} 
                setActiveEl={setActivePlaceContent} 
                array={themes[activeTheme].subtopics[activePlace].content}
            />
        </div>
      </section>
  )
}

export default More