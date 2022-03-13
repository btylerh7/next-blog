import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

function Header() {
  const [showHeader, setShowHeader] = useState(false);
  return (
    <header className='header-wrapper'>
      <div className="header">
      <div>
        <Link href="/">
          <h2 style={{margin: "0",lineHeight: "1"}} className="w-48 object-contain cursor-pointer">Tyler Baker</h2>
        </Link>
      </div>
      <div className="hidden md:inline-flex items-center space-x-10">
        <Link href="/about">
          <h3 className="navlink cursor-pointer">About</h3>
        </Link>
        <Link href="/contact">
        <h3 className=" navlink cursor-pointer">Contact</h3>
        </Link>
        <Link href="/">
          <h3 className="navlink btn">Blog</h3>
        </Link>
      </div>
      <div onClick={() => {setShowHeader(showHeader === true ? false : true)}} className="md:hidden">
        <h2>{<FaBars />}</h2>
      </div>
      </div>
      {showHeader === true && (
        <div className="flex flex-col text-2xl justify-center items-center font-semibold">
          <Link href="/about">
            <h3 className="cursor-pointer">About</h3>
          </Link>
          <Link href="/contact">
            <h3 className="cursor-pointer">Contact</h3>
          </Link>
          <Link href="/">
            <h3 className="cursor-pointer">Blog</h3>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
