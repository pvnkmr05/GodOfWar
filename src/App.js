import React from 'react'
import { Routes,Route } from 'react-router-dom';
// import DiscoverGodOfWar from './routes/DiscoverGodOfWar';
import Home from "./routes/Home"

;
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element= {<Home />}></Route>
      {/* <Route path='/Discover God Of War' element={<DiscoverGodOfWar/>}></Route> */}
    </Routes>
    </>
  )
}

export default App