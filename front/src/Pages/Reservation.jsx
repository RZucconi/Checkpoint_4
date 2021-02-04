import '../Style/reservation.css';

export default function Reservation() {
  return (
    <>
      <h2>Reservation</h2>
      <div className="form">
        <div>Fill in the form below to contact the Royal Kingdom :</div>
        <form id="contactForm" action="#">
          <label for="email">Your email* :</label>
          <input
            type="email"
            id="email"
            name="user_email"
            value="test@gmail.com"
            placeholder="your_adress@email.com"
            required
          />
          <br />
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
          </div>
          <br />
          <button type="submit">Send your message</button>
        </form>
      </div>
    </>
  );
}
