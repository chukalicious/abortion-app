import Age from "./Age";

const AgeContainer = (props) => {
  console.log("AgeContainer.js: props: ", props);

  return <Age minorsData={props.minorsData} getAge={props.getUserAge} />;
};

export default AgeContainer;
