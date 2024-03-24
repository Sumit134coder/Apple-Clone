import AppleLogo from "../../public/assets/images/apple.svg";
import search from "../../public/assets/images/search.svg";
import bag from "../../public/assets/images/bag.svg";

const navLinks = ["Home", "About", "Shop", "Contact Us"];

const Navbar = () => {
  return (
    <header className="view-padding fixed w-full bg-black">
      <nav className="flex items-center justify-between py-6">
        <img src={AppleLogo} alt="logo" className="h-6" />
        <div className=" gap-6 items-center hidden md:flex">
          {navLinks.map((nav) => (
            <span to="#" className="navLink" key={nav}>{nav}</span>
          ))}
        </div>
        <div className="flex gap-6 items-center">
          <img src={search} alt="logo" className="h-6"/>
          <img src={bag} alt="logo" className="h-6"/>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
