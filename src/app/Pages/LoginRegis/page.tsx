"use client";

import Header from "@/app/Component/header";
import Link from "next/link";
import { useState } from "react";
import {supabase}from "@/lib/supabase"; // Ensure Supabase is initialized
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";

const LoginRegis = () => {
    const router = useRouter();
    const { setSignedUp, setRole } = useAuth(); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent page refresh

        if (!email || !password) {
            setErrorMessage("Please enter both email and password.");
            return;
        }

        const { data, error } = await supabase
            .from("users")
            .select("email, password, role, name")
            .eq("email", email)
            .eq("password", password)
            .single();

        if (error || !data) {
            setErrorMessage("Invalid email or password.");
            return;
        }

        // Check if password matches
        if (data.password !== password) {
            setErrorMessage("Invalid email or password.");
            return;
        }

        // Successful login
        setSignedUp(true);
        setRole(data.role)
        localStorage.setItem("role", data.role);
        localStorage.setItem("name", data.name);
        localStorage.setItem("email", data.email);
        if(data.role === "buyer"){
            router.push("/Pages/PasarJualBeli");
        }else{
            router.push("/Pages/Perusahaan");
        }
        
    };    

    return(
        <div className="flex flex-col min-h-screen">
            <Header/>
            <div className="flex flex-grow w-auto">
                <div className="text-black w-[40%] flex items-center justify-end">
                    <div className="h-[80%] w-[70%] p-4">
                        <h1 className="text-4xl pb-4">WELCOME</h1>
                        <h3>Please proceed to login or signup for an account.</h3>
                    </div>
                </div>
                <div className="text-black w-[60%] flex items-center justify-center">
                    <div className="h-[80%] w-[60%] p-3">
                        <h1 className="text-xl font-bold mb-2">Login</h1>
                        <Link href="/Pages/SignUpFarmer" className="underline">Sign up as a Farmer </Link>
                        <span className="px-1">
                            or
                        </span>
                        <Link href="/Pages/SignUpBuyer" className="underline"> Sign up as a Buyer</Link>
                        <div className="w-full h-10 bg-white border-3 border-[#606D38] flex items-center justify-center mb-4 mt-2 rounded-lg">
                            Continue with Google
                        </div>
                        <div className="w-full h-10 bg-white border-3 border-[#606D38] flex items-center justify-center mb-4 rounded-lg">
                            Continue with Facebook
                        </div>
                        <div className="w-full h-10 bg-white border-3 border-[#606D38] flex items-center justify-center mb-4 rounded-lg">
                            Continue with Apple
                        </div>
                        
                        <div className="text-center my-2">
                            OR
                        </div>
                        <form onSubmit={handleLogin} className="form_input text-black">
                            <h1 className="text-xl">Email</h1>
                            <input
                                type="email"
                                placeholder="Your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full h-10 bg-white border-3 border-[#606D38] px-3 rounded-lg mb-2"
                            />
                            <h1 className="text-xl">Password</h1>
                            <input
                                type="password"
                                placeholder="Your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full h-10 bg-white border-3 border-[#606D38] px-3 rounded-lg mb-2"
                            />
                            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                            <div className="flex items-center justify-between">
                                <div className="space-x-2 flex items-center">
                                    <input type="checkbox" id="remember" className="w-4 h-4 text-blue-500" />
                                    <label htmlFor="remember" className="text-gray-700">Remember me</label>
                                </div>
                                
                                <h1 className="">forgot your password?</h1>
                            </div>
                            <button
                                type="submit"
                                className="w-full h-10 bg-[#606D38] my-2 rounded-lg mb-2 text-white"
                            >
                                Login
                            </button>
                        </form>
                        <div className="w-full h-10 flex flex-col items-center justify-center">
                            <div className="text">By clicking on “Login” you agree to</div>
                            <div>Terms of Service | Privacy Policy</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginRegis;