import Navbar from "../components/common/Navbar"
import Hero from "../components/home/Hero"
import BenefitsSection from "../components/home/BenefitsSection"
import PRoductShowCase from "../components/home/ProductShowCase"
import Testimonial from "../components/home/Testimonial"
import AboutUs from "../components/home/AboutUs"
import Footer from "../components/common/Footer"

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero />
            <PRoductShowCase />
            <Testimonial />
            <BenefitsSection />
            <AboutUs />
            <Footer />
        </div>
    )
}

export default Home
   