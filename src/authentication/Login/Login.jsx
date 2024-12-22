const Login = () => {
  return (
    <div className="font-3">
      <div className="w-[1200px] ml-16 rounded-xl mt-12">
        <h1
          style={{ animationDuration: "4s" }}
          className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600 -mb-4 p-8 ml-[500px] animate__animated
         animate__backInDown "
        >
          Please Login
        </h1>
        <div className="flex items-center justify-between">
          <div>
            <Lottie className="w-[600px]" animationData={loginLottie}></Lottie>
          </div>

          <div className="card bg-base-100 border w-[600px] shadow-lg transition-all hover:shadow-2xl">
            <form className="card-body" onSubmit={handleSignIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-xl">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered shadow-lg transition-all hover:shadow-xl focus:shadow-xl"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text font-bold text-xl">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered shadow-lg transition-all hover:shadow-xl focus:shadow-xl"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="btn btn-xs absolute w-12 right-3 top-[56px]"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <label className="label">
                <Link
                  to={"/forgetPassword"}
                  className="label-text-alt text-red-500 font-semibold text-base underline"
                >
                  Forgot password?
                </Link>
              </label>
              <div className="form-control mt-6">
                <button className="border p-2 w-full rounded-xl text-purple-500 bg-purple-200 border-purple-300 font-bold text-lg shadow-md transition duration-500 ease-in-out transform hover:scale-105 active:scale-95">
                  Login
                </button>
              </div>
            </form>
            <div className="ml-8 -mt-4 flex items-center gap-2 p-2">
              <h1 className="font-bold text-slate-500 text-base">
                Don't have any account?
              </h1>
              <Link to={"/register"}>
                <h1 className="font-bold text-indigo-900 text-base">
                  Register
                </h1>
              </Link>
            </div>
            <div className="divider px-9">OR</div>
            <button
              onClick={handleGoogleSignIn}
              className="border p-2 rounded-xl w-[530px] flex items-center gap-2 ml-8 mb-8 mt-2 text-lg shadow-md font-bold transition duration-500 ease-in-out transform hover:scale-105 active:scale-95"
            >
              <FcGoogle className="ml-40 text-2xl mt-1"></FcGoogle>
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
