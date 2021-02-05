import { useState } from 'react';
import { postRoyalMember } from '../api/api';

export default function RoyalFamilyForm() {
  const [member, setMember] = useState({
    firstName: '',
    lastName: '',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad cumque maxime magni eum veritatis consectetur corrupti hic nulla qui, repellendus commodi quia repudiandae officia illo nemo?',
    imageUrl: '',
  });
  const [update, setUpdate] = useState(true);
  const message = 'Thank you! A new Royal family member has been registered!';

  const handleChange = (e) => {
    setMember((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(member);

  const postSuccess = () => {
    setUpdate(!update);
    setMember({
      firstName: '',
      lastName: '',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad cumque maxime magni eum veritatis consectetur corrupti hic nulla qui, repellendus commodi quia repudiandae officia illo nemo?',
      imageUrl: '',
    });
    alert(message);
  };

  const fail = () => {};

  const handleCreate = (e) => {
    e.preventDefault();
    const postReservationPromise = postRoyalMember(member);
    postReservationPromise.then(postSuccess, fail);
  };

  return (
    <div className="form">
      <h2>Add a Royal Family member:</h2>
      <form onSubmit={handleCreate}>
        <label className="label" for="firstName">
          Firstname*
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="firstname"
            value={member.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <label className="label" for="lastName">
          Lastname*
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="lastname"
            value={member.lastName}
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
            value={member.description}
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
            value={member.imageUrl}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <br />
        <button type="submit" onClick={handleCreate}>
          Register a Royal member
        </button>
      </form>
    </div>
  );
}
