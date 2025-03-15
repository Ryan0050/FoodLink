"use client";

import Header from "@/app/Component/header";
import Footer from "@/app/Component/footer";
import Chatbox from "@/app/Component/chatbox";

const Chat = () => {
    return(
        <div>
            <Header/>
            <br></br>
            <br></br>
            <div className="flex justify-center items-center">
                <Chatbox />
            </div>
            <br></br>
            <br></br>

            <div className="flex flex-col min-h-screen">
                <main className="flex-grow">{/* Main content here */}</main>
                <Footer />
            </div>
        </div>
        
    );
};

export default Chat;