import { useState } from 'react';
import { postRoyalAsset } from '../api/api';

export default function RoyalAssetForm() {
  const [asset, setAsset] = useState({
    label: '',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad cumque maxime magni eum veritatis consectetur corrupti hic nulla qui, repellendus commodi quia repudiandae officia illo nemo?',
    imageUrl: '',
  });
  const [update, setUpdate] = useState(true);
  const message = 'Thank you! A new Royal asset has been registered!';

  const handleChange = (e) => {
    setAsset((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(asset);

  const postSuccess = () => {
    setUpdate(!update);
    setAsset({
      label: '',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad cumque maxime magni eum veritatis consectetur corrupti hic nulla qui, repellendus commodi quia repudiandae officia illo nemo?',
      imageUrl: '',
    });
    alert(message);
  };

  const fail = () => {};

  const handleCreate = (e) => {
    e.preventDefault();
    const postRoyalAssetPromise = postRoyalAsset(asset);
    postRoyalAssetPromise.then(postSuccess, fail);
  };

  return (
    <div className="form">
      <h2>Add a Royal Family asset:</h2>
      <form onSubmit={handleCreate}>
        <label className="label" for="label">
          Label*
          <input
            type="text"
            id="label"
            name="label"
            placeholder="Label"
            value={asset.label}
            onChange={handleChange}
            required
          />
        </label>
        <label className="label" for="description">
          Description
          <textarea
            name="decription"
            id="description"
            placeholder="Write a description"
            value={asset.description}
            onChange={handleChange}
            cols="50"
            rows="5"
          ></textarea>
        </label>
        <label className="label" for="imageUrl">
          imageUrl*
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="image URL"
            value={asset.imageUrl}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <br />
        <button type="submit" onClick={handleCreate}>
          Register a Royal Asset
        </button>
      </form>
    </div>
  );
}
