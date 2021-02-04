import { useEffect, useState } from 'react';

export default function GenericCard(datas) {
  const [currentDatas, setCurrentDatas] = useState({});

  useEffect(() => {
    setCurrentDatas(datas.datas);
  }, [datas.datas]);
  console.log(currentDatas);
  return (
    <div className="homeCard">
      <div className="article">
        <h3>{currentDatas.label}</h3>
        <p>{currentDatas.description}</p>
        <button className={!currentDatas.alt ? 'notDisplay' : 'displayed'}>
          see more
        </button>
      </div>
      <img
        className="cardPicture"
        src={currentDatas.imageUrl}
        alt={`Drawing of ${currentDatas.label}`}
      />
    </div>
  );
}
