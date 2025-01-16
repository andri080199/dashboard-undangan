import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CatalogItem {
  id: number;
  imageUrl: string;
  title: string;
  price: string;
  url: string; // URL yang unik untuk tiap tema
}

const catalogItems: CatalogItem[] = [
  {
    id: 1,
    imageUrl: "/images/portrait.png",
    title: "Modern",
    price: "Rp 1.000.000",
    url: "https://myweddblue.vercel.app", // URL untuk tema Desain Modern
  },
  {
    id: 2,
    imageUrl: "/images/portrait.png",
    title: "Floral",
    price: "Rp 1.200.000",
    url: "https://myweddblue.vercel.app/tema/desain-floral", // URL untuk tema Desain Floral
  },
  {
    id: 3,
    imageUrl: "/images/portrait.png",
    title: "Klasik",
    price: "Rp 900.000",
    url: "https://myweddblue.vercel.app/tema/desain-klasik", // URL untuk tema Desain Klasik
  },
  {
    id: 4,
    imageUrl: "/images/portrait.png",
    title: "Vintage",
    price: "Rp 1.500.000",
    url: "https://myweddblue.vercel.app/tema/desain-vintage", // URL untuk tema Desain Vintage
  },
];

const CatalogSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Katalog Desain Kami
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Pilih desain undangan yang sesuai dengan gaya dan tema acara Anda.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {catalogItems.map((item) => (
            <div
              key={item.id}
              className="bg-darkprimary rounded-2xl shadow-lg shadow-darkprimary overflow-hidden hover:opacity-80 transition-shadow duration-300"
            >
              <div className="relative h-48">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                style={{ objectFit: 'contain' }}
                className="rounded-t-lg py-2"
              />
                
              </div>
              <div className="p-4 text-center bg-primarylight">
                <h3 className="text-lg font-semibold text-textprimary mb-2">
                  {item.title}
                </h3>
                <p className="text-textprimary text-md font-thin mb-4">
                  {item.price}
                </p>
                <Link href={item.url} passHref legacyBehavior>
                  <a target="_blank">
                  <button
                    className="px-4 py-2 bg-darkprimary text-white font-semibold rounded-lg hover:scale-105 transition duration-300">
                    Preview Tema
                  </button>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
