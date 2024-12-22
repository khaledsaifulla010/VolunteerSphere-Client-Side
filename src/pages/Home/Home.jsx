import Banner from "../../components/Banner/Banner";
import NewsBlogs from "../../components/NewsBlogs/NewsBlogs";
import VolunteerNeedsNow from "../../components/VolunteerNeedsNow/VolunteerNeedsNow";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <VolunteerNeedsNow></VolunteerNeedsNow>
      <NewsBlogs></NewsBlogs>
    </div>
  );
};

export default Home;
