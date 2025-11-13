import Navbar from "../common/Navbar";
import Footer from "../common/Footer";


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