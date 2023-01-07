import React from "react";
// import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Video from "../components/Video";
import DiscoverGodOfWar from "./DiscoverGodOfWar";
import Games from "./Games";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Video />
      <DiscoverGodOfWar />
      <Games />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
