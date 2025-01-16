import React from "react";
import { FaMobileAlt, FaHeart, FaShareAlt, FaCalendarAlt } from "react-icons/fa";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <FaMobileAlt className="text-green-500 text-2xl" />,
    title: "Responsive Design",
    description: "Website undangan yang dapat diakses dengan baik di berbagai perangkat, termasuk smartphone, tablet, dan desktop.",
  },
  {
    icon: <FaHeart className="text-red-500 text-2xl" />,
    title: "Tema Menarik",
    description: "Beragam tema undangan yang elegan dan menarik untuk mencerminkan momen spesial Anda.",
  },
  {
    icon: <FaShareAlt className="text-blue-500 text-2xl" />,
    title: "Mudah Dibagikan",
    description: "Bagikan undangan ke teman dan keluarga melalui media sosial atau aplikasi pesan instan dengan mudah.",
  },
  {
    icon: <FaCalendarAlt className="text-yellow-500 text-2xl" />,
    title: "Integrasi Kalender",
    description: "Fitur integrasi kalender untuk mempermudah tamu mengingat tanggal acara Anda.",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-primary py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-textprimary mb-4">
          Fitur Unggulan Kami
        </h2>
        <p className="text-textprimary mb-12">
          Kami menawarkan fitur terbaik untuk memastikan undangan digital Anda
          sempurna.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-primarylight rounded-lg shadow-xl shadow-darkprimary p-6 justify-items-center text-center hover:-translate-y-4 duration-500"
            >
              <div className="mb-2">{feature.icon}</div>
              <h3 className="text-md font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-textprimary text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
