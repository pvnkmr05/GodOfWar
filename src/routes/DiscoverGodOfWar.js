import React from 'react'
import "./Home.css"
import hero from "../assets/Atreus_God_of_War.jpg"

const DiscoverGodOfWar = () => {
  return (
    <div id='Discover'>
      <div className='container'>
        <img src ={hero} alt = "hero"/>
        <div>
      <h1>INTRODUCTION</h1>
      <p>God of War was first released in North America on March 22, 2005, 
        for the PlayStation 2.  After ten years in the service of the Olympian gods,
        Spartan soldier Kratos is tasked by Athena to find Pandora's box, 
        the key to defeating Ares, the God of War, who is running amok through Athens. 
        A series of flashbacks reveals that Kratos was once the servant of Ares, 
        who saved Kratos and his army from annihilation in battle, 
        but tricked him into killing his family, which forced his metamorphosis into the "Ghost of Sparta". 
        Kratos eventually finds Pandora's Box, and after finally killing Ares, 
        he ascends to Mount Olympus to become the new God of War.</p>
        </div>
        </div>
    </div>
  )
}

export default DiscoverGodOfWar