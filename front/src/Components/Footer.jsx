import { Link } from 'react-router-dom';
import {
  facebookIcon,
  instagramIcon,
  pinterestIcon,
  twitterIcon,
} from '../images/imagesUrl';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import { socialsLinks } from './links';

import '../Style/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="map">
        <h4>Location :</h4>
        <MapContainer
          className="map"
          center={[41.71667, 44.83333]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[41.71667, 44.83333]}>
            <Popup>Royal Palace Location</Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="socialNetwork">
        <h4>Follow us :</h4>
        <a href={socialsLinks[0].path} target="_blank" rel="noreferrer">
          <img className="socialsIcon" src={facebookIcon} alt="facebook icon" />
        </a>

        <a href={socialsLinks[1].path} target="_blank" rel="noreferrer">
          <img className="socialsIcon" src={twitterIcon} alt="twitter icon" />
        </a>

        <a href={socialsLinks[2].path} target="_blank" rel="noreferrer">
          <img
            className="socialsIcon"
            src={instagramIcon}
            alt="instagram icon"
          />
        </a>

        <a href={socialsLinks[3].path} target="_blank" rel="noreferrer">
          <img
            className="socialsIcon"
            src={pinterestIcon}
            alt="pinterest icon"
          />
        </a>
      </div>
      <div className="admin">
        <h4>Admin:</h4>
        <Link to="/admin">Admin</Link>
      </div>
    </footer>
  );
}
