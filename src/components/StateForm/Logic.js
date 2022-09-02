import StateForm from "./StateForm";
import { useEffect, useState } from "react";

const Logic = () => {
  const [object, setObject] = useState({});
  console.log("Logic: object: ", object);

  function getTheStateInfo(anObj) {
    const newObj = { anObj };
    setObject(newObj);
  }

  useEffect(() => {
    setObject(object);
  }, [object]);

  console.log("Logic: anObject: after th useEffect:", object);

  return (
    <>
      <div>
        Logic
        <StateForm getTheStateInfo={getTheStateInfo} setObject={setObject} />
      </div>
      <div>
        a div to display the state:
        <div>
          <p>gestational_limits: </p>
        </div>{" "}
      </div>
    </>
  );
};

export default Logic;
