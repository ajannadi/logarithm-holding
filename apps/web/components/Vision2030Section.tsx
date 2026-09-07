"use client";

import React from "react";
import { 
  Compass, 
  Target, 
  Cpu, 
  Building2, 
  TrendingUp, 
  Truck, 
  ArrowUpLeft, 
  ArrowUpRight, 
  ShieldCheck, 
  Sparkles,
  Layers,
  Repeat
} from "lucide-react";

interface Vision2030SectionProps {
  lang: "ar" | "en";
}

export default function Vision2030Section({ lang }: Vision2030SectionProps) {
  const isAr = lang === "ar";
  const ArrowIcon = isAr ? ArrowUpLeft : ArrowUpRight;

  const content = {
    ar: {
      vision_badge: "مواءمة وطنية استراتيجية • رؤية السعودية 2030",
      vision_title: "تمكين التحول الوطني بـ",
      vision_highlight: "الذكاء الإدراكي والأصول المتقدمة",
      vision_desc: "تتلاقى مصفوفة لوغاريتم في صميمها مع ركائز رؤية المملكة 2030؛ محولةً الابتكار الخوارزمي إلى قوة دافعة تنمي الناتج المحلي غير النفطي، وتبني أصولاً مكانية ذكية، وتعزز السيادة المعرفية.",
      pillars: [
        {
          title: "السيادة المعرفية والذكاء الإدراكي",
          goal: "دعم الاستراتيجية الوطنية للبيانات والذكاء الاصطناعي (SDAIA)",
          desc: "توطين البنى التحتية الإدراكية ونمذجة البيانات السيادية المستقلة لقيادة اقتصاد المعرفة.",
          icon: Cpu,
          accent: "#00F2FE",
        },
        {
          title: "الأصول المكانية وتطوير المستقبل",
          goal: "مواكبة المشاريع الكبرى والتحول الحضري المستدام",
          desc: "إعادة ابتكار القيمة العقارية عبر الذكاء المكاني والتقييم الفوري لتعظيم كفاءة رأس المال.",
          icon: Building2,
          accent: "#05D5B2",
        },
        {
          title: "تنمية الاقتصاد الرقمي والنمو",
          goal: "مضاعفة مساهمة الشركات الوطنية وتوسيع الحضور العالمي",
          desc: "هندسة علامات تجارية سعودية ذات تنافسية دولية مدعومة بمحركات التسويق الخوارزمي.",
          icon: TrendingUp,
          accent: "#B829E3",
        },
        {
          title: "ترسيخ المركز اللوجستي العالمي",
          goal: "تمكين الاستراتيجية الوطنية للنقل والخدمات اللوجستية",
          desc: "أتمتة وتنسيق تدفقات الإمداد الإقليمية بحلول ذكية تضمن أعلى كفاءة وسرعة تشغيلية.",
          icon: Truck,
          accent: "#F59E0B",
        },
      ],
      synergy_badge: "الهندسة العصبية المغلقة • Closed-Loop Synergy",
      synergy_title: "التكامل الخوارزمي لمصفوفة لوغاريتم",
      synergy_subtitle: "لا تعمل قطاعاتنا كجزر منعزلة؛ بل كمعادلة رياضية مترابطة يُغذي فيها كل ذراع مخرجات الأذرع الأخرى لتوليد عائد استثماري مركب.",
      loop_steps: [
        {
          step: "01",
          name: "الأنظمة الإدراكية",
          role: "تضخ الخوارزميات ونماذج الاستنتاج",
          feeds: "توجه قرارات الاستثمار العقاري واستهداف الأسواق",
        },
        {
          step: "02",
          name: "التسويق الاستراتيجي",
          role: "يصنع الحضور ويستقطب رأس المال",
          feeds: "يولد تدفقات الطلب المؤسسي على الأصول والخدمات",
        },
        {
          step: "03",
          name: "العقارات الذكية",
          role: "توفر الأصول المادية والمراكز المكانية",
          feeds: "تحتضن البنى التحتية ومحطات الإمداد اللوجستي",
        },
        {
          step: "04",
          name: "سلاسل الإمداد",
          role: "تضمن سرعة التدفق والتنفيذ الميداني",
          feeds: "تولد بيانات تشغيلية ضخمة تعيد تغذية وتدريب الذكاء الإدراكي",
        },
      ]
    },
    en: {
      vision_badge: "Strategic National Alignment • Saudi Vision 2030",
      vision_title: "Empowering National Transformation with",
      vision_highlight: "Cognitive Intelligence & Advanced Assets",
      vision_desc: "The Logarithm Matrix harmonizes at its core with the pillars of Saudi Vision 2030; converting algorithmic innovation into an active engine expanding non-oil GDP, developing smart spatial assets, and anchoring digital sovereignty.",
      pillars: [
        {
          title: "Digital Sovereignty & Cognitive AI",
          goal: "Supporting the National Strategy for Data & AI (SDAIA)",
          desc: "Localizing cognitive infrastructure and sovereign data modeling to lead the knowledge economy.",
          icon: Cpu,
          accent: "#00F2FE",
        },
        {
          title: "Spatial Assets & Future Urbanization",
          goal: "Aligning with Giga-Projects & Sustainable Urban Development",
          desc: "Re-engineering real estate value through spatial analytics and continuous algorithmic valuation.",
          icon: Building2,
          accent: "#05D5B2",
        },
        {
          title: "Digital Economy & Enterprise Scale",
          goal: "Expanding Private Sector GDP & Global Footprint",
          desc: "Sculpting internationally competitive Saudi enterprise brands fueled by algorithmic marketing.",
          icon: TrendingUp,
          accent: "#B829E3",
        },
        {
          title: "Global Logistics Hub Fulfillment",
          goal: "Enabling the National Transport and Logistics Strategy",
          desc: "Synchronizing regional supply flows with intelligent systems ensuring peak operational velocity.",
          icon: Truck,
          accent: "#F59E0B",
        },
      ],
      synergy_badge: "Neural Closed-Loop Geometry",
      synergy_title: "Algorithmic Matrix Synergy",
      synergy_subtitle: "Our verticals do not operate as isolated silos, but as an interconnected mathematical continuum where each pillar compounds the value of the next.",
      loop_steps: [
        {
          step: "01",
          name: "Cognitive Systems",
          role: "Pumps reasoning algorithms & inference models",
          feeds: "Guides PropTech valuations and marketing vector targeting",
        },
        {
          step: "02",
          name: "Algorithmic Growth",
          role: "Crafts market resonance & capital pipelines",
          feeds: "Generates institutional demand for assets and services",
        },
        {
          step: "03",
          name: "Smart PropTech",
          role: "Secures high-yield spatial assets & physical hubs",
          feeds: "Houses infrastructure and connected logistics nodes",
        },
        {
          step: "04",
          name: "Smart Logistics",
          role: "Executes frictionless operational velocity",
          feeds: "Streams live telemetry data back to retrain cognitive models",
        },
      ]
    }
  };

  const t = content[lang];

  return (
    <div id="vision" className="space-y-32 py-20 px-6 lg:px-12 relative z-10 border-t border-white/5">
      
      {/* 1. قسم مواءمة رؤية السعودية 2030 */}
      <section className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md mb-6 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-emerald-400 tracking-wide">
              {t.vision_badge}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
            {t.vision_title}{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-[#00F2FE] to-[#B829E3] bg-clip-text text-transparent">
              {t.vision_highlight}
            </span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed text-balance">
            {t.vision_desc}
          </p>
        </div>

        {/* شبكة ركائز الرؤية الأربعة */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl glass-panel hover:border-white/20 transition-all duration-300 relative overflow-hidden group"
              >
                <div 
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[70px] pointer-events-none opacity-15 transition-opacity group-hover:opacity-30"
                  style={{ backgroundColor: pillar.accent }}
                />

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" style={{ color: pillar.accent }} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-emerald-400 block mb-1">
                      {pillar.goal}
                    </span>
                    <h3 className="text-xl font-bold text-white leading-snug">
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed pl-16">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 2. قسم التكامل الخوارزمي للمصفوفة (Neural Synergy Loop) */}
      <section className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md mb-6">
            <Repeat className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: "12s" }} />
            <span className="text-xs font-mono text-cyan-400 tracking-wide">
              {t.synergy_badge}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
            {t.synergy_title}
          </h2>

          <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed text-balance">
            {t.synergy_subtitle}
          </p>
        </div>

        {/* خطوات الحلقة الخوارزمية المتكاملة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.loop_steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div className="mb-6">
                <span className="text-2xl font-mono font-black text-cyan-400/40 group-hover:text-cyan-400 transition-colors block mb-3">
                  {step.step}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  {step.name}
                </h3>
                <p className="text-xs text-gray-300 font-medium leading-relaxed mb-4">
                  {step.role}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <span className="text-[10px] font-mono text-gray-400 block mb-1">
                  {isAr ? "التأثير التكاملي على المصفوفة:" : "Compounding Feedback:"}
                </span>
                <p className="text-[11px] text-emerald-400 font-light leading-relaxed">
                  {step.feeds}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}