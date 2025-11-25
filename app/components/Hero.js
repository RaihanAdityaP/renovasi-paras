import BlurText from "./BlurText";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600 pt-20 sm:pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 text-center">
        <div className="space-y-6 sm:space-y-8">

          {/* Title Animated */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight px-2">
            <BlurText
              text="Renovasi Paras"
              delay={80}
              animateBy="words"
              direction="top"
              className="inline-block"
            />
          </h1>

          {/* Subtitle Animated */}
          <div className="max-w-4xl mx-auto px-2">
            <BlurText
              text="Ruang kreatif yang mengubah ketidaksempurnaan menjadi keindahan. Kami menyulap bahan mentah menjadi karya bermakna dengan wajah baru yang menarik semua kalangan."
              delay={40}
              animateBy="words"
              direction="bottom"
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 leading-relaxed font-light"
            />
          </div>

          {/* Button */}
          <div className="pt-2 sm:pt-4">
            <a
              href="#produk"
              className="inline-block bg-white text-pink-600 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-lg font-semibold text-base sm:text-lg hover:bg-pink-50 transition-all transform hover:scale-105 hover:shadow-2xl shadow-xl"
            >
              Lihat Produk Kami
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}