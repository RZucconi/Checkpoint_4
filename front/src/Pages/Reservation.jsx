import { useState } from 'react';
import DatePicker from 'react-date-picker';
import { postReservation } from '../api/api';

import '../Style/reservation.css';

export default function Reservation() {
  // const [currentDate, setCurrentDate] = useState(new Date());
  const [reservation, setReservation] = useState({
    date: new Date(),
  });
  const [update, setUpdate] = useState(true);

  const handleChange = (e) => {
    console.log(e);
    setReservation((state) => ({
      ...state,
      date: e,
    }));
  };
  console.log(reservation.date);

  const postSuccess = () => {
    setUpdate(!update);
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
          <label className="label" for="email">
            Your email*
            <input
              type="email"
              id="email"
              name="user_email"
              value="test@gmail.com"
              placeholder="your_adress@email.com"
              required
            />
          </label>
          <br />
          <br />
          <label className="label" for="datePicker">
            Please select a date*
            <DatePicker onChange={handleChange} value={reservation.date} />
          </label>
          <br />
          {/* 
          <br />
          <div className="checkbox">
            <input
              type="checkbox"
              name="agreement"
              id="condition_agreement"
              required
            />
            I accept that King Aetees' team will keep my contact details for all
            future correspondence.
          </div> */}
          <br />
          <button type="submit" onClick={handleCreate}>
            Send your reservation
          </button>
        </form>
      </div>
    </>
  );
}
