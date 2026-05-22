import Expertise from "./expertise";
import CyberThreats from "./cyberThreats";
import WhyChooseUs from "./whyChooseUs";
import Hero from "./hero";
import AboutUs from "./aboutus";
import ContactForm from "./ContactForm";

const Home = () =>{
    return (
      <main>
        <Hero />
        <Expertise />
        <CyberThreats />
        <AboutUs />
        <WhyChooseUs />
        <ContactForm />
      </main>
    )
}

export default Home
