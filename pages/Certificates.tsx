
import React from 'react';
import { Award, ExternalLink, Download, ShieldCheck, Search } from 'lucide-react';

export const CertificatesPage: React.FC = () => {
  const certificates = [
    { id: 'SAKO-849-21', title: 'Full-Stack AI Engineering', date: 'October 14, 2025', grade: 'A+' },
    { id: 'SAKO-122-90', title: 'Neural Architecture Design', date: 'September 02, 2025', grade: 'A' }
  ];

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black mb-2">Certifications</h1>
          <p className="text-gray-500">Verified credentials from the SAKO learning ecosystem.</p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input 
            type="text" 
            placeholder="Search credentials..."
            className="bg-sako-gray/50 border border-sako-gray rounded-xl pl-10 pr-4 py-2.5 text-xs focus:outline-none focus:border-sako-green transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {certificates.map(cert => (
          <div key={cert.id} className="bg-sako-gray/20 border border-sako-gray rounded-[32px] overflow-hidden flex flex-col sm:flex-row">
            <div className="w-full sm:w-48 bg-sako-black/50 p-8 flex items-center justify-center border-r border-sako-gray">
               <Award className="w-24 h-24 text-sako-green opacity-30" />
            </div>
            <div className="flex-1 p-8 space-y-6">
               <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold text-sako-green uppercase tracking-widest">Credential {cert.id}</span>
                    <h3 className="text-xl font-bold mt-1">{cert.title}</h3>
                  </div>
                  <ShieldCheck className="w-6 h-6 text-sako-green" />
               </div>

               <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase">Issue Date</p>
                    <p className="text-sm font-bold text-gray-300">{cert.date}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase">Final Grade</p>
                    <p className="text-sm font-bold text-sako-green">{cert.grade}</p>
                  </div>
               </div>

               <div className="flex gap-4 pt-4">
                  <button className="flex-1 bg-sako-green text-black font-black py-3 rounded-xl text-xs uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" /> PDF
                  </button>
                  <button className="flex-1 bg-sako-black border border-sako-gray text-gray-400 font-bold py-3 rounded-xl text-xs uppercase tracking-widest hover:text-white transition-all flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" /> Verify
                  </button>
               </div>
            </div>
          </div>
        ))}

        <div className="border-2 border-dashed border-sako-gray rounded-[32px] p-10 flex flex-col items-center justify-center text-center">
           <div className="w-16 h-16 bg-sako-gray/30 rounded-full flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-gray-600" />
           </div>
           <h4 className="font-bold text-gray-400 mb-2">Certificate in Progress</h4>
           <p className="text-xs text-gray-600 max-w-xs">Complete "Advanced Machine Learning" to unlock your next certification.</p>
           <button className="mt-8 text-sako-green text-[10px] font-bold uppercase tracking-widest hover:underline">View Roadmap</button>
        </div>
      </div>
    </div>
  );
};
