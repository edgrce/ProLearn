const steps = [
  {
    step: "1",
    title: "Sign Up",
    desc: "Students and lecturers sign up with verified university accounts.",
  },
  {
    step: "2",
    title: "Join Classes",
    desc: "Each student can join multiple classes, and one project group per class is automatically formed.",
  },
  {
    step: "3",
    title: "Learn & Build",
    desc: "Students go through projects, access materials, and work together to solve real world challenges.",
  },
  {
    step: "4",
    title: "Track Progress",
    desc: "AI analyzes learning patterns and performance to help lecturers and students reflect and improve.",
  },
];

export default function Steps() {
  return (
    <section className="py-16 text-start px-4 bg-gray-50">
      <p className="text-center text-gray-600 mb-2 mt-15">How It Works</p>
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-15">
        Start in 4 Easy Steps
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto mb-15">
        {steps.map((s, idx) => (
          <div
            key={idx}
            className="p-6 rounded-lg border border-gray-200 hover:shadow transition bg-white mb-6 md:mb-10"
          >
            <div className="text-4xl font-bold text-indigo-600 mb-2">
              {s.step}
            </div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-600 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
