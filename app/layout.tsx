import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HouseIL',
  description: 'HouseIL - AirBNB website | Premium hospitality platform with ',
  keywords: 'HouseIL, AirBNB website, hospitality, ',
  authors: [{ name: 'HouseIL' }],
  openGraph: {
    title: 'HouseIL',
    description: 'HouseIL - AirBNB website | Premium hospitality platform',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className="antialiased bg-white text-black">{children}</body>
    </html>
  );
}