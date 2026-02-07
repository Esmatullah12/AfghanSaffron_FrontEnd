import { Footer, Navbar } from "./components";
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