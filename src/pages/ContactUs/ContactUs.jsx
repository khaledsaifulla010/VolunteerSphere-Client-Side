const ContactUs = () => {
  return (
    <div className=" mt-12 py-36">
      <h1
        style={{ animationDuration: "3s" }}
        className="mt-4 text-center text-5xl font-bold  animate__animated animate__ animate__bounceInLeft"
      >
        Get in Touch with Us
      </h1>
      <div>
        <form className="flex items-center justify-center mt-12">
          <div className="border border-slate-300 w-[1000px] p-4 rounded-xl h-auto shadow-lg transition duration-500 ease-in-out hover:shadow-2xl">
            <div className="flex items-center justify-center gap-8">
              {/* First Column */}
              <div className="w-[450px] space-y-2">
                {/* Name */}
                <div className="form-control">
                  <label className="label">
                    <span className="text-lg font-bold">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    className="input input-bordered shadow-md transition duration-300 ease-in-out hover:shadow-lg"
                    required
                  />
                </div>
                {/* Email */}
                <div className="form-control">
                  <label className="label">
                    <span className="text-lg font-bold">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="input input-bordered shadow-md transition duration-300 ease-in-out hover:shadow-lg"
                    required
                  />
                </div>
              </div>
              {/* Second Column */}
              <div className="w-[450px] space-y-2">
                {/* Subject */}
                <div className="form-control">
                  <label className="label">
                    <span className="text-lg font-bold">Subject</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Enter Subject"
                    className="input input-bordered shadow-md transition duration-300 ease-in-out hover:shadow-lg"
                    required
                  />
                </div>
                {/* Message */}
                <div className="form-control">
                  <label className="label">
                    <span className="text-lg font-bold">Message</span>
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Enter Your Message"
                    className="textarea textarea-bordered shadow-md transition duration-300 ease-in-out hover:shadow-lg"
                    required
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                className="border p-2 w-[930px] rounded-xl text-pink-600 bg-pink-100 border-pink-300 font-extrabold text-xl shadow-md transition duration-500 ease-in-out transform hover:scale-105 active:scale-95"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
