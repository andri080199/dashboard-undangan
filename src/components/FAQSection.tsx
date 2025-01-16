'use client';
import React, { useState } from "react";
import { FiChevronUp } from "react-icons/fi";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Apa itu Undangan Digital?",
    answer:
      "Undangan digital adalah undangan yang dikirimkan secara elektronik melalui platform online, seperti email, WhatsApp, atau media sosial. Undangan ini memiliki desain yang menarik dan dapat dengan mudah dibagikan kepada tamu.",
  },
  {
    question: "Bagaimana cara membuat undangan digital?",
    answer:
      "Anda dapat memilih desain yang Anda sukai di katalog kami, kemudian menyesuaikan informasi acara seperti tanggal, waktu, dan lokasi. Setelah itu, undangan digital dapat diunduh atau dibagikan langsung kepada tamu.",
  },
  {
    question: "Apakah saya bisa menyesuaikan desain undangan?",
    answer:
      "Ya, kami menyediakan berbagai desain yang dapat Anda sesuaikan sesuai dengan tema acara Anda. Anda dapat menambahkan teks, gambar, dan elemen lainnya.",
  },
  {
    question: "Apakah undangan digital bisa diakses di ponsel?",
    answer:
      "Tentu! Undangan digital dapat diakses di perangkat apapun, termasuk ponsel, tablet, dan komputer desktop, sehingga tamu dapat melihat undangan kapan saja dan di mana saja.",
  },
  {
    question: "Apakah ada biaya untuk menggunakan layanan ini?",
    answer:
      "Ya, ada biaya tergantung pada desain dan paket yang Anda pilih. Kami menawarkan berbagai pilihan harga sesuai dengan kebutuhan Anda.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-6 md:px-20 bg-primary">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Pertanyaan yang Sering Diajukan
        </h2>
        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-primarylight p-6 rounded-lg shadow-lg shadow-darkprimary"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-sm md:text-lg font-semibold text-textprimary">
                  {item.question}
                </h3>
                <span className="text-lg text-textprimary">
                  {openIndex === index ? (
                    <FiChevronUp className="transition-transform duration-300" />
                  ) : (
                    <FiChevronUp className="transition-transform duration-300 -rotate-180" />
                  )}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <p className="mt-4 text-textprimary text-sm md:text-md text-justify">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
