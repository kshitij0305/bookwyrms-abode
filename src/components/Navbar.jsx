import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-30 
                      bg-[#0b0c12]/70 backdrop-blur-md
                      border-b border-yellow-300/10
                      shadow-[0_0_25px_rgba(242,217,138,0.15)]">

        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Logo" 
              className="w-12 h-12 drop-shadow-[0_0_10px_rgba(242,217,138,0.4)]"
            />
            <h1 className="text-xl text-[#f2d98a] font-bold tracking-wider">
              The Bookwyrm's Abode
            </h1>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:block w-64">
            <input
              type="text"
              placeholder="Search books..."
              className="w-full px-4 py-2 rounded-lg text-[#0d0e14]
                         bg-[#e8d9a1]/90 border border-yellow-300/20
                         shadow-[0_0_10px_rgba(242,217,138,0.25)]
                         focus:border-yellow-300/40 focus:shadow-[0_0_15px_rgba(242,217,138,0.4)]
                         outline-none transition-all"
            />
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-8 text-[#e8d9a1] font-semibold">
            <Link to="hero" smooth duration={600} className="cursor-pointer hover:text-yellow-300">Home</Link>
            <Link to="featured" smooth duration={600} className="cursor-pointer hover:text-yellow-300">Featured</Link>
            <Link to="categories" smooth duration={600} className="cursor-pointer hover:text-yellow-300">Categories</Link>
            <Link to="contact" smooth duration={600} className="cursor-pointer hover:text-yellow-300">Contact</Link>
          </div>

          {/* Mobile hamburger */}
          <button 
            className="text-3xl text-yellow-300 md:hidden"
            onClick={() => setOpen(true)}
          >
            <IoMenu />
          </button>
        </div>
      </nav>

      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
}
