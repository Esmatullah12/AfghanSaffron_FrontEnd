import { Footer, Navbar } from "./components";
import { useScrollToHash } from "../hooks/useScrollToHash";


type LayoutProps = {
  children: React.ReactNode;
};



const Layout = ({ children }: LayoutProps) => {
  useScrollToHash();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
        <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;