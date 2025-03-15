"use client";

import Header from "@/app/Component/header";
import Footer from "@/app/Component/footer";
import CompanyCard from "@/app/Component/CompanyBlock";

const Perusahaan = () => {
    return(
        <div>
            <Header/>
            <br></br>
            <br></br>
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
            <div className="flex flex-col min-h-screen">
                <main className="flex-grow">{/* Main content here */}</main>
                <Footer />
            </div>
        </div>
        
    );
};

export default Perusahaan;