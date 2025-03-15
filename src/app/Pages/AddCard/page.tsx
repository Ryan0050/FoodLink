"use client";
import React, { useState } from "react";
import Header from "@/app/Component/header";
import Footer from "@/app/Component/footer";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: "Ikan asin",
    category: "Daging",
    amount: "30 Kg",
    price: "Rp 20.000 / Kg",
    image: null,
  });

  const handleChange = (field:string, value:string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div>
        <Header />
        <div className="flex flex-col items-center bg-[#FAF5D7] min-h-screen p-6">
            
        <div className="w-1200 max-w-sm">
            <br/>
            <br/>
            {/* Name Input */}
            <label className="block font-bold text-black">NAMA PRODUK</label>
            <div className="relative">
            <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="w-full bg-[#D9B385] border border-green-900 text-black px-4 py-2 rounded focus:outline-none"
            />
            </div>

            {/* Category Dropdown */}
            <label className="block mt-4 font-bold text-black">KATEGORI</label>
            <select
            value={formData.category}
            onChange={(e) => handleChange("category", e.target.value)}
            className="w-full bg-[#D9B385] border border-green-900 text-black px-4 py-2 rounded focus:outline-none"
            >
            <option value="Daging">Daging</option>
            <option value="Sayur">Sayur</option>
            <option value="Buah">Buah</option>
            </select>

            {/* Amount Input */}
            <label className="block mt-4 font-bold text-black">JUMLAH</label>
            <div className="relative">
            <input
                type="text"
                value={formData.amount}
                onChange={(e) => handleChange("amount", e.target.value)}
                className="w-full bg-[#D9B385] border border-green-900 text-black px-4 py-2 rounded focus:outline-none"
            />
            </div>

            {/* Price Input */}
            <label className="block mt-4 font-bold text-black">HARGA</label>
            <div className="relative">
            <input
                type="text"
                value={formData.price}
                onChange={(e) => handleChange("price", e.target.value)}
                className="w-full bg-[#D9B385] border border-green-900 text-black px-4 py-2 rounded focus:outline-none"
            />
            </div>

            {/* Image Upload */}
            <label className="block mt-6 font-bold text-black text-center">TAMBAHKAN GAMBAR</label>
            <div className="flex flex-col items-center border border-green-900 p-6 rounded w-32 mx-auto cursor-pointer">
            <span className="text-black text-2xl">⬆</span>
            </div>

            {/* Submit Button */}
            <button className="mt-6 bg-[#D59D5B] text-white font-bold w-full py-2 rounded">
            Tambahkan
            </button>
        </div>
        </div>
    <Footer />
    </div>
  );
};

export default ProductForm;
