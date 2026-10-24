function Profile() {
  return (
    <section id="about" className="text-center py-16">

      <h2 className="text-3xl mb-10">
        Author Profile
      </h2>

      <img
        src="/IMG_8891.jpeg"
        alt="Drishti"
        className="w-60 h-60 rounded-full mx-auto mb-6"
      />

      <p className="text-lg">
        I am a university student pursuing a Bachelor of Engineering.
        I am interested in technology and enjoy learning about programming
        and web development.
      </p>

      <div className="w-32 border-t-2 border-teal-500 mx-auto my-6"></div>

      <h3 className="text-2xl text-teal-600">
        Here's what I've done so far
      </h3>

    </section>
  )
}

export default Profile