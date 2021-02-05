import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function GenericCard(datas) {
  const [currentDatas, setCurrentDatas] = useState({});
  const history = useHistory();

  useEffect(() => {
    setCurrentDatas(datas.datas);
  }, [datas.datas]);

  return (
    <div className="homeCard">
      <div className="article">
        <h3>{currentDatas.label}</h3>
        <p>{currentDatas.description}</p>
        <button
          className={!currentDatas.alt ? 'notDisplay' : 'displayed'}
          onClick={() => {
            history.push(`${currentDatas.path}`);
          }}
        >
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
