const WaitingPeriods = (props) => {
  console.log("WaitingPeriods: props: ", props);
  return (
    <div>
      {props.waitingPeriods.waiting_period_hours > 0 ? (
        <p>
          There's a {props.waitingPeriods.waiting_period_hours}-hour waiting
          period requirement in this state.
        </p>
      ) : (
        <p>There's no waiting period required. </p>
      )}
      {props.waitingPeriods.counseling_visits &&
      props.waitingPeriods.counseling_visits === 1 ? (
        <p>Counseling is required by the state. </p>
      ) : props.waitingPeriods.counseling_visits &&
        props.waitingPeriods.counseling_visits === 2 ? (
        <p>
          Abortion counseling or ultrasound must be obtained at the facility
          before the waiting period begins, requiring two trips to the clinic
        </p>
      ) : null}
    </div>
  );
};

export default WaitingPeriods;
