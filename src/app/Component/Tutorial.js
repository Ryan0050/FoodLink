import React from "react";

const Tutorial = () => {
  const steps = [
    {
      id: 1,
      title: "Pilih Produk yang Kalian Inginkan",
      image: "/assets/fruit.png", // <-- path
    },
    {
      id: 2,
      title: "Bayar Produk Kalian",
      image: "/assets/fruit.png", // <-- path
    },
    {
      id: 3,
      title: "Jemput Produk Kalian Langsung ke Petani",
      image: "/assets/fruit.png", // <-- path
    },
  ];

  return (
    <div className="bg-cream py-10 px-6">
      <h2 className="text-2xl font-bold text-black mb-6">CARA KERJA WEBSITE INI:</h2>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        {steps.map((step) => (
          <div
            key={step.id}
            className="border-2 border-black p-6 w-full md:w-1/3 text-center"
          >
            <h3 className="text-xl font-bold text-black">
              {step.id}. {step.title}
            </h3>
            <img src={step.image} alt={step.title} className="w-full mt-4 text-black" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutorial;