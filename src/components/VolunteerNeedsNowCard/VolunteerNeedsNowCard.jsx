const VolunteerNeedsNowCard = ({ volunteer }) => {
  const { thumbnail, title, category, deadline } = volunteer;
  return (
    <div className="card card-side shadow-md hover:shadow-2xl transition-shadow duration-300 w-[470px] border font-1">
      <figure className="w-[25%]">
        <img
          src={thumbnail}
          alt={title}
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="card-body w-[65%]">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-lg text-gray-500 font-semibold">
          <strong>Category :</strong>{" "}
          <span className="text-green-600">{category}</span>
        </p>
        <p className="text-base text-gray-500">
          <strong>Deadline :</strong>{" "}
          <span className="text-rose-600 font-bold">{deadline}</span>
        </p>
      </div>
    </div>
  );
};

export default VolunteerNeedsNowCard;
