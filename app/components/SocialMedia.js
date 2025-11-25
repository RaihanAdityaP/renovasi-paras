import RotatingText from './RotatingText'

export default function SocialMedia() {
  return (
    <section id="social" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-pink-500 via-pink-600 to-pink-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 px-2">
          Temukan Kami di
          <RotatingText
            texts={['Instagram', 'Whatsapp']}
            mainClassName="px-2 sm:px-2 md:px-3 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light mb-8 sm:mb-12 lg:mb-16 px-2">
          Follow Instagram kami untuk update produk terbaru, promo menarik, dan konten edukatif seputar budaya Nusantara.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-2">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/renovasi_paras?igsh=emhuMjB4ZDUwNWd0"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 sm:gap-4 bg-white text-pink-600 px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 rounded-lg font-bold text-base sm:text-lg lg:text-xl hover:bg-pink-50 transition-all transform hover:scale-105 shadow-2xl"
          >
            <svg className="w-6 h-6 sm:w-7 h-7 lg:w-8 lg:h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span className="truncate">@renovasi_paras</span>
            <svg className="w-5 h-5 sm:w-6 h-6 group-hover:translate-x-1 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/6282136361056?text=Halo%21%20permisi%20kak%20saya%20mau%20order"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 sm:gap-4 bg-white text-green-600 px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 rounded-lg font-bold text-base sm:text-lg lg:text-xl hover:bg-green-50 transition-all transform hover:scale-105 shadow-2xl"
          >
            <svg className="w-6 h-6 sm:w-7 h-7 lg:w-8 lg:h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.52 3.48A11.8 11.8 0 0012 0C5.37 0 0 5.37 0 12a11.9 11.9 0 001.65 6.03L0 24l6.26-1.63A12 12 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22a9.93 9.93 0 01-5.07-1.38l-.36-.22-3.72.96.99-3.63-.24-.38A9.94 9.94 0 012 12c0-5.52 4.48-10 10-10 2.67 0 5.18 1.04 7.07 2.93A9.94 9.94 0 0122 12c0 5.52-4.48 10-10 10zm5.12-7.4c-.28-.14-1.64-.81-1.89-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.24-1.38-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.43-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.48.07-.73.34s-.96.94-.96 2.28 1 2.65 1.14 2.84c.14.18 1.96 2.99 4.75 4.19 2.79 1.2 2.79.8 3.29.75.5-.05 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.2-.53-.34z"/>
            </svg>
            <span>WhatsApp</span>
            <svg className="w-5 h-5 sm:w-6 h-6 group-hover:translate-x-1 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}