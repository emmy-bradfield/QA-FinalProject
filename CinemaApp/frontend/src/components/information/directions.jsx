import CinemaShot from "../../assets/cinema-external.jpg";

const Directions = () => {
  return (
    <main>
      <h1> How to find us </h1>
      {/* directions - bus/train route
      parking */}
      <div className="directions-container">
        <div className="location">
          <img
            src={CinemaShot}
            className="location-img"
            alt="external photograph of the cinema"
          />
          <div className="address">
            <h4>Venue Address:</h4>
            International House <br />
            1 St. Katharine's Way <br />
            London <br />
            E1W 1UN
          </div>
        </div>

        <section className="directions">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2483.239757464081!2d-0.07738718389221012!3d51.50881722963545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x4876034c01181b61%3A0xe9a9202d18723f58!2sTower%20Hill%2C%20London!3m2!1d51.510117799999996!2d-0.07666089999999999!4m5!1s0x4876034906fbee13%3A0x435ec39115848f36!2sInternational%20House%2C%201%20St%20Katharine&#39;s%20Way%2C%20London%20E1W%201YL!3m2!1d51.5075167!2d-0.0738037!5e0!3m2!1sen!2suk!4v1663016506067!5m2!1sen!2suk"
            className="map"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="getting-here">
            <h2>Getting Here</h2>
            <p>
              The venue can be easily accessed via car or public transport.
              Directions can be found using the map.
            </p>
            <h4>Public transport:</h4>
            <p>
              The nearest train stations are Tower Hill (6 minute walk),
              Fenchurch Street (8 minute walk), London Bridge (15 minute walk).
              <br />
              The nearest bus stop is The Tower Of London (Stop TA) (7 minute
              walk).
            </p>
            <h4>Parking:</h4>
            <p>
              Parking is available at the Minories Car Park. There is no onsite
              parking.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Directions;
