import Home from '../Pages/Home';
import RoyalFamily from '../Pages/RoyalFamily';
import RoyalAssets from '../Pages/RoyalAssets';
import Reservation from '../Pages/Reservation';

export const links = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/royal-family', name: 'The Royal Family', Component: RoyalFamily },
  { path: '/royal-assets', name: 'Royal Assets', Component: RoyalAssets },
  { path: '/reservation', name: 'Reservation', Component: Reservation },
];

export const socialsLinks = [
  { path: 'https://www.facebook.com/georgiaandtravel/' },
  { path: 'https://twitter.com/georgia' },
  { path: 'https://www.instagram.com/georgiatravel' },
  { path: 'https://www.pinterest.fr/traveltogeorgia/' },
];
