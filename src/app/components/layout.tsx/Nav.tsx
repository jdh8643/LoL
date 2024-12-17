import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="flex-1">
      <ul className="flex justify-end gap-8">
        <li>
          <Link 
            href="/champions" 
            className="text-gray-200 hover:text-white text-lg font-medium relative group"
          >
            챔피온
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          </Link>
        </li>
        <li>
          <Link 
            href="/items" 
            className="text-gray-200 hover:text-white text-lg font-medium relative group"
          >
            아이템
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          </Link>
        </li>
        <li>
          <Link 
            href="/rotation" 
            className="text-gray-200 hover:text-white text-lg font-medium relative group"
          >
            로테이션
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
