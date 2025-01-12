
const FAQ = () => {
    return (
      <div className="mt-12 py-36 ">
        <h1
          style={{ animationDuration: "3s" }}
          className="mt-4 text-center text-5xl font-bold  animate__animated animate__bounceInLeft"
        >
          Frequently Asked Questions
        </h1>
        <div className="flex items-center justify-center mt-12">
          <div className="border border-slate-300 w-[1000px] p-6 rounded-xl shadow-lg transition duration-500 ease-in-out hover:shadow-2xl">
            <div className="space-y-4">
              {/* FAQ 1 */}
              <details className="collapse collapse-arrow border border-gray-300 rounded-lg">
                <summary className="collapse-title text-2xl font-bold">
                  What is the purpose of the Volunteer Management Website
                  project?
                </summary>
                <div className="collapse-content">
                  <p className="text-lg font-medium text-justify">
                    The project aims to create a user-friendly platform where
                    users can post volunteer needs, update or delete their
                    posts, and volunteer for others' posts. It serves as a
                    centralized solution for managing volunteer activities
                    efficiently.
                  </p>
                </div>
              </details>
              {/* FAQ 2 */}
              <details className="collapse collapse-arrow border border-gray-300 rounded-lg">
                <summary className="collapse-title text-2xl font-bold">
                  How do I add a volunteer need post?
                </summary>
                <div className="collapse-content">
                  <p className="text-lg font-medium text-justify">
                    Navigate to the "Add Volunteer Need Post" page, fill in the
                    required details like post title, description, category,
                    location, number of volunteers needed, deadline, and your
                    name and email (auto-filled for logged-in users), then click
                    "Add Post."
                  </p>
                </div>
              </details>
              {/* FAQ 3 */}
              <details className="collapse collapse-arrow border border-gray-300 rounded-lg">
                <summary className="collapse-title text-2xl font-bold">
                  What are the authentication requirements?
                </summary>
                <div className="collapse-content">
                  <p className="text-lg font-medium text-justify">
                    The website uses email and password-based authentication.
                    Users can register with their name, email, password, and
                    photo URL. Passwords must include uppercase and lowercase
                    letters and be at least 6 characters long. Login also
                    supports Google or GitHub integration.
                  </p>
                </div>
              </details>
              {/* FAQ 4 */}
              <details className="collapse collapse-arrow border border-gray-300 rounded-lg">
                <summary className="collapse-title text-2xl font-bold">
                  What is the "Be a Volunteer" feature?
                </summary>
                <div className="collapse-content">
                  <p className="text-lg font-medium text-justify">
                    The "Be a Volunteer" feature allows users to join an
                    existing volunteer need post by submitting their name,
                    email, and suggestions. This decreases the number of
                    volunteers needed for that post in the database.
                  </p>
                </div>
              </details>
              {/* FAQ 5 */}
              <details className="collapse collapse-arrow border border-gray-300 rounded-lg">
                <summary className="collapse-title text-2xl font-bold">
                  Is there a dark mode available on the website?
                </summary>
                <div className="collapse-content">
                  <p className="text-lg font-medium text-justify">
                    Yes, the website supports dark/light mode toggling. Users
                    can switch between themes using the toggle option in the
                    navbar for a personalized viewing experience.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FAQ;