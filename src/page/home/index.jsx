import TypeFormEmbed from "./TypeFormEmbed";

import Expertise from "./Expertise";
import CyberThreats from "./CyberThreats";
import WhyChooseUs from "./WhyChooseUs";
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
        <WhyChooseUs/>
        <TypeFormEmbed/>
      </main>

    )
}

export default Home