import React, { useState } from "react";
import { RiMenu2Line, RiCloseLine } from "@remixicon/react";

const Navbar = () => {

  const [menu, openmenu] = useState(false);
  const [showmenu, setshowmenu] = useState(true);

  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">

      <span className="text-xl font-bold tracking-wide hover:text-amber-500 transition-all duration-300">Portfolio</span>

    <ul className={`${menu ? "block" : "hidden"} mx-24 mt-4 font-semibold md:mt-5 bg-black py-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>

  <li className="hover:text-amber-500 transition-all duration-300"><a href="#About">About</a></li>
  <li className="hover:text-amber-500 transition-all duration-300"><a href="#Experience">Experience</a></li>
  <li className="hover:text-amber-500 transition-all duration-300"> <a href="#Projects">Projects</a></li>
  <li className="hover:text-amber-500 transition-all duration-300"><a href="#Contact">Contact</a></li>

</ul>

      {showmenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6"
          onClick={() => {
            openmenu(!menu);
            setshowmenu(!showmenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6"
          onClick={() => {
            openmenu(!menu);
            setshowmenu(!showmenu);
          }}
        />
      )}

    </nav>
  );
};

export default Navbar;