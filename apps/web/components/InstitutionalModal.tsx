"use client";

import React from "react";
import { 
  X, 
  ShieldCheck, 
  MapPin, 
  Mail, 
  Phone, 
  Building, 
  Sparkles, 
  CheckCircle2,
  FileText,
  Lock,
  Compass
} from "lucide-react";

export type ModalType = "about" | "governance" | "contact" | null;

interface InstitutionalModalProps {
  type: ModalType;
  onClose: () => void;
  lang: "ar" | "en";
}

export default function InstitutionalModal({ type, onClose, lang }: InstitutionalModalProps) {
  const isAr = lang === "ar";

  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-[#060813]/90 backdrop-blur-2xl transition-opacity animate-in fade-in duration-300"
      />

      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#090D1E] border border-white/10 rounded-3xl p-6 sm:p-10 overflow-y-auto shadow-2xl z-10 animate-in zoom-in-95 duration-300"
        dir={isAr ? "rtl" : "ltr"}
      >
        {/* زر الإغلاق */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00F2FE] to-[#7928CA] p-0.5">
              <div className="w-full h-full bg-[#060813] rounded-[10px] flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5 text-[#00F2FE]" />
              </div>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 block">
                {isAr ? "مصفوفة لوغاريتم المؤسسية" : "Logarithm Institutional Matrix"}
              </span>
              <h3 className="text-xl font-bold text-white">
                {type === "about" && (isAr ? "عن لوغاريتم • الميثاق وفلسفة التأسيس" : "About Logarithm • Founding Mandate")}
                {type === "governance" && (isAr ? "الحوكمة والامتثال وسيادة البيانات" : "Governance, Compliance & Data Sovereignty")}
                {type === "contact" && (isAr ? "بوابة تواصل المستثمرين والمقر الرئيسي" : "Investor Relations & Headquarters")}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 1. محتوى صفحة: عن لوغاريتم (About Us) */}
        {type === "about" && (
          <div className="space-y-6 text-gray-200 font-light leading-relaxed text-sm sm:text-base">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <h4 className="text-lg font-bold text-white mb-2">
                {isAr ? "الرؤية وفلسفة التسمية" : "Vision & Identity Genesis"}
              </h4>
              <p className="text-gray-300">
                {isAr 
                  ? "تأسست 'لوغاريتم' لتكون مصفوفة استثمارية متقدمة تعيد هندسة العلاقة بين التكنولوجيا ورأس المال. استلهمنا الاسم من الدالة اللوغاريتمية الرياضية التي تُبسط أعقد المعادلات وتضاعف مسارات النمو، لتتحول قطاعاتنا الأربعة إلى منظومة ذكية تخلق أثراً اقتصادياً ومكانياً مستداماً."
                  : "Logarithm was established as an advanced investment matrix re-engineering the intersection of technology and capital. Inspired by the mathematical logarithmic function that resolves complexity and compounds scale, our four sectors operate as a cognitive framework generating lasting economic and spatial value."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-slate-900/50 border border-white/5">
                <span className="text-xs font-mono text-cyan-400 block mb-1">{isAr ? "الغاية والرسالة" : "Mission"}</span>
                <p className="text-xs text-gray-300 font-light">
                  {isAr 
                    ? "تأصيل مسارات النمو وتوليد القيمة الاستثمارية عبر حلول الذكاء الإدراكي، الأصول المكانية، وهندسة الحضور الرقمي."
                    : "Anchoring trajectories of growth and cultivating capital value through cognitive intelligence, spatial assets, and algorithmic scale."}
                </p>
              </div>
              <div className="p-5 rounded-xl bg-slate-900/50 border border-white/5">
                <span className="text-xs font-mono text-emerald-400 block mb-1">{isAr ? "الأثر المستقبلي" : "Impact"}</span>
                <p className="text-xs text-gray-300 font-light">
                  {isAr 
                    ? "بناء منظومة وطنية سيادية تواكب طموحات رؤية 2030 وتنافس في الأسواق المؤسسية العالمية."
                    : "Constructing a sovereign enterprise framework aligned with Saudi Vision 2030 and competitive across global markets."}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 2. محتوى صفحة: الحوكمة والامتثال (Governance) */}
        {type === "governance" && (
          <div className="space-y-6 text-sm text-gray-300 font-light leading-relaxed">
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <h4 className="text-base font-bold text-white">
                  {isAr ? "الامتثال لنظام حماية البيانات الشخصية (PDPL)" : "PDPL Compliance & Data Privacy"}
                </h4>
              </div>
              <p className="text-xs text-gray-200">
                {isAr 
                  ? "تلتزم مصفوفة لوغاريتم بأعلى معايير الحوكمة وإدارة المخاطر المؤسسية، مع الامتثال الصارم للأنظمة الصادرة عن الهيئة السعودية للملكية الفكرية (SAIP) ونظام حماية البيانات الشخصية والأمن السيبراني."
                  : "Logarithm adheres to institutional governance standards, strict compliance with Saudi Personal Data Protection Law (PDPL), and National Cybersecurity Authority frameworks."}
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 flex items-start gap-3">
                <Lock className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                <div>
                  <h5 className="text-xs font-bold text-white">{isAr ? "حوكمة الذكاء الإدراكي" : "Cognitive Model Governance"}</h5>
                  <p className="text-xs text-gray-400">{isAr ? "ضمان الشفافية، منع التحيز، وعزل البيانات الحساسة داخل بيئات استضافة مستقلة وآمنة." : "Ensuring transparency, preventing bias, and isolating proprietary data within secure local enclaves."}</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 flex items-start gap-3">
                <FileText className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                <div>
                  <h5 className="text-xs font-bold text-white">{isAr ? "إدارة المخاطر والتدقيق المالي" : "Risk Management & Financial Auditing"}</h5>
                  <p className="text-xs text-gray-400">{isAr ? "سياسات تدقيق محاسبية دورية وفق المعايير الدولية لضمان سلامة الأصول ونزاهة العمليات." : "Periodic auditing policies adhering to international standards to safeguard asset integrity."}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. محتوى صفحة: تواصل معنا والمقر (Contact Us) */}
        {type === "contact" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-base font-bold text-white mb-2">
                  {isAr ? "المقر الرئيسي للمصفوفة" : "Headquarters"}
                </h4>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  {isAr 
                    ? "نرحب بلقاء الشركاء والمستثمرين وممثلي الصناديق الاستثمارية في مقرنا الرئيسي بالرياض."
                    : "We welcome partners, investors, and fund representatives at our Riyadh headquarters."}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{isAr ? "المملكة العربية السعودية، الرياض" : "Riyadh, Kingdom of Saudi Arabia"}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-300">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-mono">investors@logarithm.com.sa</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-300">
                  <Building className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>{isAr ? "سجل تجاري وترخيص ملكية فكرية معتمد" : "Registered Enterprise • SAIP Protected"}</span>
                </div>
              </div>
            </div>

            {/* نموذج رسالة مباشرة للمستثمرين */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10">
              <h5 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-4">
                {isAr ? "رسالة مباشرة لإدارة الاستثمار" : "Direct Investor Channel"}
              </h5>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder={isAr ? "الاسم والصفة" : "Your Name & Title"}
                  className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                />
                <input
                  type="email"
                  placeholder={isAr ? "البريد الإلكتروني" : "Email Address"}
                  className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                />
                <textarea
                  rows={3}
                  placeholder={isAr ? "موضوع الاستفسار أو الشراكة..." : "Inquiry or Partnership Topic..."}
                  className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 resize-none"
                />
                <button
                  onClick={() => alert(isAr ? "تم إرسال رسالتك بنجاح" : "Message sent successfully")}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-bold text-xs hover:shadow-lg cursor-pointer"
                >
                  {isAr ? "إرسال الاستفسار" : "Transmit Inquiry"}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}