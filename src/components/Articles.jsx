function Articles() {
  const articles = [
    {
      category: "TECHNOLOGY",
      title: "Fintech: How Technology Is Changing Finance",
      description:
        "From digital payments and mobile banking to online lending and blockchain, fintech is changing the way people interact with money and financial services.",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Fintech_icon.svg",
      link: "https://en.wikipedia.org/wiki/Financial_technology",
    },
    {
      category: "FASHION",
      title: "Chanel: The Story Behind an Iconic Fashion House",
      description:
        "From Coco Chanel's first millinery shop in Paris to one of the world's most recognisable fashion houses, Chanel has had a lasting influence on fashion and luxury.",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Coco_Chanel.jpg",
      link: "https://en.wikipedia.org/wiki/Chanel",
    },
    {
      category: "ARTIFICIAL INTELLIGENCE",
      title: "Artificial Intelligence: From Machines to Generative AI",
      description:
        "Artificial intelligence allows computer systems to perform tasks associated with human intelligence, from learning and reasoning to creating text, images and other media.",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Artificial-Intelligence.jpg",
      link: "https://en.wikipedia.org/wiki/Artificial_intelligence",
    },
  ]

  return (
    <section id="articles" className="px-6 md:px-10 py-20 bg-gray-50">
      
      <div className="text-center mb-12">
        <div className="w-20 border-t-2 border-teal-500 mx-auto mb-5"></div>

        <p className="text-sm tracking-widest text-gray-500 mb-2">
          FROM MY READING LIST
        </p>

        <h2 className="text-3xl font-semibold text-gray-900">
          Latest Articles
        </h2>

        <p className="text-gray-500 mt-3">
          A few topics I find interesting across technology, creativity and innovation.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <article
            key={article.title}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-6">
              <p className="text-xs font-semibold tracking-widest text-teal-600 mb-3">
                {article.category}
              </p>

              <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                {article.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-relaxed">
                {article.description}
              </p>

              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 text-teal-600 font-semibold hover:text-teal-800 transition"
              >
                Read Article →
              </a>
            </div>
          </article>
        ))}
      </div>

    </section>
  )
}

export default Articles