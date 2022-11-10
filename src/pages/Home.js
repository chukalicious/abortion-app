import usa from "../assets/usa.png";

const Home = () => {
  return (
    <div className="hero min-h-[50vh] bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl mt-[2rem] font-bold">
            Know Your Abortion Laws
          </h1>
          <p className="py-5">Find abortion restrictions by US location</p>
          <div className="bg-base-200">
            <figure>
              <img
                src={usa}
                alt={"outline of the US map with the USA emblazoned on it"}
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
