function Hero() {
  return (
    <section className="w-full">
      <div className="relative w-full">
        <img
          src="/deakin.jpeg"
          alt="Deakin University"
          className="w-full h-70 object-cover"
        />

        <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-center py-3">
          Hey, I'm Drishti
        </div>
      </div>
    </section>
  )
}

export default Hero