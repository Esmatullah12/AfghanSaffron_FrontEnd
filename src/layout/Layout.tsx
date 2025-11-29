import Footer from "../components/common/Footer";
import Navbar from "../components/common/navbar/Navbar";


type LayoutProps = {
  children: React.ReactNode;
};



const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
        <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;