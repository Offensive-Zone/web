import TypeFormEmbed from "./TypeFormEmbed";

import Expertise from "./expertise";
import Section2 from "./cyberThreats";
import Section3 from "./whyChooseUs";
import Hero from "./hero";
import AboutUs from "./aboutus";
import Slider from "./slider";



const Home = () =>{
    return (
      <main>
        <Hero />
        <Expertise/>
        <Section2/>
        {/* <Slider /> */}
        <AboutUs />
        <Section3/>
        <TypeFormEmbed/>
      </main>

    )
}

export default Home