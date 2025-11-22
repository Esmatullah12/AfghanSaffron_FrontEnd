import Hero from "../components/home/Hero"
import BenefitsSection from "../components/home/BenefitsSection"
import ProductShowCase from "../components/home/ProductShowCase"
import Testimonial from "../components/home/Testimonial"
import AboutUs from "../components/home/AboutUs"
import Layout from "../components/layout/Layout"

const Home = () => {
    return (
        <div>
            <Layout>
                <Hero />
                <ProductShowCase />
                <Testimonial />
                <BenefitsSection />
                <AboutUs />
            </Layout>
        </div>
    )
}

export default Home
   