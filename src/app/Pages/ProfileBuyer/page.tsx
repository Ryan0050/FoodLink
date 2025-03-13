"use client";

import Header from "@/app/Component/header";
import Image from "next/image";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase"; 

const ProfileBuyer = () => {
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
                        <Image src="/assets/buyer.png" alt="Profile" width={220} height={10} />
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
                    
                </div>

                <div className="w-[70%] h-auto flex rounded-lg overflow-hidden text-[#29361A]">
                    <div className="w-[40%] rounded-l-lg p-5 flex flex-col justify-between items-center">
                        <div className="w-[100%] ml-5">
                            <h1 className="text-5xl mb-5">Hi There</h1>
                            <div className="w-[90%] mb-5">
                                <h1>Lihat seberapa puas orang lain dengan transaksi yang kamu lakukan. Semakin tinggi ratingmu, semakin terpercaya kamu di platform ini! 🔥✨</h1>
                            </div>
                            <div className="mt-5">
                                <h1 className="text-3xl">Rating</h1>
                                <h1 className="text-3xl">4.0</h1>
                            </div>
                        </div>
                        
                    </div>

                    {/* Profile Settings Section */}
                    <div className="w-[60%] flex flex-col rounded-r-lg p-5">
                        <div className="w-full">
                            <h1 className="mb-2 text-3xl">Profile Setting</h1>
                        </div>
                        <div className="flex">
                            <div className="w-[45%]">
                                <div className="w-full rounded-lg text-[#29361A]">
                                    {[
                                        { label: "Nama", value: name, field: "name" },
                                        { label: "Lokasi", value: lokasi, field: "lokasi" },
                                        { label: "Kota", value: kota, field: "kota" },
                                        { label: "Provinsi", value: provinsi, field: "provinsi" },
                                        { label: "No Telp", value: noTelp, field: "noTelp" },
                                        { label: "Email", value: email, field: "email" },
                                    ].map(({ label, value, field }) => (
                                        <div key={field} className="w-full flex flex-col mt-3">
                                            <h1>{label}</h1>
                                            {isEditing[field] ? (
                                                <input
                                                    type="text"
                                                    className="w-full bg-[#29361A] text-[#FCFAE1] p-1 pl-2 rounded outline-none"
                                                    value={value || ""}
                                                    onChange={(e) => handleChange(field, e.target.value)}
                                                    onBlur={() => setIsEditing((prev) => ({ ...prev, [field]: false }))}
                                                    autoFocus
                                                />
                                            ) : (
                                                <div
                                                    className="w-[100%] bg-[#29361A] text-[#FCFAE1] p-1 pl-2 rounded cursor-pointer"
                                                    onClick={() => handleEdit(field)}
                                                >
                                                    {value || "Belum diisi"}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="w-[55%] pl-5 flex flex-col">
                                <h1 className="text-3xl">Bio</h1>
                                <div className="w-full h-full bg-[#29361A] rounded-lg p-5 text-[#FCFAE1]">
                                    {isEditing.bio ? (
                                        <textarea
                                            className="w-full bg-[#29361A] text-[#FCFAE1] p-1 pl-2 rounded outline-none resize-none"
                                            value={bio || ""}
                                            onChange={(e) => handleChange("bio", e.target.value)}
                                            onBlur={() => setIsEditing((prev) => ({ ...prev, bio: false }))}
                                            autoFocus
                                            rows={13} // Set the desired height for the textarea
                                        />
                                    ) : (
                                        <div
                                           className="w-full bg-[#29361A] text-[#FCFAE1] p-1 pl-2 rounded cursor-pointer break-words whitespace-normal"
                                            onClick={() => handleEdit("bio")}
                                        >
                                            {bio || "Belum diisi"}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <button
                            className="py-2 mt-7 bg-[#606D38] text-[#FCFAE1] rounded-lg"
                            onClick={handleSave}
                        >
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileBuyer;
