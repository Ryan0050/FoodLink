import React, { useState } from "react";
// fungsionalitas cuma belum konek ke profil/server sj

interface Message {
    id: number;
    text: string;
    sender: "pembeli" | "petani";
    time: string;
}

const Chatbox: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [role, setRole] = useState<"petani" | "pembeli">("pembeli"); // ini untuk skrng default ke pembeli tapi nanti tarik dari database profil
    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (input.trim() === "") return;
        const newMessage: Message = {
        id: messages.length + 1,
        text: input,
        sender: role,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
        setMessages([...messages, newMessage]);
        setInput("");
    };

    return (
        <div className="flex h-screen w-7xl bg-cream p-4">
            {/* Sidebar */}
            <div className="w-1/4 p-4 rounded-lg shadow-md outline-solid">
                <h2 className="text-lg font-bold text-green-900">CHAT</h2>
                <div className="mt-4 space-y-3">
                {[{ name: "NAMA PETANI", date: "7 MARCH" }, { name: "NAMA PETANI", date: "3 MARCH" }].map((chat, index) => (
                    <div key={index} className="flex items-center bg-white p-3 rounded-lg shadow-md">
                    <img src="/assets/random.jpg" alt="User" className="w-10 h-10 rounded-full" />
                    <div className="ml-3">
                        <p className="text-sm text-black font-bold">{chat.name}</p>
                        <p className="text-xs text-black">{chat.date}</p>
                    </div>
                    </div>
                ))}
                </div>
            </div>

            {/* Chat Window */}
            <div className="w-3/4 flex flex-col ml-4 p-4 rounded-lg shadow-md outline-solid">
                {/* Chat Header */}
                <div className="flex items-center pb-3 border-b">
                <img src="/assets/random.jpg" alt="User" className="w-12 h-12 rounded-full" />
                <h2 className="ml-3 text-black font-bold">NAMA {role.toUpperCase()} <span className="text-gray-500">{role.toUpperCase()}</span></h2>
                <button className="ml-auto bg-gray-200 px-4 py-1 rounded-full bg-white outline-gray-600 shadow-md text-gray-600">BACK</button> {/* Ini belum di link */}
                </div>

                {/* Warning Text */}
                <p className="text-sm text-gray-500 text-center my-3">
                HATI HATI PENIPUAN! Dimohon Untuk Tidak Memberikan Data Pribadi Kepada Penjual
                Serta Tetap Berinteraksi Di Dalam Aplikasi
                </p>

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto space-y-4 p-3">
                {messages.map((msg) => (
                    <div
                    key={msg.id}
                    className={`flex ${msg.sender === role ? "justify-end" : "justify-start"}`}
                    >
                    <div className={`p-3 bg-white shadow-md rounded-xl max-w-xs ${msg.sender === role ? "rounded-br-none" : "rounded-bl-none"}`}>
                        <p className="text-black">{msg.text}</p>
                        <span className="text-xs text-gray-500 block text-right">{msg.time}</span>
                    </div>
                    </div>
                ))}
                </div>

                {/* Input Field */}
                <div className="flex items-center border-t p-3">
                <input
                    type="text"
                    placeholder="TULIS PESAN"
                    className="flex-1 p-2 border rounded-full bg-white shadow-md text-black"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className="ml-3 bg-white px-4 py-2 rounded-full shadow-md outline-gray-600 text-gray-600" onClick={sendMessage}>
                    SEND
                </button>
                </div>
            </div>
        </div>
    );
};

export default Chatbox;