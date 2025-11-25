'use client';
import TrueFocus from './TrueFocus';
import { useState } from 'react';

export default function Karakter() {
  const [activeTab, setActiveTab] = useState(0);

  const characters = [
    {
      name: 'Mas Gondès',
      image: '/images/mas_gondes.jpg',
      subtitle: 'Juragan Kain Batik',
      description: 'Bocah paling gaya sejawa-jawanya. Kalau jalan, sarungnya dikibas-kibas kayak jubah superhero, meski kadang nyangkut di pagar.',
      color: 'from-amber-400 to-orange-500',
      bgPattern: 'bg-gradient-to-br',
    },
    {
      name: 'Uda Kanduang',
      image: '/images/uda_kanduang.jpg',
      subtitle: 'Tukang Melawak',
      description: 'Pakai pakaian adat Minang lengkap dan suka berdiri tegak kaya patung. Hobinya ikut lomba pidato adat, tapi ujungnya selalu malah jadi stand-up comedy.',
      color: 'from-emerald-400 to-teal-500',
      bgPattern: 'bg-gradient-to-br',
    },
    {
      name: 'Ni Luh Ayu',
      image: '/images/ni_luh_ayu.jpg',
      subtitle: 'Si Manis yang Suka Gugup',
      description: 'Ni Luh Ayu selalu tampil manis dengan kebaya rapi dan senyum kalem, padahal aslinya suka panik sendiri kalau disuruh memimpin doa. Hobinya bantu-bantu di pura, tapi tiap pegang bunga selalu jatuh karena terlalu heboh sendiri.',
      color: 'from-green-400 to-lime-500',
      bgPattern: 'bg-gradient-to-br',
    },
    {
      name: 'Gede Wicaksana',
      image: '/images/gede_wicaksana.jpg',
      subtitle: 'Si Bikin Senyum',
      description: 'Gede Wicaksana selalu pakai adat Bali super rapi, udeng nggak pernah miring. Hobinya ikut lomba tari, tapi tiap tampil malah kayak lagi ngusir ayam.',
      color: 'from-yellow-400 to-amber-500',
      bgPattern: 'bg-gradient-to-br',
    },
    {
      name: 'Uni Cetar',
      image: '/images/uni_cetar.jpg',
      subtitle: 'Si Gadis Aksesoris',
      description: 'Selalu tampil heboh dengan suntiang (mahkota besar). Uni Cetar adalah gadih Minang paling anggun, paling heboh, dan paling "meletik" se-Ranah Padang.',
      color: 'from-purple-400 to-pink-500',
      bgPattern: 'bg-gradient-to-br',
    },
    {
      name: 'Mbok Jum',
      image: '/images/mbok_jum.jpg',
      subtitle: 'Si Ratu Sanggul Angin',
      description: 'Tampil anggun dengan kebaya dan sanggul seukuran bakpao. Sanggul Mbok Jum tahan badai.',
      color: 'from-rose-400 to-red-500',
      bgPattern: 'bg-gradient-to-br',
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

        {/* Pill Navigation - Fixed for All Screens */}
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

        {/* Character Display - Mobile Optimized */}
        <div className="max-w-6xl mx-auto">
          {characters.map((char, index) => (
            <div
              key={index}
              className={`${
                activeTab === index ? 'block animate-fadeIn' : 'hidden'
              } transition-all duration-500`}
            >
              <div className={`${char.bgPattern} ${char.color} rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-16 shadow-2xl`}>
                <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
                  <div className="space-y-4 sm:space-y-6 order-2 md:order-1">
                    <div>
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3">
                        {char.name}
                      </h3>
                      <p className="text-lg sm:text-xl text-white/90 font-medium">
                        {char.subtitle}
                      </p>
                    </div>
                    <p className="text-base sm:text-lg lg:text-2xl text-white/95 leading-relaxed font-light">
                      {char.description}
                    </p>
                  </div>
                  
                  {/* Product Image */}
                  <div className="w-full aspect-square bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center backdrop-blur-sm border-2 border-white/30 order-1 md:order-2">
                    <img
                      src={char.image}
                      alt={char.name}
                      className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                    />
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