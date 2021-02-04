import { useEffect, useState } from 'react';
import { getRoyalFamily } from '../api/api';
import RoyalMemberCard from '../Components/RoyalMemberCard';

export default function RoyalFamily() {
  const [royalFamily, setRoyalFamily] = useState([]);

  const royalFamilyPromise = (result) => {
    setRoyalFamily(result.data);
  };

  const failPromise = () => {};

  useEffect(() => {
    const getDatas = async () => {
      const promiseRoyalFamily = getRoyalFamily();
      promiseRoyalFamily.then(royalFamilyPromise, failPromise);
    };
    getDatas();
  }, []);

  return (
    <div className="container">
      <h2>The Royal Family</h2>
      {royalFamily.length === 0 ? (
        <h2>Loading ...</h2>
      ) : (
        <>
          {royalFamily.map((member) => (
            <RoyalMemberCard member={member} />
          ))}
        </>
      )}
    </div>
  );
}
