import GenericCard from '../Components/GenericCard';
import { homeDatas } from '../data/datas';

import '../Style/home.css';

export default function Home() {
  return (
    <>
      {homeDatas.map((homeData) => (
        <GenericCard datas={homeData} />
      ))}
    </>
  );
}
