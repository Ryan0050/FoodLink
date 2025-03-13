"use client";

import Header from "@/app/Component/header";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase"; 

const ProfileFarmer = () => {
    const [name, setName] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const [lokasi, setLokasi] = useState<string | null>(null);
    const [kota, setKota] = useState<string | null>(null);
    const [provinsi, setProvinsi] = useState<string | null>(null);
    const [noTelp, setNoTelp] = useState<string | null>(null);
    const [bio, setBio] = useState<string | null>(null);

    // Editable state for form
    const [isEditing, setIsEditing] = useState<{ [key: string]: boolean }>({
        name: false,
        lokasi: false,
        kota: false,
        provinsi: false,
        noTelp: false,
        email: false,
        bio: false,
    });

    useEffect(() => {
        const fetchProfile = async () => {
            if (typeof window !== "undefined") {
                const storedEmail = localStorage.getItem("email"); 
                if (storedEmail) {
                    const { data, error } = await supabase
                        .from("users")
                        .select("name, email, lokasi, kota, provinsi, no_telp, bio")
                        .eq("email", storedEmail)
                        .single();
                    
                    if (error) {
                        console.error("Error fetching profile:", error);
                    } else if (data) {
                        setName(data.name);
                        setEmail(data.email);
                        setLokasi(data.lokasi);
                        setKota(data.kota);
                        setProvinsi(data.provinsi);
                        setNoTelp(data.no_telp);
                        setBio(data.bio)
                        
                        // Update localStorage to store fresh data
                        localStorage.setItem("name", data.name || "");
                        localStorage.setItem("email", data.email || "");
                        localStorage.setItem("lokasi", data.lokasi || "");
                        localStorage.setItem("kota", data.kota || "");
                        localStorage.setItem("provinsi", data.provinsi || "");
                        localStorage.setItem("no_telp", data.no_telp || "");
                        localStorage.setItem("bio", data.bio || "");
                    }
                }
            }
        };
    
        fetchProfile();
    }, []);
    

    // Function to handle editing
    const handleEdit = (field: string) => {
        setIsEditing((prev) => ({ ...prev, [field]: true }));
    };

    // Function to handle input changes
    const handleChange = (field: string, value: string) => {
        if (field === "name") setName(value);
        else if (field === "lokasi") setLokasi(value);
        else if (field === "kota") setKota(value);
        else if (field === "provinsi") setProvinsi(value);
        else if (field === "noTelp") setNoTelp(value);
        else if (field === "email") setEmail(value);
        else if (field === "bio") setBio(value);
    };

    // Function to handle save to Supabase
    const handleSave = async () => {
        const { error } = await supabase
            .from("users")
            .update({
                name,
                email,
                lokasi,
                kota,
                provinsi,
                no_telp: noTelp,
                bio,
            })
            .eq("email", email); // Assuming email is unique
    
        if (error) {
            console.error("Error updating profile:", error);
        } else {
            alert("Changes have been saved");
            
            // Fetch the latest data from Supabase after updating
            const { data, error: fetchError } = await supabase
                .from("users")
                .select("name, email, lokasi, kota, provinsi, no_telp, bio")
                .eq("email", email)
                .single();
    
            if (fetchError) {
                console.error("Error fetching updated profile:", fetchError);
            } else if (data) {
                setName(data.name);
                setEmail(data.email);
                setLokasi(data.lokasi);
                setKota(data.kota);
                setProvinsi(data.provinsi);
                setNoTelp(data.no_telp);
                setBio(data.bio);
                
                // Update localStorage with the latest data
                localStorage.setItem("name", data.name || "");
                localStorage.setItem("email", data.email || "");
                localStorage.setItem("lokasi", data.lokasi || "");
                localStorage.setItem("kota", data.kota || "");
                localStorage.setItem("provinsi", data.provinsi || "");
                localStorage.setItem("no_telp", data.no_telp || "");
                localStorage.setItem("bio", data.bio || "");
            }
        }
    
        // Disable editing mode
        setIsEditing({
            name: false,
            lokasi: false,
            kota: false,
            provinsi: false,
            noTelp: false,
            email: false,
            bio: false,
        });
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-col flex-grow bg-[#29361A] relative">
                <Image
                    src="/assets/fruit.png"
                    alt="bg"
                    width={500}
                    height={0}
                    style={{ objectFit: 'fill', width: '100%', height: '100%' }}
                    className="mt-10"
                />
                <div className="absolute left-1/6 top-2/3 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-55 h-55 flex items-center justify-center rounded-full">
                        <Image src="/assets/farmer.png" alt="Profile" width={220} height={10} />
                    </div>
                </div>
                <div className="w-full h-52.5 bg-[#DEA160]">
                    <div className="w-145 flex flex-col items-end">
                        <div className="pt-5 text-2xl">
                            <h1 className="text-5xl pb-2">Welcome</h1>
                            <h1>{name || "Nama Petani"}</h1>  
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-auto flex flex-col items-center my-8">
                <div className="w-[70%] h-auto mb-5 text-[#29361A] bg">
                    <h1 className="text-5xl mb-5">Hi There</h1>
                    <div className="w-[40%] mb-5">
                        <h1 >🚜 Perluas Jangkauan ! 🌾</h1>
                        <h1>Ingin hasil panenmu cepat terjual dalam jumlah besar? Klik &quot;Hubungi Distributor&quot; sekarang dan optimalkan pendapatanmu! 💰🌱</h1>
                    </div>
                    
                        <Link href="/Pages/Perusahaan" className="w-[20%] bg-[#DEA160] rounded-lg p-3">Hubungi Distributor</Link>
                    
                    <div className="mt-5">
                        <h1 className="text-3xl">Rating</h1>
                        <h1 className="text-3xl">4.0</h1>
                    </div>
                </div>

                <div className="w-[70%] h-auto bg-[#DEA160] flex rounded-lg overflow-hidden">
                    <div className="w-[35%] rounded-l-lg p-5 flex flex-col justify-between items-center">
                        <div className="w-[100%] ml-5">
                            <div className="w-25 h-25 flex items-center justify-center rounded-full mb-5">
                                <Image src="/assets/farmer.png" alt="Profile" width={220} height={10} />
                            </div>
                            <div className="flex items-center mb-5">
                                <Image src="/assets/email.png" alt="email" width={40} height={40}/>
                                <h1 className="pl-2">{email || "Email"}</h1>  
                            </div>
                            <div className="flex items-center mb-5">
                                <Image src="/assets/notelp.png" alt="no telp" width={40} height={40}/>
                                <h1 className="pl-2">{noTelp || "No Telp"}</h1>
                            </div>
                        </div>
                        <button
                            className="px-6 py-2 bg-[#FCFAE1] text-[#DEA160] rounded-lg"
                            onClick={handleSave}
                        >
                            Save Changes
                        </button>
                    </div>

                    <div className="w-[65%] rounded-r-lg p-5 bg">
                        <h1 className="mb-2 text-3xl">Profile Setting</h1>
                        <div className="w-full bg-[#FCFAE1] rounded-lg p-5 pb-3 text-[#DEA160]">
                            {[
                                { label: "Nama", value: name, field: "name" },
                                { label: "Lokasi", value: lokasi, field: "lokasi" },
                                { label: "Kota", value: kota, field: "kota" },
                                { label: "Provinsi", value: provinsi, field: "provinsi" },
                                { label: "No Telp", value: noTelp, field: "noTelp" },
                                { label: "Email", value: email, field: "email" },
                            ].map(({ label, value, field }) => (
                                <div key={field} className="w-full flex justify-between items-center mb-4">
                                    <h1>{label}</h1>
                                    {isEditing[field] ? (
                                        <input
                                            type="text"
                                            className="w-[60%] bg-[#DEA160] text-[#FCFAE1] p-2 rounded outline-none"
                                            value={value || ""}
                                            onChange={(e) => handleChange(field, e.target.value)}
                                            onBlur={() => setIsEditing((prev) => ({ ...prev, [field]: false }))}
                                            autoFocus
                                        />
                                    ) : (
                                        <div
                                            className="w-[60%] bg-[#DEA160] text-[#FCFAE1] p-2 rounded cursor-pointer"
                                            onClick={() => handleEdit(field)}
                                        >
                                            {value || "Belum diisi"}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <h1 className="mt-7 mb-2 text-3xl">Bio</h1>
                        <div className="w-full bg-[#FCFAE1] rounded-lg p-5 text-[#DEA160] flex items-center">
                            {isEditing.bio ? (
                                <textarea
                                    className="w-full rounded outline-none resize-none"
                                    value={bio || ""}
                                    onChange={(e) => handleChange("bio", e.target.value)}
                                    onBlur={() => setIsEditing((prev) => ({ ...prev, bio: false }))}
                                    autoFocus
                                    rows={1}
                                />
                            ) : (
                                <div
                                className="w-full rounded cursor-pointer overflow-hidden"
                                    onClick={() => handleEdit("bio")}
                                >
                                    {bio || "Belum diisi"}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileFarmer;
