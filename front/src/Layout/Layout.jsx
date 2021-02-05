import { Route, useLocation } from 'react-router-dom';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';
import Admin from '../Pages/Admin';

import { links } from '../Components/links';

import '../Style/layout.css';

export default function Layout() {
  const location = useLocation();

  return (
    <>
      <header className="header">
        <NavBar />
      </header>
      <main className="main">
        {links.map(({ path, Component }) => (
          <Route exact path={path} location={location}>
            <Component />
          </Route>
        ))}

        <Route exact path="/admin" component={Admin} />
        <Footer />
      </main>
    </>
  );
}
