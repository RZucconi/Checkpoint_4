import { useState } from 'react';
import DatePicker from 'react-date-picker';
import { postReservation } from '../api/api';

import '../Style/reservation.css';

export default function Reservation() {
  // const [currentDate, setCurrentDate] = useState(new Date());
  const [reservation, setReservation] = useState({
    date: new Date(),
    firstName: '',
    lastName: '',
    email: '',
  });
  const [update, setUpdate] = useState(true);
  const message =
    'Thank you! Your reservation has been registered, see you soon!';

  const handleChange = (e) => {
    setReservation((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDateChange = (e) => {
    console.log(e);
    setReservation((state) => ({
      ...state,
      date: e,
    }));
  };
  console.log(reservation);

  const postSuccess = () => {
    setUpdate(!update);
    setReservation({
      date: new Date(),
      firstName: '',
      lastName: '',
      email: '',
    });
    alert(message);
  };

  const fail = () => {};

  const handleCreate = (e) => {
    e.preventDefault();
    const postReservationPromise = postReservation(reservation);
    postReservationPromise.then(postSuccess, fail);
  };

  return (
    <>
      <div className="form">
        <h2>
          Fill in the form below to register a visit of the Royal Palace :
        </h2>
        <form onSubmit={handleCreate}>
          <label className="label" for="firstName">
            Firstname*
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="your firstname"
              value={reservation.firstName}
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
              placeholder="your lastname"
              value={reservation.lastName}
              onChange={handleChange}
              required
            />
          </label>
          <label className="label" for="email">
            Your email*
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your email"
              value={reservation.email}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <br />
          <label className="label" for="datePicker">
            Please select a date*
            <DatePicker onChange={handleDateChange} value={reservation.date} />
          </label>
          <br />
          <br />
          <button type="submit" onClick={handleCreate}>
            Send your reservation
          </button>
        </form>
      </div>
    </>
  );
}
