import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import NewsBlogs from "../../components/NewsBlogs/NewsBlogs";
import VolunteerNeedsNow from "../../components/VolunteerNeedsNow/VolunteerNeedsNow";
import VolunteerStats from "../../components/VolunteerStats/VolunteerStats";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>VolunteerSphere || Home</title>
      </Helmet>
      <Banner></Banner>
      <VolunteerNeedsNow></VolunteerNeedsNow>
      <VolunteerStats></VolunteerStats>
      <NewsBlogs></NewsBlogs>
    </div>
  );
};

export default Home;
