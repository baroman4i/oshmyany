import React from 'react'
import Header from '../Header/Header';
import Themes from '../Themes/Themes';
// import Slider from '../Slider/Slider';
import Dots from '../Dots/Dots';
import ShowplacesContainer from '../ShowplacesContainer/ShowplacesContainer';
import DefLink from '../UI/DefLink';
function Main({themes, activeTheme, setActiveTheme, activePlace, setActivePlace, setActivePlaceContent}) {
  console.log(themes[activeTheme].subtopics[activePlace].name);
  return (
    <section className="main" id="main" style={{backgroundImage: `url(${themes[activeTheme].backgroundImage})`}}>
        <Header/>
        <Themes setActiveTheme={setActiveTheme} themes={themes} activeTheme={activeTheme} setActivePlace={setActivePlace} setActivePlaceContent={setActivePlaceContent}/>
        <Dots setActiveTheme={setActiveTheme} themes={themes} activeTheme={activeTheme} setActivePlace={setActivePlace}/>
        <ShowplacesContainer themes={themes} activeTheme={activeTheme} activePlace={activePlace} setActivePlace={setActivePlace} setActivePlaceContent={setActivePlaceContent}/>
        <DefLink href="#more">Подробнее </DefLink>
      </section>
  )
}

export default Main
