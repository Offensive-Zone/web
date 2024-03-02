import TypeFormEmbed from "./TypeFormEmbed";

import Expertise from "./Expertise";
import CyberThreats from "./CyberThreats";
import Section3 from "./whyChooseUs";
import Hero from "./hero";
import AboutUs from "./aboutus";
import Slider from "./slider";



const Home = () =>{
    return (
      <main>
        <Hero />
        <Expertise/>
        <CyberThreats/>
        {/* <Slider /> */}
        <AboutUs />
        <Section3/>
        <TypeFormEmbed/>
      </main>

    )
}

export default Home