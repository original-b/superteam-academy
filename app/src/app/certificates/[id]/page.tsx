"use client";

import Link from "next/link";
import { Download, Share2, Award, CheckCircle } from "lucide-react";

export default function CertificatePage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Your Certificate</h1>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm font-medium transition-colors">
              <Share2 className="w-4 h-4" /> Share
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors">
              <Download className="w-4 h-4" /> Download PDF
            </button>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 sm:p-16 text-center relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mb-6 border border-blue-500/30">
              <Award className="w-10 h-10" />
            </div>
            
            <h2 className="text-xl text-slate-400 uppercase tracking-widest font-semibold mb-2">Certificate of Completion</h2>
            <p className="text-slate-500 mb-8">This certifies that</p>
            
            <h3 className="text-4xl sm:text-5xl font-bold text-white mb-8 font-serif">Alex Developer</h3>
            
            <p className="text-slate-500 mb-4">has successfully completed the course</p>
            <h4 className="text-2xl font-bold text-blue-400 mb-12">Solana Smart Contract Development</h4>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 w-full pt-8 border-t border-slate-800/50">
              <div className="text-center">
                <p className="text-slate-400 text-sm mb-1">Date</p>
                <p className="font-medium">March 1, 2026</p>
              </div>
              <div className="text-center">
                <p className="text-slate-400 text-sm mb-1">Certificate ID</p>
                <p className="font-medium font-mono text-sm">{params.id || "CERT-8492-SOL"}</p>
              </div>
              <div className="text-center">
                <p className="text-slate-400 text-sm mb-1">Verified By</p>
                <p className="font-medium flex items-center gap-1 justify-center">
                  <CheckCircle className="w-4 h-4 text-green-400" /> Superteam Brazil
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link href="/dashboard" className="text-blue-400 hover:text-blue-300 font-medium">
            &larr; Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
