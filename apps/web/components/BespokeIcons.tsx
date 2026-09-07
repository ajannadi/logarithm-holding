"use client";

import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

// 1. أيقونة المحور الإدراكي (الأنظمة الإدراكية وهندسة البيانات)
export function CognitiveNexusIcon({ className = "w-7 h-7", size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="cogGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00F2FE" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      <path d="M16 3L27 9.5V22.5L16 29L5 22.5V9.5L16 3Z" stroke="url(#cogGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" />
      <path d="M16 7L23 11.5V19.5L16 24L9 19.5V11.5L16 7Z" stroke="#00F2FE" strokeWidth="1.2" strokeLinejoin="round" strokeOpacity="0.8" fill="#00F2FE" fillOpacity="0.08" />
      <path d="M16 3V7M27 9.5L23 11.5M27 22.5L23 19.5M16 29V24M5 22.5L9 19.5M5 9.5L9 11.5" stroke="#00F2FE" strokeWidth="1" strokeOpacity="0.4" />
      <circle cx="16" cy="16" r="3" fill="#FFFFFF" />
      <circle cx="16" cy="16" r="6" stroke="#00F2FE" strokeWidth="1.2" strokeDasharray="2 2" />
    </svg>
  );
}

// 2. أيقونة لولب التوسع والرنين (التسويق الاستراتيجي ومحركات النمو)
export function AlgorithmicGrowthIcon({ className = "w-7 h-7", size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="growthGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7928CA" />
          <stop offset="50%" stopColor="#B829E3" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      <path d="M5 26C9 25.5 13.5 23.5 17 18.5C21 13 23 7.5 27 5" stroke="url(#growthGrad)" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M11 26C14 24 18 19.5 20.5 14C23 8.5 24.5 5.5 27 5" stroke="#B829E3" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.4" strokeDasharray="2 3" />
      <circle cx="5" cy="26" r="2.5" fill="#7928CA" />
      <circle cx="17" cy="18.5" r="2.5" fill="#B829E3" />
      <circle cx="27" cy="5" r="3.5" fill="#FFFFFF" />
      <circle cx="27" cy="5" r="6" stroke="#EC4899" strokeWidth="1.2" strokeOpacity="0.7" />
    </svg>
  );
}

// 3. أيقونة الصرح المكاني المعماري (العقارات الذكية وتكنولوجيا التطوير)
export function SpatialMonolithIcon({ className = "w-7 h-7", size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="propLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#05D5B2" />
          <stop offset="100%" stopColor="#0D9488" />
        </linearGradient>
        <linearGradient id="propRight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#14B8A6" />
          <stop offset="100%" stopColor="#042F2E" />
        </linearGradient>
      </defs>
      <path d="M16 23L27 27.5L16 31L5 27.5L16 23Z" stroke="#05D5B2" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="2 2" />
      <path d="M6 10L16 15V27L6 22V10Z" fill="url(#propLeft)" fillOpacity="0.75" stroke="#05D5B2" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M6 14L16 19M6 18L16 23" stroke="#FFFFFF" strokeWidth="0.9" strokeOpacity="0.6" />
      <path d="M16 15L26 10V22L16 27V15Z" fill="url(#propRight)" fillOpacity="0.9" stroke="#05D5B2" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M16 19L26 14M16 23L26 18" stroke="#05D5B2" strokeWidth="0.9" strokeOpacity="0.5" />
      <path d="M16 5L26 10L16 15L6 10L16 5Z" fill="#FFFFFF" fillOpacity="0.95" stroke="#FFFFFF" strokeWidth="1.2" strokeLinejoin="round" />
      <circle cx="16" cy="5" r="2" fill="#00F2FE" />
    </svg>
  );
}

// 4. أيقونة التدفق الحركي اللانهائي (سلاسل الإمداد والخدمات المتكاملة)
export function KineticFlowIcon({ className = "w-7 h-7", size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#EA580C" />
        </linearGradient>
      </defs>
      <path d="M9 11C6.2 11 4 13.2 4 16C4 18.8 6.2 21 9 21C13.5 21 18.5 11 23 11C25.8 11 28 13.2 28 16C28 18.8 25.8 21 23 21C18.5 21 13.5 11 9 11Z" stroke="url(#flowGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 8.5C13 8.5 16 13 18 16" stroke="#F59E0B" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.4" strokeDasharray="2 3" />
      <path d="M22 23.5C19 23.5 16 19 14 16" stroke="#EA580C" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.4" strokeDasharray="2 3" />
      <circle cx="9" cy="16" r="2" fill="#F59E0B" />
      <circle cx="23" cy="16" r="2.5" fill="#FFFFFF" />
      <circle cx="16" cy="16" r="1.5" fill="#EA580C" />
    </svg>
  );
}

// 5. أيقونة وزارة التجارة والسجل التجاري المعتمدة (Ministry of Commerce / CR 700)
export function MinistryOfCommerceIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="mcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#05D5B2" />
          <stop offset="100%" stopColor="#0D9488" />
        </linearGradient>
      </defs>
      {/* النخلة المركزية والرمز السيادي لوزارة التجارة */}
      <path d="M12 3V14M12 4C10.2 5.5 8.5 7.5 8.5 10C8.5 11.2 9.5 12.2 12 12.2C14.5 12.2 15.5 11.2 15.5 10C15.5 7.5 13.8 5.5 12 4Z" stroke="url(#mcGrad)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 6.5C10.5 7.8 9.5 9 9.5 10.5C9.5 11.5 10.5 12.2 12 12.2C13.5 12.2 14.5 11.5 14.5 10.5C14.5 9 13.5 7.8 12 6.5Z" stroke="#00F2FE" strokeWidth="1" strokeOpacity="0.8" />
      {/* القوس التجاري المتصل */}
      <path d="M4 17.5C7 20 17 20 20 17.5" stroke="url(#mcGrad)" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M6.5 14.8C8.5 16.5 15.5 16.5 17.5 14.8" stroke="#00F2FE" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.7" />
      <circle cx="12" cy="20.5" r="1.2" fill="#FFFFFF" />
    </svg>
  );
}

// 6. أيقونة هيئة الزكاة والضريبة والجمارك وضريبة القيمة المضافة (ZATCA / VAT)
export function ZatcaVatIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="zatcaLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
        <linearGradient id="zatcaRight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#0E7490" />
        </linearGradient>
      </defs>
      {/* المنشور الهندسي الثلاثي الأوجه لهيئة الزكاة والضريبة */}
      <path d="M12 3L3.5 18H20.5L12 3Z" stroke="#10B981" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 3L12 18L3.5 18L12 3Z" fill="url(#zatcaLeft)" fillOpacity="0.75" stroke="#10B981" strokeWidth="1" />
      <path d="M12 3L20.5 18L12 18L12 3Z" fill="url(#zatcaRight)" fillOpacity="0.9" stroke="#06B6D4" strokeWidth="1" />
      <path d="M12 10.5L7 18M12 10.5L17 18" stroke="#FFFFFF" strokeWidth="0.9" strokeOpacity="0.8" />
      <circle cx="12" cy="10.5" r="1.5" fill="#FFFFFF" />
    </svg>
  );
}