'use client';
import { useState } from 'react';

export default function Produk() {
  const [activeTab, setActiveTab] = useState(0);

  const products = [
    {
      name: 'Gantungan Kunci Karakter',
      description: 'Gantungan Kunci dengan karakter yang sudah di pilih. Tampak 1 sisi. Ditambah dengan manik-manik yang lucu dan serasi dengan adat karakter tersebut.',
      features: ['Karakter Nusantara pilihan', 'Tampilan 1 sisi', 'Manik-manik dekoratif', 'Detail pakaian adat'],
    },
    {
      name: 'Packaging Premium',
      description: 'Packaging dengan tema adat nusantara. Menggunakan kertas Art Carton 310 gram, dengan laminasi doff.',
      features: ['Art Carton 310 gram', 'Laminasi doff', 'Tema adat nusantara', 'Ramah lingkungan'],
    },
  ];

  return (
    <section id="produk" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-pink-500 mb-12">
          Produk Kami
        </h2>

        {/* Pill Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-pink-50 rounded-full p-2 shadow-lg">
            {products.map((product, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === index
                    ? 'bg-linear-to-r from-pink-400 to-pink-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-pink-500'
                }`}
              >
                {product.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Display */}
        <div className="max-w-5xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className={`${activeTab === index ? 'block' : 'hidden'} animate-fade-in`}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Product Image Placeholder */}
                <div className="bg-linear-to-br from-pink-200 to-pink-300 rounded-3xl p-12 shadow-xl h-96 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-48 h-48 mx-auto text-white/50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                    </svg>
                    <p className="text-white text-lg mt-4 font-medium">Foto Produk</p>
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="text-xl font-semibold text-pink-500">Fitur:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-6 h-6 text-pink-500 mr-2 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a 
                    href="https://wa.me/6282136361056?text=Halo%21%20permisi%20kak%20saya%20mau%20order"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-linear-to-r from-pink-400 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-500 hover:to-pink-600 transition-all shadow-lg transform hover:scale-105"
                  >
                    Pesan Sekarang
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}