"use client";

import Card from "@/app/Component/Card";
import Container from "@/app/Component/Container";
import Header from "@/app/Component/header";
import random from "@/assets/image.png"

const PasarJualBeli = () => {
    return (
        <div className="text-black" >
            <Header />
            <Container>
                <div className="pt-8">
                    <div className="search-bar text-white w-full flex gap-3 flex-row">
                        <div className="search flex flex-row w-full relative">
                            <input type="text" className="w-full bg-[#DEA160] rounded-lg border py-2 px-5 outline-none" />
                            <button className="bg-[#DEA160] font-bold absolute top-1 right-2 cursor-pointer p-2 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14" /></svg>
                            </button>
                        </div>
                        <button className="bg-[#DEA160] font-bold p-4 rounded-lg cursor-pointer">Lokasi</button>
                        <button className="bg-[#DEA160] font-bold p-4 rounded-lg cursor-pointer">Kategori</button>
                    </div>

                    <div className="grid grid-cols-3 gap-6 mt-7">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>

                </div>
            </Container>

        </div>
    );
};

export default PasarJualBeli;