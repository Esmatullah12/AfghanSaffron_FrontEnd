import { useNavigate } from "react-router-dom";

const navItems = [
  { label: "PRODUCTS", to: "/#product-showcase" },
  { label: "ABOUT US", to: "/#about-us" },
  { label: "BLOG", to: "#" },
];

const NavLinks = () => {
  const navigate = useNavigate();

  const handleClick = (to: string) => {
    if (to.includes("#")) {
      const [path, hash] = to.split("#");
      navigate(path); // navigate to the base path first
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      navigate(to);
    }
  };

  return (
    <div className="hidden lg:flex flex-1 justify-center">
      <div className="flex items-center space-x-16">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => handleClick(item.to)}
            className="relative group font-bold text-[1.1rem] text-gray-800 tracking-widest transition-all duration-300 group-hover:text-primary"
          >
            {item.label}
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-500 group-hover:w-full" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavLinks;