import {
  castlePicture,
  kingdomPicture,
  moreVisitPicture,
} from '../images/imagesUrl';

import '../Style/home.css';

export default function Home() {
  return (
    <>
      <div className="homeCard">
        <div className="article">
          <h3>Welcome to the Kingdom of Colchis</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            tempora, deserunt repudiandae excepturi laudantium quod dolor
            facilis iusto unde corporis eveniet quis nesciunt, numquam
            perspiciatis assumenda ipsa praesentium, quam aliquam?Labore
            voluptas amet esse? Dolorum ipsum nobis tempora nihil. Quisquam
            autem fugit consectetur. Minus temporibus magnam asperiores, quas,
            nostrum reiciendis repellendus corrupti dolore ullam consequatur
            debitis maiores possimus? Recusandae, aperiam?
          </p>
          <button>see more</button>
        </div>
        <img
          className="cardPicture"
          src={kingdomPicture}
          alt="Kingdom landscape"
        />
      </div>
      <div className="homeCardReverse">
        <div className="article">
          <h3>Our King is please to welcome you</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            tempora, deserunt repudiandae excepturi laudantium quod dolor
            facilis iusto unde corporis eveniet quis nesciunt, numquam
            perspiciatis assumenda ipsa praesentium, quam aliquam?Labore
            voluptas amet esse? Dolorum ipsum nobis tempora nihil. Quisquam
            autem fugit consectetur. Minus temporibus magnam asperiores, quas,
            nostrum reiciendis repellendus corrupti dolore ullam consequatur
            debitis maiores possimus? Recusandae, aperiam?
          </p>
          <button>see more</button>
        </div>
        <img
          className="cardPicture"
          src={castlePicture}
          alt="Kingdom landscape"
        />
      </div>
      <div className="homeCard">
        <div className="article">
          <h3>More royal site visit suggestion</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            tempora, deserunt repudiandae excepturi laudantium quod dolor
            facilis iusto unde corporis eveniet quis nesciunt, numquam
            perspiciatis assumenda ipsa praesentium, quam aliquam?Labore
            voluptas amet esse? Dolorum ipsum nobis tempora nihil. Quisquam
            autem fugit consectetur. Minus temporibus magnam asperiores, quas,
            nostrum reiciendis repellendus corrupti dolore ullam consequatur
            debitis maiores possimus? Recusandae, aperiam?
          </p>
          <button>see more</button>
        </div>
        <img
          className="cardPicture"
          src={moreVisitPicture}
          alt="Kingdom landscape"
        />
      </div>
    </>
  );
}
