const WaitingPeriods = (props) => {
  console.log("WaitingPeriods: props: ", props);
  return (
    <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
      {props.waitingPeriods.waiting_period_hours > 0 ? (
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>
                There's a {props.waitingPeriods.waiting_period_hours}-hour
                waiting period requirement in this state.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>There's no waiting period required. </p>
            </div>
          </div>
        </div>
      )}
      {props.waitingPeriods.counseling_visits &&
      props.waitingPeriods.counseling_visits === 1 ? (
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>Counseling is required by the state. </p>
            </div>
          </div>
        </div>
      ) : props.waitingPeriods.counseling_visits &&
        props.waitingPeriods.counseling_visits === 2 ? (
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>
                Abortion counseling or ultrasound must be obtained at the
                facility before the waiting period begins, requiring two trips
                to the clinic
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default WaitingPeriods;
