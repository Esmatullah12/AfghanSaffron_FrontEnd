import Navbar from "../components/common/Navbar"
import Hero from "../components/home/Hero"
import BenefitsSection from "../components/home/BenefitsSection"
import PRoductShowCase from "../components/home/ProductShowCase"
const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero />
            <PRoductShowCase />
            <BenefitsSection />
        </div>
    )
}

export default Home
   