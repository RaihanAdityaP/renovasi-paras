'use client';
import { useState } from 'react';

export default function Produk() {
  const [activeTab, setActiveTab] = useState(0);

  const products = [
    {
      name: 'Gantungan Kunci Karakter',
      description: 'Gantungan Kunci dengan karakter yang sudah dipilih. Tampak 1 sisi. Ditambah dengan manik-manik yang lucu dan serasi dengan adat karakter tersebut.',
      features: [
        'Karakter Nusantara pilihan',
        'Tampilan 1 sisi',
        'Manik-manik dekoratif',
        'Detail pakaian adat'
      ],
    },
    {
      name: 'Packaging Premium',
      description: 'Packaging dengan tema adat nusantara. Menggunakan kertas Art Carton 310 gram, dengan laminasi doff.',
      features: [
        'Art Carton 310 gram',
        'Laminasi doff',
        'Tema adat nusantara',
        'Ramah lingkungan'
      ],
    },
  ];

  return (
    <section id="produk" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-gray-900 mb-16">
          Produk Kami
        </h2>

        {/* Pill Navigation */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-black/20 rounded-full p-1.5 shadow-lg backdrop-blur-sm">
            {products.map((product, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`relative px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 whitespace-nowrap ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg scale-105'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-white/30'
                }`}
              >
                {product.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Display */}
        <div className="max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className={`${
                activeTab === index ? 'block animate-fadeIn' : 'hidden'
              } transition-all duration-500`}
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Product Image Placeholder */}
                <div className="order-2 md:order-1">
                  <div className="bg-gradient-to-br from-pink-200 to-pink-300 rounded-2xl aspect-square flex items-center justify-center shadow-xl">
                    <div className="text-center p-12">
                      <svg className="w-48 h-48 mx-auto text-white/40" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                      </svg>
                      <p className="text-white/60 text-xl mt-6 font-medium">Foto Produk</p>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-8 order-1 md:order-2">
                  <div>
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                      {product.name}
                    </h3>
                    <p className="text-xl text-gray-600 leading-relaxed font-light">
                      {product.description}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-2xl font-semibold text-gray-900">Fitur:</h4>
                    <ul className="space-y-3">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-7 h-7 text-pink-500 mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                          <span className="text-lg text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <a 
                      href="https://wa.me/6282136361056?text=Halo%21%20permisi%20kak%20saya%20mau%20order"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white px-10 py-5 rounded-lg font-semibold text-lg hover:from-pink-600 hover:to-pink-700 transition-all shadow-xl transform hover:scale-105"
                    >
                      Pesan Sekarang
                    </a>
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