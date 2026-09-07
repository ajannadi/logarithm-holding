"use client";

import React from "react";
import { ShieldCheck, MapPin, Mail, Phone, ArrowUpLeft, ArrowUpRight } from "lucide-react";
import { ModalType } from "./InstitutionalModal";
import { MinistryOfCommerceIcon, ZatcaVatIcon } from "./BespokeIcons";

interface CorporateFooterProps {
  onOpenModal: (type: ModalType) => void;
  lang: "ar" | "en";
}

function XIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.95 0-1.72.78-1.72 1.73s.77 1.73 1.72 1.73 1.73-.78 1.73-1.73-.78-1.73-1.73-1.73z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.03 2.6c.13.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.3z" />
    </svg>
  );
}

export default function CorporateFooter({ onOpenModal, lang }: CorporateFooterProps) {
  const isAr = lang === "ar";
  const ArrowIcon = isAr ? ArrowUpLeft : ArrowUpRight;

  return (
    <footer className="border-t border-white/10 bg-[#03050C] pt-16 pb-12 px-6 lg:px-12 text-gray-400 text-xs relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
        
        {/* العمود 1: الهوية والمقر المعتمد والشبكات الرسمية */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#00F2FE] via-[#7928CA] to-[#B829E3] p-[2px]">
              <div className="w-full h-full bg-[#060813] rounded-[9px] flex items-center justify-center font-black text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FE] to-[#B829E3]">
                L
              </div>
            </div>
            <span className="text-lg font-bold text-white tracking-tight">Logarithm</span>
          </div>

          <p className="text-xs text-gray-400 font-light leading-relaxed max-w-sm">
            {isAr 
              ? "مصفوفة استثمارية متقدمة تجمع بين الأنظمة الإدراكية، محركات النمو التسويقي، التطوير العقاري الذكي، وسلاسل الإمداد المتطورة."
              : "An advanced investment matrix orchestrating cognitive systems, algorithmic growth, PropTech, and synchronized logistics."}
          </p>

          <div className="flex items-center gap-2.5 pt-1">
            <a
              href="https://www.linkedin.com/company/logarithm-sa/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00F2FE] hover:border-[#00F2FE]/40 hover:bg-[#00F2FE]/10 transition-all"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/logarithm_sa"
              target="_blank"
              rel="noopener noreferrer"
              title="X (Twitter)"
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/40 hover:bg-white/10 transition-all"
            >
              <XIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://wa.me/966556889114"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp Business"
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-400/40 hover:bg-emerald-400/10 transition-all"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>
          </div>

          {/* البيانات الرسمية بأيقونات وزارة التجارة وهيئة الزكاة والضريبة */}
          <div className="space-y-2 pt-2 text-[11px] text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>{isAr ? "المملكة العربية السعودية • مكة المكرمة، حي الجامعة" : "Makkah Al-Mukarramah, Al-Jami'ah Dist., Saudi Arabia"}</span>
            </div>
            <div className="flex items-center gap-2">
              <MinistryOfCommerceIcon className="w-3.5 h-3.5 shrink-0" />
              <span>{isAr ? "السجل التجاري المعتمد: " : "Commercial Registration: "}<strong className="text-gray-200 font-mono">7051041239</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <ZatcaVatIcon className="w-3.5 h-3.5 shrink-0" />
              <span>{isAr ? "الرقم الضريبي المعتمد (ZATCA): " : "VAT Identification: "}<strong className="text-gray-200 font-mono">314092540900003</strong></span>
            </div>
          </div>
        </div>

        {/* العمود 2: مصفوفة لوغاريتم */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-white">
            {isAr ? "أذرع المصفوفة" : "Matrix Pillars"}
          </h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#cognitive" className="hover:text-cyan-400 transition-colors">{isAr ? "الأنظمة الإدراكية" : "Cognitive Systems"}</a></li>
            <li><a href="#marketing" className="hover:text-cyan-400 transition-colors">{isAr ? "التسويق الخوارزمي" : "Algorithmic Growth"}</a></li>
            <li><a href="#proptech" className="hover:text-cyan-400 transition-colors">{isAr ? "العقارات الذكية" : "Smart PropTech"}</a></li>
            <li><a href="#logistics" className="hover:text-cyan-400 transition-colors">{isAr ? "سلاسل الإمداد" : "Smart Logistics"}</a></li>
          </ul>
        </div>

        {/* العمود 3: الكيان والحوكمة */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-white">
            {isAr ? "الكيان والحوكمة" : "Enterprise"}
          </h4>
          <ul className="space-y-2 text-gray-400">
            <li><button onClick={() => onOpenModal("about")} className="hover:text-cyan-400 transition-colors cursor-pointer">{isAr ? "عن لوغاريتم" : "About Us"}</button></li>
            <li><a href="#vision" className="hover:text-cyan-400 transition-colors">{isAr ? "رؤية 2030" : "Vision 2030"}</a></li>
            <li><button onClick={() => onOpenModal("governance")} className="hover:text-cyan-400 transition-colors cursor-pointer">{isAr ? "الحوكمة والامتثال" : "Governance"}</button></li>
            <li><a href="#careers" className="hover:text-cyan-400 transition-colors">{isAr ? "بوابة التوظيف" : "Careers"}</a></li>
          </ul>
        </div>

        {/* العمود 4: تواصل المستثمرين والهاتف المعتمد */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-white">
            {isAr ? "المستثمرين والتواصل" : "Investor Relations"}
          </h4>
          <ul className="space-y-2.5 text-gray-400">
            <li className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <a href="mailto:info@logarithm.com.sa" className="text-gray-300 hover:text-cyan-400 font-mono transition-colors">
                info@logarithm.com.sa
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <a href="tel:+966556889114" className="text-gray-300 hover:text-emerald-400 font-mono transition-colors dir-ltr">
                +966 55 688 9114
              </a>
            </li>
            <li className="pt-2">
              <button 
                onClick={() => onOpenModal("contact")}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-white/10 bg-white/5 hover:border-cyan-400 hover:text-cyan-400 text-[11px] text-white transition-all cursor-pointer"
              >
                <span>{isAr ? "بوابة التواصل المباشر" : "Direct Channel"}</span>
                <ArrowIcon className="w-3 h-3" />
              </button>
            </li>
          </ul>
        </div>

      </div>

      {/* الشريط السفلي وحماية الملكية الفكرية SAIP */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-400">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>{isAr ? "علامة تجارية مسجلة ومحمية بموجب أنظمة الهيئة السعودية للملكية الفكرية (SAIP)" : "Registered Trademark under SAIP Regulations"}</span>
        </div>
        <p>{isAr ? "جميع الحقوق محفوظة لمصفوفة لوغاريتم © 2026" : "All Rights Reserved to Logarithm Matrix © 2026"}</p>
      </div>
    </footer>
  );
}