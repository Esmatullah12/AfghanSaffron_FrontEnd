import logo from "../../../assets/Logo.png";

const Logo = () => (
  <a href="/" className="flex items-center space-x-3 group">
    <img src={logo} alt="Afghan Saffron Logo" className="w-12 h-auto object-contain" />
    <span className="text-sm font-display md:text-2xl tracking-wider font-bold text-primary">
      Afghan Saffron
    </span>
  </a>
);

export default Logo;