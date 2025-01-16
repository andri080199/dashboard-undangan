import React from "react";
import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";

const ResponsiveSection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:w-3/4 md:h-screen">
      <div className="flex flex-col md:flex-row items-center">
        {/* Gambar */}
        <div className="mb-6 md:mb-0 md:w-1/2">
          <Image
            src="/images/Hero.png" 
            alt="Example"
            width={600} 
            height={600} 
            className=""
          />
        </div>

        {/* Desk and WA*/}
        <div className="md:w-1/2 text-center md:text-left px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primarylight">
            Buat Undangan Digital Tanpa Ribet
          </h2>
          <p className="mb-6 pt-4 text-primarylight text-sm md:text-lg">
          "Buat undangan pernikahan yang unik dan mudah dibagikan hanya dalam hitungan menit! Undangan digital kami hadir dengan berbagai template menarik dan bisa disesuaikan dengan tema pernikahan impian Anda."
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4">
            <WhatsAppButton phoneNumber={"6282375473733"}/>
            <button className="px-6 py-2 bg-gray-100 text-textprimary font-semibold rounded-lg shadow-md hover:bg-gray-200">
              Lihat Tema
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsiveSection;
