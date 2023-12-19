import About from "../../components/sections/about/about"
import Carousel from "../../components/sections/welcome/carousel"
import Header from "../../components/sections/navBar/navbar"
import Services from "../../components/sections/ourServices/services"
import Forms from "../../components/sections/contact/forms"
import Footer from "../../components/sections/footer/footer"
import IconWpp from "../../components/iconWpp/iconWpp"
import Features from "../../components/sections/features/features"


export default function Home() {

  return (
    <>
      <Header />
      <Carousel />
      <Services />
      <About />
      <Features />
      <Forms />
      <Footer />
      <IconWpp />
    </>
  )
}
