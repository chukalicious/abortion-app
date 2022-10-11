import Age from "./Age";

const AgeContainer = (props) => {
  console.log(props);

  return <Age minorsData={props.minorsData} />;
};

export default AgeContainer;
