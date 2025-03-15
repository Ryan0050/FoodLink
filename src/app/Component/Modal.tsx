import React from "react";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

interface Product {
    id: number;
    name: string;
    price: number;
    location: string;
    seller: string;
    image_url: string;
}
  
interface ModalProps {
    product: {
        name: string;
        seller: string;
        location: string;
        price: number;
        image_url: string;
    };
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ product, isOpen, onClose }) => {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => setQuantity((prev) => prev + 1);
    const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

    const addToCart = async () => {
        // Get the authenticated user
        const { data: { user }, error } = await supabase.auth.getUser();
    
        if (error || !user) {
          console.error("User not authenticated:", error);
          return;
        }
    
        // Insert into the `keranjang` table
        const { data, error: insertError } = await supabase
          .from("keranjang")
          .insert([
            {
              user_id: user.id,  // Match product with profile ID
              name: product.name,
              quantity: quantity,
              price: product.price * quantity,
            },
          ]);
    
        if (error) {
          console.error("Error adding to cart:", error);
        } else {
          console.log("Item added:", data);
          onClose(); // Close modal after adding
        }
      };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
            {/* Modal Content */}
            <div className="bg-[#FFF8E1] border-2 border-[#697A4B] p-6 rounded-xl shadow-lg relative max-w-lg w-full">
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-3 right-3 text-2xl font-bold text-[#697A4B]">
                    ✖
                </button>

                {/* Title */}
                <h2 className="text-2xl font-bold text-center text-[#697A4B]">BARANG DAN HARGA</h2>

                {/* Modal Body */}
                <div className="flex mt-4">
                    {/* Left Side: Product Details */}
                    <div className="flex-1 space-y-3">
                        <p className="text-lg font-semibold text-[#697A4B]">Barang: <span className="font-normal">{product.name}</span></p>
                        
                        {/* Quantity Selector */}
                        <div className="flex items-center gap-3">
                            <p className="text-lg font-semibold text-[#697A4B]">Jumlah:</p>
                            <button 
                                onClick={decreaseQuantity} 
                                className="bg-gray-300 px-3 py-1 rounded-md text-xl hover:bg-gray-400 transition"
                            >
                                -
                            </button>
                            <span className="text-xl font-bold">{quantity}</span>
                            <button 
                                onClick={increaseQuantity} 
                                className="bg-gray-300 px-3 py-1 rounded-md text-xl hover:bg-gray-400 transition"
                            >
                                +
                            </button>
                        </div>

                        <p className="text-lg font-semibold text-[#697A4B]">
                            Harga: <span className="font-normal">RP {product.price * quantity} / Kg</span>
                        </p>
                    </div>

                    {/* Right Side: Product Image */}
                    <div className="w-24 h-24">
                        <img src={product.image_url} alt={product.name} className="rounded-md object-cover w-full h-full" />
                    </div>
                </div>

                {/* Button */}
                <div className="flex justify-center mt-5">
                <button onClick={addToCart} className="bg-[#DEA160] font-bold p-2 rounded-lg cursor-pointer w-full">
                    Tambahkan
                </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;