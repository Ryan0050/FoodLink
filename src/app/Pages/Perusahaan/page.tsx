"use client";

import Header from "@/app/Component/header";
import CompanyCard from "@/app/Component/CompanyBlock";

const Perusahaan = () => {
    return(
        <div>
            <Header/>
            <div className="text-black">
                List Perusahaan
            </div>
            <div className="flex justify-center items-center">
                <CompanyCard />
            </div>
            <br></br>
            <div className="flex justify-center items-center">
                <CompanyCard />
            </div>
            <br></br>
            <div className="flex justify-center items-center">
                <CompanyCard />
            </div>
        </div>
        
    );
};

export default Perusahaan;