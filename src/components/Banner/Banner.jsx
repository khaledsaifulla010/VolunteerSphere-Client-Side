import banner1 from "../../assets/banner/banner1.jpg";
import banner2 from "../../assets/banner/banner2.jpg";
import banner3 from "../../assets/banner/banner3.jpg";

const Banner = () => {
  return (
    <div className="mt-24">
      <div className="carousel w-full border rounded-xl shadow-lg">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={banner1}
            className="w-full h-[570px] object-cover"
            alt="Banner 1"
          />
          <h2 className="absolute top-44 left-[560px] text-7xl font-bold text-purple-950">
            Volunteer Today, Impact Forever Create Lasting Change
          </h2>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={banner2}
            className="w-full h-[570px] object-cover"
            alt="Banner 2"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={banner3}
            className="w-full h-[570px] object-cover "
            alt="Banner 3"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
