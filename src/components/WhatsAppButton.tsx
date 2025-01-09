import React from "react";

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
      className="flex items-center justify-center px-4 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0C5.372 0 0 5.373 0 12c0 2.109.54 4.162 1.566 5.978L.047 24l6.225-1.496C8.04 23.461 9.987 24 12 24c6.628 0 12-5.373 12-12S18.628 0 12 0zm0 22c-1.81 0-3.607-.471-5.197-1.354l-.373-.218-3.691.885.879-3.595-.241-.382C2.681 16.321 2 14.187 2 12 2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm5.664-7.349c-.086-.143-.314-.228-.656-.4-.341-.173-2.016-.993-2.328-1.107-.313-.114-.541-.173-.77.173-.229.346-.886 1.107-1.085 1.336-.2.229-.4.258-.742.086-.341-.173-1.442-.533-2.747-1.701-.983-.876-1.647-1.957-1.839-2.3-.191-.346-.02-.532.144-.705.148-.148.341-.4.511-.6.173-.202.23-.346.346-.572.117-.229.058-.429-.029-.6-.086-.172-.771-1.877-1.054-2.575-.276-.665-.558-.57-.77-.582-.2-.01-.429-.01-.657-.01s-.6.086-.914.429c-.314.346-1.201 1.172-1.201 2.853 0 1.68 1.228 3.304 1.399 3.537.173.229 2.418 3.714 5.856 5.213.819.35 1.46.557 1.957.714.82.263 1.566.226 2.156.137.658-.1 2.016-.823 2.303-1.616.287-.794.287-1.476.2-1.616z" />
      </svg>
      Contact via WhatsApp
    </a>
  );
};

export default WhatsAppButton;
