import { useEffect, useState } from 'react';
import { getRoyalAsset } from '../api/api';
import GenericCard from '../Components/GenericCard';

export default function RoyalAssets() {
  const [royalAssets, setRoyalAssets] = useState([]);

  const royalAssetsPromise = (result) => {
    setRoyalAssets(result.data);
  };

  const failPromise = () => {};

  useEffect(() => {
    const getDatas = async () => {
      const promiseRoyalAssets = getRoyalAsset();
      promiseRoyalAssets.then(royalAssetsPromise, failPromise);
    };
    getDatas();
  }, []);
  console.log(royalAssets);
  return (
    <>
      {royalAssets.length === 0 ? (
        <h2>Loading ...</h2>
      ) : (
        <>
          <h2>Royal Assets</h2>
          {royalAssets.map((asset) => (
            <GenericCard datas={asset} />
          ))}
        </>
      )}
    </>
  );
}
