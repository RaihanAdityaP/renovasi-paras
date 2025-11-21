'use client';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TentangKami from './components/TentangKami';
import Karakter from './components/Karakter';
import Produk from './components/Produk';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-pink-50 to-pink-100">
      <Navbar />
      <Hero />
      <TentangKami />
      <Karakter />
      <Produk />
      <SocialMedia />
      <Footer />
    </main>
  );
}