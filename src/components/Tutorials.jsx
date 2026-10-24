function Tutorials() {
  const tutorials = [
    {
      category: "WEB DEVELOPMENT",
      title: "HTML & CSS Basics",
      description:
        "Learn the basic structure of a webpage and how CSS can be used to style it.",
      image:
        "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg",
    },
    {
      category: "PROGRAMMING",
      title: "Getting Started with Python",
      description:
        "A beginner-friendly introduction to Python variables, loops, functions and basic programming.",
      image:
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    },
    {
      category: "AI & ML",
      title: "Introduction to Machine Learning",
      description:
        "Understand the basic idea behind machine learning and how models learn patterns from data.",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    },
  ]

  return (
    <section className="px-6 md:px-10 py-20">

      <div className="text-center mb-12">
        <div className="w-20 border-t-2 border-teal-500 mx-auto mb-5"></div>

        <h2 className="text-3xl font-semibold text-gray-900">
          Tutorials
        </h2>

        <p className="text-gray-500 mt-3">
          Some useful topics I have been learning along the way.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {tutorials.map((tutorial) => (
          <div
            key={tutorial.title}
            className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-md transition"
          >

            <img
              src={tutorial.image}
              alt={tutorial.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">

              <p className="text-xs font-semibold tracking-widest text-teal-600 mb-3">
                {tutorial.category}
              </p>

              <h3 className="text-xl font-semibold text-gray-900">
                {tutorial.title}
              </h3>

              <p className="text-gray-600 mt-3 leading-relaxed">
                {tutorial.description}
              </p>

              <button className="mt-5 text-teal-600 font-medium hover:text-teal-800">
                View Tutorial →
              </button>

            </div>
          </div>
        ))}

      </div>
    </section>
  )
}

export default Tutorials