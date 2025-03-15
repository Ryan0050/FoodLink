"use client";

import Header from "@/app/Component/header";
import CompanyCard from "@/app/Component/CompanyBlock";
import Container from "@/app/Component/Container";

const Perusahaan = () => {
    return(
        <div>
            <Header/>
            <div className="">
                <div className="page-head mb-8">
                    <div className="w-full flex justify-center bg-[#29361A] py-24 items-center">
                        <h1 className="text-white text-7xl font-semibold">Perusahaan</h1>
                    </div>
                </div>
                <Container>
                    <div className="page-body mb-8 grid grid-cols-1 gap-4">
                        <div className="flex justify-center items-center w-full">
                            <CompanyCard />
                        </div>
                        <div className="flex justify-center items-center w-full">
                            <CompanyCard />
                        </div>
                        <div className="flex justify-center items-center w-full">
                            <CompanyCard />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
        
    );
};

export default Perusahaan;