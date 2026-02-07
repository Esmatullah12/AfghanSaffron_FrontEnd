import { AboutUs, BenefitsSection, ContactUs, Hero, Testimonial } from "../features/home";
import ProductShowCase from "../features/products/components/ProductShowCase"
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
   