import React from "react";

const CompanyCard = () => {
  return (
    <div className="border-2 border-green-700 rounded-lg p-4 bg-cream max-w-lg flex items-center gap-4 text-black">
      <img
          src="/assets/company.png" // <-- path
          alt="Company Logo"
          className="w-24 h-24 rounded-lg object-cover"
      />
      <div className="flex-1">
          <h2 className="font-bold text-lg">Perusahaan</h2>
          <p className="text-sm flex items-center gap-2">
          🏢 <span>Sawi, kol, cabe merah</span>
          </p>
          <p className="text-sm flex items-center gap-2">
          📍 <span>Jakarta Timur, DKI Jakarta</span>
          </p>
          <p className="text-sm flex items-center gap-2">
          📞 <span>perusahaan.com / 081234567890</span>
          </p>
          <p className="text-sm">Membutuhkan sawi, kol, cabe merah setiap harinya sebanyak 1kg dengan range harga 5 - 10 juta.</p>
          <p className="font-bold">Rp5.000.000 - Rp10.000.000</p>
      </div>
    </div>
  );
};

export default CompanyCard;
