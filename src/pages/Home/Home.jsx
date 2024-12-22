import Banner from "../../components/Banner/Banner";
import NewsBlogs from "../../components/NewsBlogs/NewsBlogs";
import VolunteerNeedsNow from "../../components/VolunteerNeedsNow/VolunteerNeedsNow";
import VolunteerStats from "../../components/VolunteerStats/VolunteerStats";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <VolunteerNeedsNow></VolunteerNeedsNow>
      <VolunteerStats></VolunteerStats>
      <NewsBlogs></NewsBlogs>
    </div>
  );
};

export default Home;
