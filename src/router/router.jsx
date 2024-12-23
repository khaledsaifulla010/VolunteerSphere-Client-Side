import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Login from "../authentication/Login/Login";
import Home from "../pages/Home/Home";
import Register from "../authentication/Register/Register";
import AddVolunteerNeedPost from "../pages/AddVolunteerNeedPost/AddVolunteerNeedPost";
import AllVolunteerNeedPosts from "../pages/AllVolunteerNeedPosts/AllVolunteerNeedPosts";
import AllVolunteerNeedPostsDetails from "../pages/AllVolunteerNeedPostsDetails/AllVolunteerNeedPostsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addVolunteerNeedPost",
        element: <AddVolunteerNeedPost></AddVolunteerNeedPost>,
      },
      {
        path: "/allVolunteerNeedPosts",
        element: <AllVolunteerNeedPosts></AllVolunteerNeedPosts>,
      },
      {
        path: "/allVolunteerNeedsPosts/:id",
        element: <AllVolunteerNeedPostsDetails></AllVolunteerNeedPostsDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allVolunteerNeedsPosts/${params.id}`),
      },
    ],
  },
]);

export default router;
