import { useEffect, useState } from 'react';
import { getRoyalFamily, getRoyalMemberSocialLink } from '../api/api';
import RoyalMemberCard from '../Components/RoyalMemberCard';

export default function RoyalFamily() {
  const [royalFamily, setRoyalFamily] = useState([]);
  const [socials, setSocials] = useState([]);

  const royalFamilyPromise = (result) => {
    setRoyalFamily(result.data);
  };

  const socialsPromise = (result) => {
    setSocials(result.data);
  };

  const failPromise = () => {};

  useEffect(() => {
    const getDatas = async () => {
      const promiseRoyalFamily = getRoyalFamily();
      const promiseSocial = getRoyalMemberSocialLink();
      promiseRoyalFamily.then(royalFamilyPromise, failPromise);
    };
    getDatas();
  }, []);
  console.log(royalFamily);
  return (
    <article>
      <h2>The Royal Family</h2>
      {royalFamily.map((member) => (
        <RoyalMemberCard member={member} />
      ))}
    </article>
  );
}
