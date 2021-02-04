import { Link } from 'react-router-dom';

import { links } from './links';
import { headerLogo } from '../images/imagesUrl';

import '../Style/navbar.css';

export default function NavBar() {
  return (
    <div className="headerNav">
      <h1 className="headerTitle">Royal Kingdom of Colchis</h1>
      <img className="logo" src={headerLogo} alt="crown logo" />
      <nav className="navbar">
        {links.map((link) => (
          <Link key={link.path} to={link.path}>
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
