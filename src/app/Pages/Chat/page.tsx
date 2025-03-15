"use client";

import Header from "@/app/Component/header";
import Chatbox from "@/app/Component/chatbox";

const Perusahaan = () => {
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
        </div>
        
    );
};

export default Perusahaan;