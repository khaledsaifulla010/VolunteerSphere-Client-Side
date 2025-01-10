import axios from "axios";
import { useEffect, useState } from "react";
import NewsBlogsCard from "../NewsBlogsCard/NewsBlogsCard";
import "animate.css/animate.css";
const NewsBlogs = () => {
  const [allNews, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("https://volunteer-sphere-server-side.vercel.app/newsBlogs")
      .then((data) => setNews(data.data));
  }, []);

  return (
    <div className="mt-24 mb-24 font-1">
      <h1
        style={{ animationDuration: "10s" }}
        className="text-5xl font-bold text-center animate__animated
         animate__bounceInLeft"
      >
        News & Blogs You Need
      </h1>
      <div className="grid grid-cols-3 gap-y-10 mt-12">
        {allNews.map((news) => (
          <NewsBlogsCard key={news._id} news={news}></NewsBlogsCard>
        ))}
      </div>
    </div>
  );
};

export default NewsBlogs;
