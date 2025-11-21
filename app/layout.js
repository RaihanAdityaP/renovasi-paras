import './globals.css'

export const metadata = {
  title: 'Renovasi Paras - Aksesori Budaya Nusantara',
  description: 'Gantungan kunci dan strap HP dengan karakter budaya Nusantara. Media edukasi dan pelestarian budaya Indonesia.',
  keywords: 'gantungan kunci, strap hp, budaya nusantara, karakter indonesia, aksesori budaya',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}