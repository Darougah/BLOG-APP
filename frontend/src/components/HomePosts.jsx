const HomePosts = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">
      {/* left */}
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/1*Hc1p9ZDHT5NZnuUdEToj4w.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      {/* right */}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
          10 uses of artificial intelligence in daily life
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>@danield</p>
          <div className="flex space-x-2 text-sm">
            <p>2024-03-06</p>
            <p>20:45</p>
          </div>
        </div>
        <p className="text-sm md:text-lg">
          {" "}
          If we think about a decade back, Artificial Intelligence (AI) seemed
          like science fiction. Fast-forward to today and AI has become integral
          to our everyday existence. From voice-activated assistants
          anticipating our needs to social media feeds seemingly reading our
          minds, AI is quietly revolutionizing our world. We have become so used
          to these being in ours
        </p>
      </div>
    </div>
  );
};

export default HomePosts;
