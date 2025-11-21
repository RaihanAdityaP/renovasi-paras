'use client';
import { useState } from 'react';

export default function Karakter() {
  const [activeTab, setActiveTab] = useState(0);

  const characters = [
    {
      name: 'Mas Gondès',
      subtitle: 'Juragan Kain Batik',
      description: 'bocah paling gaya sejawa-jawanya. Kalau jalan, sarungnya dikibas-kibas kayak jubah superhero—meski kadang nyangkut di pagar.',
      color: 'bg-gradient-to-br from-pink-300 to-pink-400',
    },
    {
      name: 'Uda Kanduang',
      subtitle: 'Tukang Melawak',
      description: 'pakai pakaian adat Minang lengkap dan suka berdiri tegak kaya patung. Hobinya ikut lomba pidato adat, tapi ujungnya selalu malah jadi stand-up comedy.',
      color: 'bg-gradient-to-br from-pink-400 to-pink-500',
    },
  ];

  return (
    <section id="karakter" className="py-20 bg-linear-to-br from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-pink-500 mb-12">
          Karakter Nusantara
        </h2>

        {/* Pill Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full p-2 shadow-lg">
            {characters.map((char, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === index
                    ? 'bg-linear-to-r from-pink-400 to-pink-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-pink-500'
                }`}
              >
                {char.name}
              </button>
            ))}
          </div>
        </div>

        {/* Character Display */}
        <div className="max-w-4xl mx-auto">
          {characters.map((char, index) => (
            <div
              key={index}
              className={`${activeTab === index ? 'block' : 'hidden'} animate-fade-in`}
            >
              <div className={`${char.color} rounded-3xl p-8 md:p-12 shadow-2xl`}>
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1">
                    <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
                      {char.description}
                    </p>
                    <div className="space-y-2">
                      <p className="text-2xl font-bold text-gray-900">
                        {char.name}
                      </p>
                      <p className="text-lg text-white font-medium">
                        {char.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  {/* Character Illustration Placeholder */}
                  <div className="w-64 h-64 bg-white/30 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <div className="text-center p-4">
                      <svg className="w-32 h-32 mx-auto text-white/50" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                      </svg>
                      <p className="text-white text-sm mt-2">Ilustrasi Karakter</p>
                    </div>
                  </div>
                </div>
                
                <button className="mt-8 bg-white text-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-all shadow-lg">
                  Kembali
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}