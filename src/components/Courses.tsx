import writing from "../assets/writing.png";
import drama from "../assets/drama.png";
import english from "../assets/english.png";

// Tambahkan avatar jika punya file, untuk contoh pakai placeholder online:
const authors = [
  {
    name: "Jane Doe",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    name: "John Smith",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    name: "Elizabeth Bailey",
    avatar: "https://i.pravatar.cc/40?img=3",
  },
];

const courses = [
  {
    title: "Creative Writing: From Idea to Publication",
    author: authors[0],
    img: writing,
  },
  {
    title: "Modern Drama: Performance & Critique",
    author: authors[1],
    img: drama,
  },
  {
    title: "English for Digital Media & Content Creation",
    author: authors[2],
    img: english,
  },
];

export default function Courses() {
  return (
    <section className="py-16 bg-gray-50 px-4 ">
      <p className="text-center text-gray-500 mb-2 mt-20">Featured Courses</p>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        See What Others Are Teaching
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-15">
        {courses.map((c, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={c.img}
              alt={c.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-xs inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full mb-2">
                Over 1,500 students enrolled
              </p>
              <h3 className="text-md font-bold mb-2">{c.title}</h3>
              <div className="flex items-center mt-4">
                <img
                  src={c.author.avatar}
                  alt={c.author.name}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <p className="text-sm text-gray-600">by {c.author.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10 mb-20">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium">
          Explore More
        </button>
      </div>
    </section>
  );
}
