import ManageMyVolunteerNeedPosts from "../../components/ManageMyVolunteerNeedPosts/ManageMyVolunteerNeedPosts";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./CustomTabsStyle.css";
import "animate.css/animate.css";
import ManageMyVolunteerRequestPosts from "../../components/ManageMyVolunteerRequestPosts/ManageMyVolunteerRequestPosts";
const ManageMyPosts = () => {
  return (
    <div className="mt-12 font-2 py-36">
      <h1
        style={{ animationDuration: "4s" }}
        className="text-5xl font-bold text-center mb-16 animate__animated
         animate__bounceInLeft "
      >
        Manage My Post
      </h1>
      <Tabs>
        <div className="border p-4 bg-purple-100 rounded-xl">
          <TabList className="custom-tab-list ">
            <Tab className="custom-tab">My Volunteer Need Posts</Tab>

            <div className="divider text-slate-400">
              --------------------------------------------------
            </div>

            <Tab className="custom-tab">My Volunteer Request Posts</Tab>
          </TabList>
        </div>

        <div className="mt-24">
          <TabPanel>
            <div>
              <ManageMyVolunteerNeedPosts></ManageMyVolunteerNeedPosts>
            </div>
          </TabPanel>
          <TabPanel>
            <ManageMyVolunteerRequestPosts></ManageMyVolunteerRequestPosts>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default ManageMyPosts;
