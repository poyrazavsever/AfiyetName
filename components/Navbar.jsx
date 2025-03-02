import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/Images/Logo.png" alt="Logo" className="w-24 h-auto" />
        </div>

        {/* Links */}
        <ul className="hidden lg:flex space-x-8 text-gray-700 text-lg font-medium">
          <li className="hover:text-orange-500 transition duration-300">
            <a href="/">Ana Sayfa</a>
          </li>
          <li className="hover:text-orange-500 transition duration-300">
            <a href="/tarifler">Tarifler</a>
          </li>
          <li className="hover:text-orange-500 transition duration-300">
            <a href="/hakkinda">Hakkında</a>
          </li>
          <li className="hover:text-orange-500 transition duration-300">
            <a href="/iletisim">İletişim</a>
          </li>
        </ul>

        {/* Giriş Yap Butonu */}
        <div className="hidden lg:flex items-center">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300 cursor-pointer">
            Giriş Yap
          </button>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="lg:hidden">
          <button className="text-gray-700 hover:text-orange-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
