import TypeFormEmbed from "./TypeFormEmbed";

import Expertise from "./expertise";
import CyberThreats from "./cyberThreats";
import WhyChooseUs from "./whyChooseUs";
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