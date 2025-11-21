export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-linear-to-br from-pink-400 via-pink-500 to-pink-600 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Renovasi Paras.
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            ruang kreatif yang mengubah ketidaksempurnaan menjadi keindahan. Kami menyulap bahan mentah jadi karya bermakna dengan wajah baru yang menarik semua kalangan.
          </p>
          <a
            href="#produk"
            className="inline-block bg-white text-pink-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 transition-all transform hover:scale-105 shadow-xl"
          >
            Lihat Produk Kami
          </a>
        </div>
      </div>
    </section>
  );
}