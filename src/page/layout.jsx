import Home from "./home";
import NavBar from "../components/layout/navBar";
import Footer from "../components/layout/footer";
import WhatsAppButton from "../components/layout/whatsAppButton";
import { Container } from "@mui/material";

const Layout = () => {
    return (
      <>
          <NavBar />
          <Home />
          <Footer/>
          <WhatsAppButton />
      </>

    )
}

export default Layout