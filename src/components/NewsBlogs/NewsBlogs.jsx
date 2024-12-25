import axios from "axios";
import { useEffect, useState } from "react";
import NewsBlogsCard from "../NewsBlogsCard/NewsBlogsCard";
import "animate.css/animate.css";
const NewsBlogs = () => {
  const [allNews, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/newsBlogs")
      .then((data) => setNews(data.data));
  }, []);

  return (
    <div className="mt-24 mb-24 font-1">
      <h1
        style={{ animationDuration: "8s" }}
        className="text-5xl font-bold text-center mb-12 animate__animated
         animate__backInDown"
      >
        News & Blogs You Need
      </h1>
      <div className="grid grid-cols-3 gap-y-10 mt-16">
        {allNews.map((news) => (
          <NewsBlogsCard key={news._id} news={news}></NewsBlogsCard>
        ))}
      </div>
    </div>
  );
};

export default NewsBlogs;
