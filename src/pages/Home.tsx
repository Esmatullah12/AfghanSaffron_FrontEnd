import AboutUs from "../components/Home/AboutUs"
import BenefitsSection from "../components/Home/BenefitsSection"
import ContactUs from "../components/Home/ContactUs"
import Hero from "../components/Home/Hero"
import ProductShowCase from "../components/Home/ProductShowCase"
import Testimonial from "../components/Home/Testimonial"
import Layout from "../layout/Layout"


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
   