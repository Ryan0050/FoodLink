"use client"; // Required for Next.js App Router

import { useState } from "react";
import { supabase } from "@/lib/supabase"; // Ensure you have initialized Supabase in src/lib/supabase.ts

const Landing = () => {
    const [nama, setNama] = useState("");
    const [usia, setUsia] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent page refresh

        const { data, error } = await supabase.from("User").insert([
            { nama, usia:Number(usia) }
        ]);

        if (error) {
            console.error("Error inserting data:", error);
        } else {
            console.log("Data inserted:", data);
            setNama("");
            setUsia("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form_input text-black">
            <div>Input Nama</div>
            <input
                type="text"
                name="nama"
                id="nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="bg-white text-black"
            />
            <div>Input usia</div>
            <input
                type="number"
                name="usia"
                id="usia"
                value={usia}
                onChange={(e) => setUsia(e.target.value)}
                className="bg-white text-black" 
            />
            <button type="submit" className="bg-blue-500 text-white p-2 mt-2">Submit</button>
        </form>
    );
};

export default Landing;
