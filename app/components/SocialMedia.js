export default function SocialMedia() {
  return (
    <section id="social" className="py-20 bg-linear-to-br from-pink-400 via-pink-500 to-pink-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Temukan Kami di Social Media
        </h2>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12">
          Follow Instagram kami untuk update produk terbaru, promo menarik, dan konten edukatif seputar budaya Nusantara!
        </p>

        <div className="flex justify-center">
          <a
            href="https://www.instagram.com/renovasi_paras?igsh=emhuMjB4ZDUwNWd0"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 bg-white text-pink-500 px-8 py-5 rounded-full font-bold text-lg hover:bg-pink-50 transition-all transform hover:scale-105 shadow-2xl"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>@renovasi_paras</span>
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-white">
            <p className="text-3xl font-bold mb-2">500+</p>
            <p className="text-sm">Produk Terjual</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-white">
            <p className="text-3xl font-bold mb-2">50+</p>
            <p className="text-sm">Karakter Unik</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-white">
            <p className="text-3xl font-bold mb-2">34</p>
            <p className="text-sm">Provinsi</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-white">
            <p className="text-3xl font-bold mb-2">100%</p>
            <p className="text-sm">Handmade</p>
          </div>
        </div>
      </div>
    </section>
  );
}