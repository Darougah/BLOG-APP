const HomePosts = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">
      {/*left*/}
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img
          src="https://www.disneyholidays.com/walt-disney-world/images/tickets/desktop/young-girl-at-blizzard-beach-water-park.jpg"
          alt=""
          className=""
        />
      </div>
      {/*right*/}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
          disney all the way
        </h1>

        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4"></div>
        <p>@danieldev</p>
      </div>
    </div>
  );
};

export default HomePosts;
