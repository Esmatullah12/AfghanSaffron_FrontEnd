const navItems = [
  { label: "Products", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Blog", href: "#" },
];

const NavLinks = () => (
  <div className="hidden lg:flex flex-1 justify-center">
    <div className="flex items-center space-x-16">
      {navItems.map((item) => (
        <a key={item.label} href={item.href} className="relative group">
          <span className="font-normal text-xl text-gray-800 tracking-wide transition-all duration-300 group-hover:text-[#44155B] group-hover:font-medium">
            {item.label}
          </span>
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E42F1C] transition-all duration-500 group-hover:w-full" />
        </a>
      ))}
    </div>
  </div>
);

export default NavLinks;