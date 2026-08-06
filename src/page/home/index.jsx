import { useEffect } from "react";
import Hero from "./hero";
import TrustStrip from "./trustStrip";
import AboutUs from "./aboutus";
import Expertise from "./expertise";
import Methodology from "./methodology";
import WhyChooseUs from "./whyChooseUs";
import Testimonial from "./testimonial";
import ContactForm from "./ContactForm";

const Home = () => {
  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main>
      <Hero />
      <TrustStrip />
      <AboutUs />
      <Expertise />
      <Methodology />
      <WhyChooseUs />
      <Testimonial />
      <ContactForm />
    </main>
  );
};

export default Home;
