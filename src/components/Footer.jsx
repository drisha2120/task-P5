function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#3B2638] text-[#FAF7F2] mt-16"
    >

      <div className="max-w-6xl mx-auto px-10 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Personal section */}
          <div>
            <h2 className="text-3xl font-bold tracking-wide">
              DRISHTI
            </h2>

            <p className="text-[#D8C9D2] mt-3 leading-relaxed">
              Building, learning & creating along the way.
            </p>

            <p className="text-[#A9829A] mt-5 text-sm">
              DEV@Deakin
            </p>
          </div>


          {/* Explore */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Explore
            </h3>

            <div className="space-y-2 text-[#D8C9D2]">
              <a href="#about" className="block hover:text-white">
                About
              </a>

              <a href="#work" className="block hover:text-white">
                My Work
              </a>

              <a href="#articles" className="block hover:text-white">
                Articles
              </a>

              <a href="#contact" className="block hover:text-white">
                Contact
              </a>
            </div>
          </div>


          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Let's Connect
            </h3>

            <div className="space-y-2 text-[#D8C9D2]">
              <p>Instagram</p>
              <p>LinkedIn</p>
              <p>GitHub</p>
            </div>
          </div>

        </div>


        {/* Bottom */}
        <div className="border-t border-[#624557] mt-10 pt-6 flex flex-col md:flex-row justify-between gap-3 text-sm text-[#BFAEBA]">

          <p>
            © 2026 Drishti · DEV@Deakin
          </p>

          <p>
            Made with curiosity & code.
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer