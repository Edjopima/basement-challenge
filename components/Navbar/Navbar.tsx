import React from "react";
import Image from "next/image";

import logo from "../../public/logo.svg";
import hd from "../../public/hd.svg";
import icon from "../../public/icon.svg";

interface NavbarProps {
  toggleShoppingCart: any;
  cartLenght: number;
}

const Navbar: React.FC<NavbarProps> = ({toggleShoppingCart, cartLenght}) => {
  return (
    <nav className="w-full flex justify-between items-center py-8 px-4 sm:py-12 sm:px-8">
      <div className="hidden xs:block">
        <Image alt="Basement" height={28} src={logo} width={192} />
      </div>
      <div className="xs:hidden">
        <Image alt="Basement" src={icon} />
      </div>
      <div className="hidden md:block">
        <Image alt="HD" height={24} src={hd} width={284} />
      </div>
      <div
        className="cursor-pointer hover:bg-white hover:text-black font-bold py-2 px-4 sm:py-3.5 sm:px-8 border-2 rounded-full border-white hover:border-transparent "
        onClick={toggleShoppingCart}
      >
        <span>CART ({cartLenght})</span>
      </div>
    </nav>
  );
};

export default Navbar;
