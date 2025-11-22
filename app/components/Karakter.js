'use client';
import TrueFocus from './TrueFocus';
import { useState } from 'react';

export default function Karakter() {
  const [activeTab, setActiveTab] = useState(0);

  const characters = [
    {
      name: 'Mas Gondès',
      subtitle: 'Juragan Kain Batik',
      description: 'Bocah paling gaya sejawa-jawanya. Kalau jalan, sarungnya dikibas-kibas kayak jubah superhero, meski kadang nyangkut di pagar.',
      color: 'from-amber-400 to-orange-500',
      bgPattern: 'bg-gradient-to-br',
    },
    {
      name: 'Uda Kanduang',
      subtitle: 'Tukang Melawak',
      description: 'Pakai pakaian adat Minang lengkap dan suka berdiri tegak kaya patung. Hobinya ikut lomba pidato adat, tapi ujungnya selalu malah jadi stand-up comedy.',
      color: 'from-emerald-400 to-teal-500',
      bgPattern: 'bg-gradient-to-br',
    },
  ];

  return (
    <section id="karakter" className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-gray-900 mb-16">
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
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-black/20 rounded-full p-1.5 shadow-lg backdrop-blur-sm">
            {characters.map((char, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`relative px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 ${
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

        {/* Character Display */}
        <div className="max-w-6xl mx-auto">
          {characters.map((char, index) => (
            <div
              key={index}
              className={`${
                activeTab === index ? 'block animate-fadeIn' : 'hidden'
              } transition-all duration-500`}
            >
              <div className={`${char.bgPattern} ${char.color} rounded-3xl p-12 md:p-16 shadow-2xl`}>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-4xl md:text-5xl font-bold text-white mb-3">
                        {char.name}
                      </h3>
                      <p className="text-xl text-white/90 font-medium">
                        {char.subtitle}
                      </p>
                    </div>
                    <p className="text-xl md:text-2xl text-white/95 leading-relaxed font-light">
                      {char.description}
                    </p>
                  </div>
                  
                  {/* Character Illustration Placeholder */}
                  <div className="w-full aspect-square bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border-2 border-white/30">
                    <div className="text-center p-8">
                      <svg className="w-40 h-40 mx-auto text-white/40" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                      </svg>
                      <p className="text-white/60 text-lg mt-4">Ilustrasi Karakter</p>
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