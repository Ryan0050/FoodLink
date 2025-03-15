"use client";

import Card from "@/app/Component/Card";
import Container from "@/app/Component/Container";
import Header from "@/app/Component/header";
import { useState } from "react";

const PasarJualBeli = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="text-black" >
                <Header />
                <Container>
                    <div className="pt-8">
                        <div className="flex w-full mb-4">
                            <button onClick={() => {
                                console.log(isOpen)
                                setIsOpen(!isOpen)
                                
                                }} className="bg-[#DEA160] w-full text-white font-bold p-4 rounded-lg cursor-pointer">+ Tambah Produk</button>
                        </div>

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
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>

                    </div>
                </Container>
            </div>

            {isOpen && localStorage.getItem("role") == "farmer" ? (
                <div className="w-full min-h-screen bg-[#cfb394e1] fixed top-0 flex justify-center items-center">
                <div className="modal bg-[#FEFAE1] p-8 rounded min-w-[45rem]">
                    <div className="modal-head flex justify-center">
                        <p className="text-2xl text-[#29361A]">TAMBAH PRODUK</p>
                    </div>

                    <div className="modal-body text-black mt-2">
                        <div className="form-control flex flex-col gap-1 mb-3">
                            <label htmlFor="">Nama Produk</label>
                            <input type="text" className="outline-none bg-[#DDA15E80] p-2 rounded" placeholder="Masukkan nama produk..." />
                        </div>
                        <div className="form-control flex flex-col gap-1 mb-3">
                            <label htmlFor="">Kategori</label>
                            <input type="text" className="outline-none bg-[#DDA15E80] p-2 rounded" placeholder="Masukkan kategori produk..." />
                        </div>
                        <div className="form-control flex flex-col gap-1 mb-3">
                            <label htmlFor="">Jumlah</label>
                            <input type="number" className="outline-none bg-[#DDA15E80] p-2 rounded" placeholder="Masukkan jumlah produk dalam kilogram..." />
                        </div>
                        <div className="form-control flex flex-col gap-1 mb-3">
                            <label htmlFor="">Harga</label>
                            <input type="number" className="outline-none bg-[#DDA15E80] p-2 rounded" placeholder="Masukkan harga produk per kilogram..." />
                        </div>
                        <div className="form-control flex flex-col gap-1 mb-3">
                            <label htmlFor="">Gambar</label>
                            <input type="file" className="outline-none bg-[#DDA15E80] p-2 rounded" />
                        </div>
                    </div>

                    <div className="modal-footer flex flex-row gap-4">
                        <button onClick={() => setIsOpen(!isOpen)} className="bg-[#DEA160] w-full transition hover:bg-[#c79e72] font-bold p-4 rounded-lg cursor-pointer">Close</button>
                        <button className="bg-[#DEA160] w-full transition hover:bg-[#c79e72] font-bold p-4 rounded-lg cursor-pointer">Submit</button>
                    </div>
                </div>
            </div>
            ) : (<></>)}
        </>
    );
};

export default PasarJualBeli;