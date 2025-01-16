import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-textprimary text-white py-8 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Logo & Description */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-6">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">MyBrand</h2>
            <p className="text-primarylight mt-2">
              Solusi undangan digital modern yang mudah, cepat, dan menarik.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8 text-sm md:gap-12">
            <div>
              <h3 className="font-semibold mb-3">Navigasi</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="hover:text-gray-300">
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link href="/catalog" className="hover:text-gray-300">
                    Katalog Desain
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-gray-300">
                    Harga
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-gray-300">
                    Kontak
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Lainnya</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/faq" className="hover:text-gray-300">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-gray-300">
                    Syarat & Ketentuan
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-gray-300">
                    Kebijakan Privasi
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-2 mb-6">
          <h1 className="text-lg text-primarylight">
            follow us on
          </h1>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            <Image
              src="/icons/instagram.png" // URL Gambar
              alt="Profile Picture"
              width={24}    // Lebar gambar
              height={24}   // Tinggi gambar
              className="hover:scale-125 transition duration-300"
            />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} dibuat dengan ❤️ by MyBrand
        </div>
      </div>
    </footer>
  );
};

export default Footer;
