import { Route, useLocation } from 'react-router-dom';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';
import Home from '../Pages/Home';

import '../Style/layout.css';

const routes = [{ path: '/', Component: Home }];

export default function Layout() {
  const location = useLocation();

  return (
    <>
      <header className="header">
        <NavBar />
      </header>
      <main className="main">
        {routes.map(({ path, Component }) => (
          <Route exact path={path} location={location}>
            <Component />
          </Route>
        ))}
        <Footer />
      </main>
    </>
  );
}
