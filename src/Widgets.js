import React from 'react'
import './Widgets.css'
function Widgets() {
  // Iframe ka code aapko meta.developers.com pe login karna hoga
  // aur apka facebook page url ko meta.developers.com ke page plugins page pe jaakar paste 
  // karna hoga tab iframe ka code aapko milega
  return (
    <div className='widgets'>
      <iframe title='This is the dummy webpage' src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FYamanghildiyal&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
      width="340" height="100%" 
      style= {{border:'none', overflow:'hidden'}} 
      scrolling="no" 
      frameborder="0" 
      allowfullscreen="true" 
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
      </iframe>
    </div>
  )
}

export default Widgets;
