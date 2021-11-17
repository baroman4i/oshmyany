import React from 'react'

function ContentInput({themes, activeTheme, activePlace, activePlaceContent}) {
  const contentInput = React.useMemo(() => {
    if (themes[activeTheme].subtopics[activePlace].content[activePlaceContent].video) {
        return <iframe src={`${themes[activeTheme].subtopics[activePlace].content[activePlaceContent].video}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    }
    else if (themes[activeTheme].subtopics[activePlace].content[activePlaceContent].panorama) {
        return <iframe src={`https://www.google.com/maps/embed?pb=${themes[activeTheme].subtopics[activePlace].content[activePlaceContent].panorama}`} title="panorams" allowfullscreen="" loading="lazy"></iframe>
    }
    else {
        return <img src={themes[activeTheme].subtopics[activePlace].content[activePlaceContent].img} alt={themes[activeTheme].subtopics[activePlace].content[activePlaceContent].text}></img>
    }
  }, [activeTheme, activePlace, activePlaceContent])
  return (
    <div>
      {contentInput}
    </div>
  )
}

export default ContentInput
