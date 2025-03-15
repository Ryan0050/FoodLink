"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();
    const { signedUp, setSignedUp, role, signOut } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleSignOut = () => {
        setSignedUp(false); // Reset auth state
        setMenuOpen(false); // Close dropdown
        signOut();
        router.push("/")
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-[#29361A] text-[#FCFAE1] flex items-center justify-between px-4 py-2">
            <div className="w-[40%] flex items-center gap-4">
                <Link href="/">
                    <div className="cursor-pointer bg-[#FCFAE1] rounded-xl">
                        <img src={"/assets/logo.png"} className="w-30" alt="" />
                    </div>
                </Link>
            </div>

            <div className="flex flex-row items-center gap-12">
                <div className="flex gap-4">
                    <Link href="/Pages/PasarJualBeli">
                        <div className="cursor-pointer">Pasar Jual Beli</div>
                    </Link>
                    <Link href="/Pages/Perusahaan">
                        <div className="cursor-pointer">Perusahaan</div>
                    </Link>
                </div>
            {!signedUp ? (
                <Link href="/Pages/LoginRegis">
                    <div className="w-12.5 h-12.5 bg-[#FCFAE1] text-white flex items-center justify-center rounded-full cursor-pointer">
                        <Image src="/assets/user.png" alt="Login" width={30} height={30} />
                    </div>
                </Link>
            ) : (
                <div className="relative">
                    <div
                        className="w-12.5 h-12.5 bg-[#FCFAE1] text-white flex items-center justify-center rounded-full cursor-pointer"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {role === "buyer" ? (
                            <Image src="/assets/buyer.png" alt="Buyer Profile" width={50} height={0} />
                        ) : (
                            <Image src="/assets/farmer.png" alt="Profile" width={50} height={50} />
                        )}
                    </div>

                    {menuOpen && (
                        <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg">
                            <Link href={role === "buyer" ?  "/Pages/ProfileBuyer" : "/Pages/ProfileFarmer"} className="block px-4 py-2 hover:bg-gray-200">Profile</Link>
                            <button
                                onClick={handleSignOut}
                                className="w-full text-left px-4 py-2 hover:bg-gray-200"
                            >
                                Sign Out
                            </button>
                        </div>
                    )}
                </div>
            )}
            </div>
        </header>
    );
}
