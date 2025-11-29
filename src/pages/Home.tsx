import Hero from "../components/home/Hero"
import BenefitsSection from "../components/home/BenefitsSection"
import ProductShowCase from "../components/home/ProductShowCase"
import Testimonial from "../components/home/Testimonial"
import AboutUs from "../components/home/AboutUs"
import Layout from "../layout/Layout"
import ContactUs from "../components/home/ContactUs"

const Home = () => {
    return (
        <div>
            <Layout>
                <Hero />
                <ProductShowCase />
                <Testimonial />
                <BenefitsSection />
                <AboutUs />
                <ContactUs />
            </Layout>
        </div>
    )
}

export default Home
   