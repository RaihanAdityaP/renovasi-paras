export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-linear-to-br from-pink-400 via-pink-500 to-pink-600 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
            Renovasi Paras
          </h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed font-light">
            Ruang kreatif yang mengubah ketidaksempurnaan menjadi keindahan. Kami menyulap bahan mentah menjadi karya bermakna dengan wajah baru yang menarik semua kalangan.
          </p>
          <div className="pt-4">
            <a
              href="#produk"
              className="inline-block bg-white text-pink-600 px-10 py-5 rounded-lg font-semibold text-lg hover:bg-pink-50 transition-all transform hover:scale-105 hover:shadow-2xl shadow-xl"
            >
              Lihat Produk Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}