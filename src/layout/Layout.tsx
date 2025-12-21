import Footer from "../components/common/Footer";
import Navbar from "../components/common/navbar/Navbar";
import { useScrollToHash } from "../hooks/useScrollToHash";


type LayoutProps = {
  children: React.ReactNode;
};



const Layout = ({ children }: LayoutProps) => {
  useScrollToHash();
  
  return (
    <div>
      <Navbar />
        <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;