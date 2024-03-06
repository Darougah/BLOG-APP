import HomePosts from "../components/HomePosts";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="px-8 md:px-[200px]">
        <HomePosts />
        <HomePosts />
        <HomePosts />
        <HomePosts />
        <HomePosts />
      </div>
      <footer />
    </>
  );
};

export default Home;
