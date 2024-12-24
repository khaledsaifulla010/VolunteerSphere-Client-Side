import ManageMyVolunteerNeedPosts from "../../components/ManageMyVolunteerNeedPosts/ManageMyVolunteerNeedPosts";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./CustomTabsStyle.css";
const ManageMyPosts = () => {
  return (
    <div className="mt-12 mb-24 font-2">
      <h1 className="text-5xl font-bold text-center mb-16 ">Manage My Post</h1>
      <Tabs>
        <div className="border border-purple-200 p-4 bg-purple-100 rounded-xl">
          <TabList className="custom-tab-list ">
            <Tab className="custom-tab">My Volunteer Need Posts</Tab>
            <h1>Hello</h1>
            <Tab className="custom-tab">My Volunteer Request Post</Tab>
          </TabList>
        </div>

        <div className="mt-24">
          <TabPanel>
            <div><ManageMyVolunteerNeedPosts></ManageMyVolunteerNeedPosts></div>
          </TabPanel>
          <TabPanel>
            <div>Any Content 2</div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default ManageMyPosts;
