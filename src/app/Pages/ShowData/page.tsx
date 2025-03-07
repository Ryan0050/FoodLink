"use client"; // Required for Next.js App Router

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase"; // Ensure this path is correct
import Image from "next/image";

interface Item {
    id: number;
    nama: string; // Adjust according to your table structure
    usia: number;
}

const BuySell = () => {
    const [data, setData] = useState<Item[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const { data, error } = await supabase.from("User").select("*");


            if (error) {
                console.error("Error fetching data:", error);
            } else {
                setData(data);
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <div className="text-black">
            <h1>Data from Supabase</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {data.map((item) => (
                        <li key={item.id} className="border w-auto p-2 my-4">
                            <div>
                                {item.nama}{item.usia}
                                <Image src="/assets/random.jpg" alt="Example" width={150} height={150} />
                            </div>
                        </li>
                        
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BuySell;
