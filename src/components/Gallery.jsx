function Gallery() {
  return (
    <section className="px-10 py-16">

  <div className="text-center">
    <div className="w-32 border-t-2 border-teal-500 mx-auto mb-5"></div>

    <h2 className="text-2xl text-teal-600">
      My Photos
    </h2>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">

    <img
      src="https://images.pexels.com/photos/29170275/pexels-photo-29170275.jpeg"
      className="w-full aspect-[4/3] object-cover"
    />

    <img
      src="https://images.pexels.com/photos/29922196/pexels-photo-29922196.jpeg"
      className="w-full aspect-[4/3] object-cover"
    />

    <img
      src="https://images.pexels.com/photos/14763491/pexels-photo-14763491.jpeg"
      className="w-full aspect-[4/3] object-cover"
    />

    <img
      src="https://images.pexels.com/photos/36772504/pexels-photo-36772504.jpeg"
      className="w-full aspect-[4/3] object-cover"
    />

  </div>

</section>
  )
}

export default Gallery