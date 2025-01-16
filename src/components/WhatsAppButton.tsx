import React from "react";
import Image from "next/image";

interface WhatsAppButtonProps {
  phoneNumber: string; // Nomor WhatsApp dalam format internasional (contoh: 628123456789)
  message?: string; // Pesan default yang akan dikirim
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message = "Hello, I would like to know more about your services.",
}) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center p-2 border-2 border-primarylight text-primarylight font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300"
    >
      <Image
        src="/icons/whatsapp.png" // URL Gambar
        alt="Profile Picture"
        width={24}    // Lebar gambar
        height={24}   // Tinggi gambar
        className="mr-2"
      />
      Contact via WhatsApp
    </a>
  );
};

export default WhatsAppButton;
