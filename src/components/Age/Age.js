const Age = () => {
  return (
    <div className="w-[95%] mx-auto flex flex-col">
      {" "}
      <form className="mx-auto flex flex-col w-full">
        <h2 className="text-xl">Enter your Age:</h2>

        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-lg w-full max-w-xs input-secondary"
        />
      </form>
    </div>
  );
};

export default Age;
