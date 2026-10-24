function Projects() {
  return (
    <section id="work" className="px-10 py-10">

      <h2 className="text-3xl mb-10">
        Portfolio
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <img
            src="https://images.pexels.com/photos/5619064/pexels-photo-5619064.jpeg"
            alt="BMI Calculator"
            className="w-full h-70 object-cover"
          />

          <h3 className="text-xl mt-4">
            BMI Calculator
          </h3>

          <p className="mt-2">
            A simple web-based BMI calculator that takes a user's
            height and weight as input and calculates their Body
            Mass Index (BMI) using the formula BMI = weight (kg) /
            (height (m))^2.
          </p>
        </div>

        <div>
          <img
            src="https://images.pexels.com/photos/6192126/pexels-photo-6192126.jpeg"
            alt="To-Do List App (C#)"
            className="w-full h-70 object-cover"
          />

          <h3 className="text-xl mt-4">
            To-Do List App (C#)
          </h3>

          <p className="mt-2">
            A console-based to-do list application built in C#.
            Users can add tasks, view them, mark them as complete,
            and delete them through a simple menu-driven interface.
            This project helped me practice working with lists,
            loops, and user input handling in C#.
          </p>
        </div>

        <div>
          <img
            src="/images (2).jpeg"
            alt="Network Design with Subnetting (Packet Tracer)"
            className="w-full h-70 object-cover"
          />

          <h3 className="text-xl mt-4">
            Network Design with Subnetting (Packet Tracer)
          </h3>

          <p className="mt-2">
            A project demonstrating network design principles using
            Cisco Packet Tracer, including IP addressing and subnetting.
          </p>
        </div>

      </div>

    </section>
  )
}

export default Projects