import background from "../assets/background.png"; // ganti path jika perlu
import logo from "../assets/Logo.png"; // ganti path jika perlu

export default function SignUpLectureAndStudent() {
  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden font-archivo"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay lebih gelap tapi bukan hitam */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Konten Utama */}
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-7xl mx-auto p-6 md:p-12">
        {/* Sisi Kiri - Logo */}
        <div className="md:w-1/2 w-full flex items-center justify-center md:justify-end mb-8 md:mb-0 md:pr-12">
          <div className="flex items-center space-x-4">
            <img
              src={logo}
              alt="ProLearn Logo"
              className="w-16 h-16 md:w-20 md:h-20"
            />
            <span className="text-4xl md:text-5xl font-bold text-white">
              ProLearn
            </span>
          </div>
        </div>

        {/* Sisi Kanan - Form */}
        <div className="md:w-1/2 w-full flex items-center justify-center">
          <div className="w-full max-w-md p-6 md:p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-indigo-600 mb-2">
              Create Your Account
            </h2>
            <p className="text-center text-gray-500 mb-6 text-sm">
              Fill out the form below to start building and sharing your courses
              with students across the globe.
            </p>
            <form className="space-y-4 font-archivo">
              <div>
                <label className="block text-sm font-bold text-gray-700 font-archivo">
                  Full Name
                </label>
                <input
                  type="text"
                  className="mt-1 w-full px-3 py-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400 font-archivo"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 font-archivo">
                  Email Address
                </label>
                <input
                  type="email"
                  className="mt-1 w-full px-3 py-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400 font-archivo"
                  placeholder="Email Address"
                />
              </div>
              <div className="flex space-x-2">
                <div className="w-1/2">
                  <label className="block text-sm font-bold text-gray-700 font-archivo">
                    Password
                  </label>
                  <input
                    type="password"
                    className="mt-1 w-full px-3 py-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400 font-archivo"
                    placeholder="Password"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-bold text-gray-700 font-archivo">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="mt-1 w-full px-3 py-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400 font-archivo"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 font-archivo">
                  Job Title
                </label>
                <select
                  className="mt-1 w-full px-3 py-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400 font-archivo"
                  defaultValue="Student"
                >
                  <option value="Student">Student</option>
                  <option value="Lecturer">Lecturer</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 font-archivo">
                  University
                </label>
                <select
                  className="mt-1 w-full px-3 py-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400 font-archivo"
                  defaultValue="Marketing"
                >
                  <option value="Marketing">Marketing</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Law">Law</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  className="form-checkbox text-indigo-600 mt-1"
                />
                <span className="ml-2 text-sm text-gray-600">
                  By signing up, I agree with the{" "}
                  <a href="#" className="text-indigo-600 underline">
                    Terms of Use
                  </a>{" "}
                  &{" "}
                  <a href="#" className="text-indigo-600 underline">
                    Privacy Policy
                  </a>
                </span>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded transition"
              >
                Sign up
              </button>
            </form>
            <p className="mt-4 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <a href="#" className="text-indigo-600 underline">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
