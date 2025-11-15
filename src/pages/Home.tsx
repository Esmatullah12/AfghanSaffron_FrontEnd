import Hero from "../components/Home/Hero"
import BenefitsSection from "../components/Home/BenefitsSection"
import PRoductShowCase from "../components/Home/ProductShowCase"
import Testimonial from "../components/Home/Testimonial"
import AboutUs from "../components/Home/AboutUs"
import Layout from "../components/layout/Layout"

const Home = () => {
    return (
        <div>
            <Layout>
                <Hero />
                <PRoductShowCase />
                <Testimonial />
                <BenefitsSection />
                <AboutUs />
            </Layout>
        </div>
    )
}

export default Home
   