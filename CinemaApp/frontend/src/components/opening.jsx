const Opening = () => {
  return (
    <div className="light-text">
      <h1 className="center opening-title">Opening times</h1>

      <p className="opening-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iste
        nesciunt natus nam? Officiis odio aspernatur aliquid mollitia omnis
        sequi?
      </p>

      <div className="times">
        <div>
          <ul>
            <li>Monday</li>
            <li>Tuesday</li>
            <li>Wednesday</li>
            <li>Thursday</li>
            <li>Friday</li>
            <li>Saturday</li>
            <li>Sunday</li>
          </ul>
        </div>

        <div>
          <ul className="no-bullet">
            <li>11:00 - 01:00</li>
            <li>11:00 - 01:00</li>
            <li>11:00 - 01:00</li>
            <li>11:00 - 01:00</li>
            <li>11:00 - 03:00</li>
            <li>10:00 - 03:00</li>
            <li>10:00 - 01:00</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Opening;
