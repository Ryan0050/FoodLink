"use client"; // Required for Next.js App Router

import { useState } from "react";
import { supabase } from "@/lib/supabase"; // Ensure you have initialized Supabase in src/lib/supabase.ts
import Header from "@/app/Component/header";
import Link from "next/link";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";

const SignUpFarmer = () => {
    const router = useRouter();
    const { setSignedUp } = useAuth(); 
    const [name, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent page refresh

        if (!name || !email || !password) {
            alert("Please fill in all required fields.");
            return;
        }

        const { data, error } = await supabase.from("users").insert([
            { name, email, password, role:"farmer"}
        ]);

        if (error) {
            console.error("Error inserting data:", error);
        } else {
            console.log("Data inserted:", data);
            setNama("");
            setEmail("");
            setPassword("");
            setSignedUp(true);

            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            localStorage.setItem("role", "farmer");
            
            router.push("/Pages/Perusahaan");
        }
    }; 

    return (
        <form onSubmit={handleSubmit} className="form_input text-black">
            <div className="flex flex-col min-h-screen">
                <Header/>
                <div className="flex flex-grow justify-center items-center w-auto">
                    <div className="w-[30%] p-3">
                        <h1 className="text-xl font-bold mb-2">Sign Up As Farmer</h1>
                        <span>Already have an account? </span>
                        <Link href="/Pages/LoginRegis" className="underline">Login</Link>
                        <div className="w-full h-10 bg-white border-3 border-[#606D38] flex items-center justify-center mb-4 mt-2 rounded-lg">
                            continue with google
                        </div>
                        <div className="w-full h-10 bg-white border-3 border-[#606D38] flex items-center justify-center mb-4 rounded-lg">
                            continue with facebook
                        </div>
                        <div className="w-full h-10 bg-white border-3 border-[#606D38] flex items-center justify-center mb-4 rounded-lg">
                            continue with apple
                        </div>
                        
                        <div className="text-center my-2">
                            --------------------------------------or--------------------------------------
                        </div>
                        <h1 className="text-xl">Name</h1>
                        <input
                            type="text"
                            placeholder="Your name"
                            name="nama"
                            id="nama"
                            value={name}
                            onChange={(e) => setNama(e.target.value)}
                            className="w-full h-10 bg-white border-3 border-[#606D38] px-3 rounded-lg mb-2"
                        />

                        <h1 className="text-xl">Email</h1>
                        <input
                            type="email"
                            placeholder="Your email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full h-10 bg-white border-3 border-[#606D38] px-3 rounded-lg mb-2"
                        />

                        <h1 className="text-xl">Password</h1>
                        <input
                            type="password"
                            placeholder="Your password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full h-10 bg-white border-3 border-[#606D38] px-3 rounded-lg mb-2"
                        />
                        <button
                            type="submit"
                            className="w-full h-10 bg-[#606D38] my-2 rounded-lg mb-2 text-white"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
            
        </form>
    );
};

export default SignUpFarmer;