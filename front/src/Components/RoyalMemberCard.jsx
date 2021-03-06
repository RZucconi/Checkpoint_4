import { useEffect, useState } from 'react';
import { getRoyalMemberSocialLink } from '../api/api';
import '../Style/royalFamily.css';

export default function RoyalMemberCard(member) {
  const [currentData, setCurrentData] = useState({});
  const [socials, setSocials] = useState([]);

  const socialsPromise = (result) => {
    setSocials(result.data);
  };

  const failPromise = () => {};

  useEffect(() => {
    setCurrentData(member.member);
  }, [member.member]);

  useEffect(() => {
    const promiseSocials = getRoyalMemberSocialLink(currentData.id);
    promiseSocials.then(socialsPromise, failPromise);
  }, [currentData.id]);

  return (
    <div className="royalCard">
      <img
        className="royalPicture"
        src={currentData.imageUrl}
        alt={`portrait de ${currentData.lastName}`}
      />
      <div className="royalDescription">
        <h3>
          {currentData.firstName} {currentData.lastName}
        </h3>
        <p>{currentData.description}</p>
        <div className="membersSocials">
          <h4>Follow this member on :</h4>
          {socials.length === 0 ? (
            <p> Pas de réseau social enregistré</p>
          ) : (
            socials.map((social) => (
              <a
                className="socialLink"
                href={social.url}
                target="_blank"
                rel="noreferrer"
              >
                {social.label}
              </a>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
