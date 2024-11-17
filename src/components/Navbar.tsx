import React, { useState } from 'react';
import { Menu, X, Music4 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'Music', href: '#releases' },
    { name: 'Merch', href: '#merch' },
    { name: 'Shows', href: '#shows' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/40 backdrop-blur-lg border-b border-yellow-500/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Music4 className="text-yellow-400" />
            <span className="text-yellow-400 font-bold text-xl">DJ KVI</span>
          </div>

          <div className="hidden md:block">
            <ul className="flex items-center gap-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white hover:text-yellow-400 transition font-medium"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <button
            className="md:hidden text-yellow-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg border-b border-yellow-500/10">
          <ul className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block px-3 py-2 text-white hover:text-yellow-400 transition font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;