"use client";
import React, { useState } from "react";
import Header from "@/app/Component/header";
import Footer from "@/app/Component/footer";

const Keranjang = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Sayur Sawi", seller: "Pak darmi", price: 40000, quantity: 5, image: "/fruit.png" },
    { id: 2, name: "Sayur Sawi", seller: "Pak darmi", price: 15000, quantity: 10, image: "/fruit.png" },
    { id: 3, name: "Ikan", seller: "Pak tono", price: 50000, quantity: 2, image: "/fruit.png" },
  ]);

  const shippingCost = 10000;

  const handleQuantityChange = (id: number, change: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
      )
    );
  };

  const totalProductPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalPrice = totalProductPrice + shippingCost;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <br />
      <br />
      {/* Centered Cart Section */}
      <div className="flex-grow flex justify-center">
        <div className="bg-[#FAF5D7] border border-black p-6 rounded-lg w-full max-w-md text-center">
          <h2 className="font-bold text-black text-lg">KERANJANG</h2>

          <div className="grid grid-cols-3 font-bold text-black mt-4 border-b border-black pb-2">
            <span>Produk</span>
            <span>Jumlah</span>
            <span>Harga</span>
          </div>

          {cartItems.map(item => (
            <div key={item.id} className="border-b border-black py-4 flex items-center justify-between">
              <div className="flex flex-col items-center">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md" />
                <p className="text-black font-bold text-sm">{item.seller}</p>
                <p className="text-black text-xs">{item.name}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleQuantityChange(item.id, -1)}
                  className="bg-gray-200 px-2 py-1 rounded text-black"
                >
                  -
                </button>
                <span className="font-bold text-black">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, 1)}
                  className="bg-gray-200 px-2 py-1 rounded text-black"
                >
                  +
                </button>
              </div>
              <p className="font-bold text-black">Rp{(item.price * item.quantity).toLocaleString()}</p>
            </div>
          ))}

          <div className="mt-4 space-y-2">
            <div className="flex justify-between font-bold text-black">
              <span>Produk</span>
              <span>Rp{totalProductPrice.toLocaleString()}</span>
            </div>
            <div className="border-t border-black"></div>
            <div className="flex justify-between font-bold text-black">
              <span>Pengiriman</span>
              <span>Rp{shippingCost.toLocaleString()}</span>
            </div>
            <div className="border-t border-black"></div>
            <div className="flex justify-between font-bold text-black">
              <span>Total</span>
              <span>Rp{totalPrice.toLocaleString()}</span>
            </div>
          </div>

          <button className="bg-[#D59D5B] text-white font-bold w-full py-2 mt-4 rounded">
            Bayar
          </button>
        </div>
      </div>
      <br/>
      <br/>
      {/* Footer Stays at the Bottom */}
      <Footer />
    </div>
  );
};

export default Keranjang;
