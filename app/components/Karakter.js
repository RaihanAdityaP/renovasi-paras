'use client';
import TrueFocus from './TrueFocus';
import BlurText from './BlurText';
import { useState } from 'react';

export default function Karakter() {
  const [activeTab, setActiveTab] = useState(0);

  const characters = [
    {
      name: 'Mas Gondès',
      image: '/images/mas_gondes.png',
      bgImage: '/images/rumah_joglo.jpg',
      subtitle: 'Juragan Kain Batik',
      description: 'Bocah paling gaya sejawa-jawanya. Kalau jalan, sarungnya dikibas-kibas kayak jubah superhero, meski kadang nyangkut di pagar.',
      overlayColor: 'from-amber-900/80 to-orange-900/80',
    },
    {
      name: 'Uda Kanduang',
      image: '/images/uda_kanduang.png',
      bgImage: '/images/rumah_gadang.jpg',
      subtitle: 'Tukang Melawak',
      description: 'Pakai pakaian adat Minang lengkap dan suka berdiri tegak kaya patung. Hobinya ikut lomba pidato adat, tapi ujungnya selalu malah jadi stand-up comedy.',
      overlayColor: 'from-emerald-900/80 to-teal-900/80',
    },
    {
      name: 'Ni Luh Ayu',
      image: '/images/ni_luh_ayu.png',
      bgImage: '/images/pura_bali.jpg',
      subtitle: 'Si Manis yang Suka Gugup',
      description: 'Ni Luh Ayu selalu tampil manis dengan kebaya rapi dan senyum kalem, padahal aslinya suka panik sendiri kalau disuruh memimpin doa. Hobinya bantu-bantu di pura, tapi tiap pegang bunga selalu jatuh karena terlalu heboh sendiri.',
      overlayColor: 'from-green-900/80 to-lime-900/80',
    },
    {
      name: 'Gede Wicaksana',
      image: '/images/gede_wicaksana.png',
      bgImage: '/images/pura_bali.jpg',
      subtitle: 'Si Bikin Senyum',
      description: 'Gede Wicaksana selalu pakai adat Bali super rapi, udeng nggak pernah miring. Hobinya ikut lomba tari, tapi tiap tampil malah kayak lagi ngusir ayam.',
      overlayColor: 'from-yellow-900/80 to-amber-900/80',
    },
    {
      name: 'Uni Cetar',
      image: '/images/uni_cetar.png',
      bgImage: '/images/rumah_gadang.jpg',
      subtitle: 'Si Gadis Aksesoris',
      description: 'Selalu tampil heboh dengan suntiang (mahkota besar). Uni Cetar adalah gadih Minang paling anggun, paling heboh, dan paling "meletik" se-Ranah Padang.',
      overlayColor: 'from-purple-900/80 to-pink-900/80',
    },
    {
      name: 'Mbok Jum',
      image: '/images/mbok_jum.png',
      bgImage: '/images/rumah_joglo.jpg',
      subtitle: 'Si Ratu Sanggul Angin',
      description: 'Tampil anggun dengan kebaya dan sanggul seukuran bakpao. Sanggul Mbok Jum tahan badai.',
      overlayColor: 'from-rose-900/80 to-red-900/80',
    },
  ];

  return (
    <section id="karakter" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-gray-900 mb-8 sm:mb-12 lg:mb-16">
          <TrueFocus 
            sentence="Karakter Nusantara"
            manualMode={false}
            blurAmount={5}
            borderColor="red"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
        </h2>

        {/* Pill Navigation */}
        <div className="mb-8 sm:mb-12 lg:mb-16 overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex justify-start sm:justify-center bg-black/20 rounded-full p-1.5 shadow-lg backdrop-blur-sm min-w-max mx-auto w-fit">
            {characters.map((char, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`relative px-5 sm:px-6 lg:px-7 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 whitespace-nowrap ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg scale-105'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-white/30'
                }`}
              >
                {char.name}
              </button>
            ))}
          </div>
        </div>

        {/* Character Display with Background Image */}
        <div className="max-w-6xl mx-auto">
          {characters.map((char, index) => (
            <div
              key={index}
              className={`${
                activeTab === index ? 'block animate-fadeIn' : 'hidden'
              } transition-all duration-500`}
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                {/* Background Image Layer */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url(${char.bgImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                  }}
                />
                
                {/* Dark Overlay with Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${char.overlayColor}`} />
                
                {/* Content Layer */}
                <div className="relative z-10 p-6 sm:p-10 lg:p-16">
                  <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
                    {/* Text Content with BlurText Animation */}
                    <div className="space-y-4 sm:space-y-6 order-2 md:order-1">
                      <div>
                        {/* Character Name with BlurText */}
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 drop-shadow-lg">
                          <BlurText
                            text={char.name}
                            delay={60}
                            animateBy="words"
                            direction="top"
                            className="inline-block"
                          />
                        </h3>
                        {/* Subtitle with BlurText */}
                        <div className="text-lg sm:text-xl text-white/95 font-medium drop-shadow-md">
                          <BlurText
                            text={char.subtitle}
                            delay={50}
                            animateBy="words"
                            direction="bottom"
                            className="inline-block"
                          />
                        </div>
                      </div>
                      {/* Description with BlurText */}
                      <div className="text-base sm:text-lg lg:text-xl text-white/95 leading-relaxed font-light drop-shadow-md">
                        <BlurText
                          text={char.description}
                          delay={30}
                          animateBy="words"
                          direction="bottom"
                          className="inline-block"
                        />
                      </div>
                    </div>
                    
                    {/* Character Image */}
                    <div className="w-full aspect-square bg-white/10 rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-sm border-2 border-white/40 order-1 md:order-2 shadow-2xl">
                      {char.image ? (
                        <img
                          src={char.image}
                          alt={char.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <div className="text-center p-6 sm:p-8">
                            <svg className="w-24 h-24 sm:w-32 h-32 lg:w-40 lg:h-40 mx-auto text-white/40" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                            </svg>
                            <p className="text-white/60 text-base sm:text-lg mt-3 sm:mt-4">Ilustrasi Karakter</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}