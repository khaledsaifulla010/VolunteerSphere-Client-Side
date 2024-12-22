const NewsBlogsCard = ({ news }) => {
  const {
    title,
    thumbnail,
    description,
    posted_date,
    time_ago,
    author,
    author_image,
    category,
  } = news;

  return (
    <div className="card w-[450px] h-[550px] bg-base-100 shadow-xl hover:scale-105 transition-all duration-300 border">
      <figure>
        <img src={thumbnail} alt={title} className="w-full h-56 object-cover" />
      </figure>
      <div className="card-body">
        <span className="text-green-600 bg-green-100 border-green-300 p-1 border w-16 text-lg font-bold text-center rounded-xl">
          {category}
        </span>
        <h2 className="card-title font-bold text-2xl mt-4">{title}</h2>
        <p className="text-sm font-semibold text-justify mt-4">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center mt-4">
            <img
              src={author_image}
              alt={author}
              className="w-14 h-14 border border-dashed border-slate-400 rounded-full mr-2 p-1"
            />
            <div>
              <p className="font-bold text-base">{author}</p>
              <p className="text-xs font-semibold text-gray-400">
                {posted_date}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-sm font-semibold text-gray-400">
              {time_ago}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsBlogsCard;
