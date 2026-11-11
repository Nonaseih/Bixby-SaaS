import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = ['Product', 'Solutions', 'Pricing', 'Resources'];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar-container">
        <div className="navbar-row">
          <div className="navbar-primary">
            <a className="logo" href="#" onClick={closeMenu}>
              YourLogo
            </a>
            <div className="desktop-links">
              {links.map((link, index) => (
                <a
                  className={`nav-link${index === 0 ? ' active' : ''}`}
                  href="#"
                  key={link}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="desktop-actions">
            <a className="login-link" href="#">
              Login
            </a>
            <a className="signup-button" href="#">
              Sign up
            </a>
          </div>

          <button
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="menu-toggle"
            onClick={() => setIsOpen((open) => !open)}
            type="button"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu${isOpen ? ' is-open' : ''}`} id="mobile-menu">
        {links.map((link, index) => (
          <a
            aria-current={index === 0 ? 'page' : undefined}
            className={`mobile-nav-link${index === 0 ? ' active' : ''}`}
            href="#"
            key={link}
            onClick={closeMenu}
          >
            {link}
          </a>
        ))}
        <div className="mobile-actions">
          <a className="mobile-nav-link" href="#" onClick={closeMenu}>
            Login
          </a>
          <a className="signup-button" href="#" onClick={closeMenu}>
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
