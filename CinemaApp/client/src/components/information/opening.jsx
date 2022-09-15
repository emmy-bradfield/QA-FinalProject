const Opening = () => {
  return (
    <div className="light-text">
      <h1 className="center opening-title">Opening times</h1>
      <hr className="hr3" />
      <p className="opening-text">
        Opening times may vary during holiday periods.
      </p>

      <div className="times times-card card-inner-text wide-div">
        <div>
          <ul className="no-bullet">
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
