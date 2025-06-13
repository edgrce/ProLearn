import student from "../assets/Student.jpg";
import avatar from "../assets/avatar.png"; // ganti dengan avatar user kamu, atau gambar orang testimoni

export default function Testimonial() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${student})`,
      }}
    >

      {/* Testimonial Card */}
      <div className="absolute inset-0 flex justify-center md:justify-end items-center">
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-md mx-4 md:mx-16">
          <div className="flex flex-col items-center text-center">
            <img
              src={avatar}
              alt="Aulia Ramadhan"
              className="w-16 h-16 rounded-full mb-4 bg-pink-100 border-2 border-pink-200 shadow-lg"
            />
            <p className="font-semibold">Aulia Ramadhan <span className="text-gray-400">- Student</span></p>
            <p className="mt-4 text-gray-700">
              <strong>"ProLearn</strong> helped transform the way I learn. Instead of just memorizing theory, I got to work on real projects with my classmates. The AI insights also showed me where I needed to improve—something I never got in traditional classes."
            </p>

            {/* Navigation Buttons */}
            <div className="flex space-x-4 mt-6">
              <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
