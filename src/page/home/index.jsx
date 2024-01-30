import TypeFormEmbed from "./TypeFormEmbed";

import Section1 from "./expertise";
import Section2 from "./cyberThreats";
import Section3 from "./whyChooseUs";
import Hero from "./hero";
import AboutUs from "./aboutus";
import Slider from "./slider";



const Home = () =>{
    return (
      <main>
        <Hero />
        <Section1/>
        <Section2/>
        <Slider />
        <AboutUs />
        <Section3/>
        <TypeFormEmbed/>
      </main>

    )
}

export default Home