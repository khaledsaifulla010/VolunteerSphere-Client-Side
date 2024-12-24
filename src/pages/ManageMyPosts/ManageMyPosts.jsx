import axios from "axios";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
const ManageMyPosts = () => {
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/allVolunteerNeedsPostsIndividually?email=${user.email}`
      )
      .then((data) => console.log(data.data));
  }, [user.email]);

  return (
    <div className="mt-12 font-2">
      <h1 className="text-5xl font-bold text-center mb-12">Manage My Posts</h1>
    </div>
  );
};

export default ManageMyPosts;
