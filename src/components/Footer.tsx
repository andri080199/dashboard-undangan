import React from "react";
import Link from "next/link";

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
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M22.675 0H1.325C.594 0 0 .594 0 1.326v21.348C0 23.406.594 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.892-4.788 4.655-4.788 1.325 0 2.465.099 2.794.143v3.24l-1.917.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.586l-.467 3.622h-3.119V24h6.116c.729 0 1.325-.594 1.325-1.326V1.326C24 .594 23.406 0 22.675 0z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.346 3.608 1.32.976.976 1.26 2.243 1.32 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.346 2.633-1.32 3.608-.976.976-2.243 1.26-3.608 1.32-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.346-3.608-1.32-.976-.976-1.26-2.243-1.32-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.346-2.633 1.32-3.608.976-.976 2.243-1.26 3.608-1.32 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.332.014 7.052.072 5.774.131 4.503.383 3.445 1.44c-1.057 1.058-1.31 2.33-1.368 3.607C1.955 6.662 1.942 7.071 1.942 10.33c0 3.258.013 3.668.071 4.948.058 1.276.31 2.548 1.368 3.606 1.058 1.058 2.331 1.31 3.607 1.368 1.276.058 1.686.071 4.948.071 3.258 0 3.668-.013 4.948-.071 1.276-.058 2.548-.31 3.606-1.368 1.058-1.058 1.31-2.331 1.368-3.607.058-1.276.071-1.686.071-4.948 0-3.258-.013-3.668-.071-4.948-.058-1.276-.31-2.548-1.368-3.607-1.058-1.057-2.331-1.31-3.607-1.368C15.668.014 15.258 0 12 0z" />
            </svg>
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
