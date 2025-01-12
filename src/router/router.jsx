import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Login from "../authentication/Login/Login";
import Home from "../pages/Home/Home";
import Register from "../authentication/Register/Register";
import AddVolunteerNeedPost from "../pages/AddVolunteerNeedPost/AddVolunteerNeedPost";
import AllVolunteerNeedPosts from "../pages/AllVolunteerNeedPosts/AllVolunteerNeedPosts";
import AllVolunteerNeedPostsDetails from "../pages/AllVolunteerNeedPostsDetails/AllVolunteerNeedPostsDetails";
import BeAVolunteer from "../pages/BeAVolunteer/BeAVolunteer";
import ManageMyPosts from "../pages/ManageMyPosts/ManageMyPosts";
import ManageMyVolunteerNeedPostsUpdate from "../components/ManageMyVolunteerNeedPostsUpdate/ManageMyVolunteerNeedPostsUpdate";
import ErrorPage from "../ErrorPage/ErrorPage";
import VolunteerNeedsNowDeatils from "../pages/VolunteerNeedsNowDeatils/VolunteerNeedsNowDeatils";
import PrivateRoute from "./PrivateRoute";
import AboutMe from "../pages/AboutMe/AboutMe";
import ContactUs from "../pages/ContactUs/ContactUs";
import FAQ from "../pages/FAQ/FAQ";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: (
          <PrivateRoute>
            <AddVolunteerNeedPost></AddVolunteerNeedPost>
          </PrivateRoute>
        ),
      },
      {
        path: "/allVolunteerNeedPosts",
        element: <AllVolunteerNeedPosts></AllVolunteerNeedPosts>,
      },
      {
        path: "/allVolunteerNeedsPosts/:id",
        element: (
          <PrivateRoute>
            <AllVolunteerNeedPostsDetails></AllVolunteerNeedPostsDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://volunteer-sphere-server-side.vercel.app/allVolunteerNeedsPosts/${params.id}`
          ),
      },
      {
        path: "/allVolunteerNeedsPosts/beAVolunteer/:id",
        element: <BeAVolunteer></BeAVolunteer>,
        loader: ({ params }) =>
          fetch(
            `https://volunteer-sphere-server-side.vercel.app/allVolunteerNeedsPosts/${params.id}`
          ),
      },
      {
        path: "/manageMyPosts",
        element: (
          <PrivateRoute>
            <ManageMyPosts></ManageMyPosts>
          </PrivateRoute>
        ),
      },
      {
        path: "/manageMyPosts/:id",
        element: (
          <PrivateRoute>
            <ManageMyVolunteerNeedPostsUpdate></ManageMyVolunteerNeedPostsUpdate>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://volunteer-sphere-server-side.vercel.app/allVolunteerNeedsPosts/${params.id}`
          ),
      },
      {
        path: "/volunteerNeedsNow/:id",
        element: <VolunteerNeedsNowDeatils></VolunteerNeedsNowDeatils>,
        loader: ({ params }) =>
          fetch(
            `https://volunteer-sphere-server-side.vercel.app/volunteerNeedsNow/${params.id}`
          ),
      },
      {
        path: "/aboutMe",
        element: (
          <PrivateRoute>
            <AboutMe></AboutMe>
          </PrivateRoute>
        ),
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
    ],
  },
]);

export default router;
