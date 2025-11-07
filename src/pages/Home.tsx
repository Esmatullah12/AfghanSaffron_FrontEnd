import Navbar from "../components/common/Navbar"
import Hero from "../components/home/Hero"
import BenefitsSection from "../components/home/BenefitsSection"
import PRoductShowCase from "../components/home/ProductShowCase"
import Testimonial from "../components/home/Testimonial"
const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero />
            <PRoductShowCase />
            <BenefitsSection />
            <Testimonial />
        </div>
    )
}

export default Home
   