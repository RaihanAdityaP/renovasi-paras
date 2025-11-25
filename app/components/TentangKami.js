import TrueFocus from './TrueFocus';

export default function TentangKami() {
  return (
    <section id="tentang" className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-gray-900 mb-8 sm:mb-12 lg:mb-16">
            <TrueFocus 
              sentence="Tentang Kami"
              manualMode={false}
              blurAmount={5}
              borderColor="red"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
          </h2>
          <div className="bg-gradient-to-br from-pink-50 via-white to-pink-50 rounded-xl sm:rounded-2xl p-6 sm:p-10 lg:p-16 shadow-xl border border-pink-100">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed text-center font-light mb-4 sm:mb-6">
              Kami dengan bangga mempersembahkan gantungan kunci dan strap HP yang fungsional sekaligus sarat nilai budaya. Salah satu varian unggulan kami adalah <span className="font-semibold text-pink-600">Karakter Nusantara</span> — tokoh-tokoh dalam balutan pakaian adat dari berbagai daerah di Indonesia.
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed text-center font-light">
              Tak hanya sebagai aksesori, produk ini juga menjadi media edukasi dan pelestarian budaya. Didesain dengan detail dan sentuhan artistik, cocok untuk hadiah, koleksi, atau cendera mata khas Indonesia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}