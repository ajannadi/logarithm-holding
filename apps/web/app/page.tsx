"use client";

import React, { useState, useEffect } from "react";
import { 
  Sparkles, 
  ArrowUpLeft, 
  ArrowUpRight, 
  Globe, 
  Terminal, 
  Bot 
} from "lucide-react";
import AIConciergeModal from "../components/AIConciergeModal";
import SectorDeepDiveDrawer, { SectorId } from "../components/SectorDeepDiveDrawer";
import CognitiveMatrixCanvas from "../components/CognitiveMatrixCanvas";
import Vision2030Section from "../components/Vision2030Section";
import InstitutionalModal, { ModalType } from "../components/InstitutionalModal";
import CorporateFooter from "../components/CorporateFooter";
import { 
  CognitiveNexusIcon, 
  AlgorithmicGrowthIcon, 
  SpatialMonolithIcon, 
  KineticFlowIcon 
} from "../components/BespokeIcons";

export default function LogarithmPlatform() {
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  const [selectedSector, setSelectedSector] = useState<SectorId | null>(null);
  const [institutionalModal, setInstitutionalModal] = useState<ModalType>(null);
  const isAr = lang === "ar";

  const validSectors: SectorId[] = ["cognitive", "marketing", "proptech", "logistics"];

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") as SectorId;
      if (validSectors.includes(hash)) {
        setSelectedSector(hash);
      } else {
        setSelectedSector(null);
      }
    };

    handleHashChange();
    window.addEventListener("popstate", handleHashChange);
    return () => window.removeEventListener("popstate", handleHashChange);
  }, []);

  const handleOpenSector = (sectorId: SectorId) => {
    setSelectedSector(sectorId);
    window.history.pushState({ sector: sectorId }, "", `#${sectorId}`);
  };

  const handleCloseSector = () => {
    setSelectedSector(null);
    if (window.location.hash) {
      window.history.pushState(null, "", window.location.pathname);
    }
  };

  const content = {
    ar: {
      nav: {
        sectors: "مصفوفة لوغاريتم",
        vision: "رؤية 2030 والتكامل",
        about: "عن لوغاريتم",
        contact: "المستثمرين",
        aiAgent: "المساعد الإدراكي",
      },
      hero: {
        badge: "لوغاريتم • مصفوفة الوعي وأفق المستقبل",
        binary: "1101010 • 000100",
        title_start: "تأصيل مسارات النمو",
        title_highlight: "قيمةٌ وأثر",
        subtitle: "مصفوفة استثمارية متقدمة تقود التحول المؤسسي عبر 4 قطاعات استراتيجية: الأنظمة الإدراكية، محركات النمو التسويقي، التطوير العقاري الذكي، والخدمات اللوجستية المتكاملة.",
        cta_explore: "استكشف أذرع المصفوفة",
        cta_consult: "استشر مساعد لوغاريتم الإدراكي",
      },
      sectors_title: "مصفوفة لوغاريتم",
      sectors_subtitle: "بُنية مترابطة يقودها محرك الوعي الإدراكي لتعظيم القيمة التشغيلية وتوليد العوائد المستدامة",
      sectors: [
        {
          id: "cognitive" as SectorId,
          title: "الأنظمة الإدراكية وهندسة البيانات",
          subtitle: "Cognitive Systems & Data Intelligence",
          desc: "العقل المدبر للمصفوفة: تطوير خوارزميات الاستنتاج العميق، أتمتة البنى التحتية، ونمذجة البيانات الضخمة المستقلة.",
          icon: CognitiveNexusIcon,
          tag: "جوهرة المصفوفة",
          gradient: "from-cyan-500 to-blue-600",
          stats: "+99.8% دقة الاستنتاج",
          action: "النفاذ الإدراكي",
        },
        {
          id: "marketing" as SectorId,
          title: "التسويق الاستراتيجي ومحركات النمو",
          subtitle: "Algorithmic Growth & Brand Architecture",
          desc: "هندسة الهويات المؤسسية وبناء مسارات النمو الرقمي بالاعتماد الكامل على الرؤى السلوكية التنبؤية.",
          icon: AlgorithmicGrowthIcon,
          tag: "توسع رقمي",
          gradient: "from-purple-500 to-pink-600",
          stats: "أداء موجه بالبيانات",
          action: "استقراء النمو",
        },
        {
          id: "proptech" as SectorId,
          title: "العقارات الذكية وتكنولوجيا التطوير",
          subtitle: "Smart PropTech & Development",
          desc: "إعادة ابتكار التطوير والاستثمار العقاري عبر التحليلات المكانية ونماذج التقييم الخوارزمية الفورية.",
          icon: SpatialMonolithIcon,
          tag: "أصول ذكية",
          gradient: "from-emerald-400 to-teal-600",
          stats: "استثمارات مؤتمتة",
          action: "سَبْرُ الأصول",
        },
        {
          id: "logistics" as SectorId,
          title: "سلاسل الإمداد والخدمات اللوجستية المتكاملة",
          subtitle: "Smart Logistics & Integrated Operations",
          desc: "إدارة تدفقات العمليات اللوجستية والخدمات المساندة بحلول تقنية تضمن سلاسة وسرعة التوريد المؤسسي.",
          icon: KineticFlowIcon,
          tag: "كفاءة تشغيلية",
          gradient: "from-amber-400 to-orange-600",
          stats: "ربط شبكي ذكي",
          action: "مواءمة التدفق",
        },
      ],
    },
    en: {
      nav: {
        sectors: "The Logarithm Matrix",
        vision: "Vision 2030 & Synergy",
        about: "About Us",
        contact: "Investors",
        aiAgent: "Cognitive Concierge",
      },
      hero: {
        badge: "Logarithm • The Cognitive Matrix & Unfolding Horizons",
        binary: "1101010 • 000100",
        title_start: "Cultivating Enduring Growth",
        title_highlight: "Defining Capital & Impact",
        subtitle: "An advanced investment matrix cultivating institutional resilience across four strategic domains: Cognitive Intelligence, Algorithmic Growth, Autonomous PropTech, and Synchronized Logistics.",
        cta_explore: "Explore Matrix Pillars",
        cta_consult: "Consult Cognitive Concierge",
      },
      sectors_title: "The Logarithm Matrix",
      sectors_subtitle: "A synchronized ecosystem guided by cognitive awareness, transmuting insight into enduring capital.",
      sectors: [
        {
          id: "cognitive" as SectorId,
          title: "Cognitive Intelligence & Data Systems",
          subtitle: "The Intellectual Engine",
          desc: "The intellectual core: engineering deep-inference algorithms, autonomous infrastructures, and sovereign data modeling.",
          icon: CognitiveNexusIcon,
          tag: "Crown Jewel",
          gradient: "from-cyan-500 to-blue-600",
          stats: "99.8% Inference Precision",
          action: "Cognitive Access",
        },
        {
          id: "marketing" as SectorId,
          title: "Algorithmic Growth & Brand Architecture",
          subtitle: "Predictive Market Presence",
          desc: "Sculpting enterprise resonance and driving high-conversion trajectories through predictive behavioral analytics.",
          icon: AlgorithmicGrowthIcon,
          tag: "Digital Scale",
          gradient: "from-purple-500 to-pink-600",
          stats: "High Conversion",
          action: "Infer Growth",
        },
        {
          id: "proptech" as SectorId,
          title: "Intelligent PropTech & Development",
          subtitle: "Next-Gen Asset Matrix",
          desc: "Transforming real estate investment through spatial intelligence and continuous algorithmic valuation models.",
          icon: SpatialMonolithIcon,
          tag: "Smart Assets",
          gradient: "from-emerald-400 to-teal-600",
          stats: "Algorithmic Yields",
          action: "Probe Assets",
        },
        {
          id: "logistics" as SectorId,
          title: "Smart Logistics & Integrated Operations",
          subtitle: "Mission-Critical Supply Chains",
          desc: "Synchronizing global supply streams and operational support services with agile technologies that ensure institutional velocity.",
          icon: KineticFlowIcon,
          tag: "Operational Scale",
          gradient: "from-amber-400 to-orange-600",
          stats: "Connected Networks",
          action: "Synchronize Flow",
        },
      ],
    }
  };

  const t = content[lang];
  const ArrowIcon = isAr ? ArrowUpLeft : ArrowUpRight;

  return (
    <div className={`min-h-screen bg-[#060813] text-slate-100 selection:bg-[#00F2FE] selection:text-black ${isAr ? "rtl font-sans" : "ltr font-sans"}`} dir={isAr ? "rtl" : "ltr"}>
      
      {/* 1. القائمة العلوية الفاخرة */}
      <nav className="fixed top-0 inset-x-0 z-40 bg-[#060813]/80 backdrop-blur-xl border-b border-white/5 px-6 lg:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#00F2FE] via-[#7928CA] to-[#B829E3] p-[2px] shadow-[0_0_20px_rgba(0,242,254,0.3)]">
              <div className="w-full h-full bg-[#060813] rounded-[10px] flex items-center justify-center font-black text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FE] to-[#B829E3]">
                L
              </div>
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white block leading-tight">Logarithm</span>
              <span className="text-[10px] text-gray-400 tracking-widest uppercase block">{isAr ? "لوغاريتم" : "Cognitive Matrix"}</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#sectors" className="hover:text-[#00F2FE] transition-colors">{t.nav.sectors}</a>
            <a href="#vision" className="hover:text-[#00F2FE] transition-colors">{t.nav.vision}</a>
            <button onClick={() => setInstitutionalModal("about")} className="hover:text-[#00F2FE] transition-colors cursor-pointer">{t.nav.about}</button>
            <button onClick={() => setInstitutionalModal("contact")} className="hover:text-[#00F2FE] transition-colors cursor-pointer">{t.nav.contact}</button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(isAr ? "en" : "ar")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-medium text-gray-300 transition-all cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-[#00F2FE]" />
              <span>{isAr ? "English" : "العربية"}</span>
            </button>

            <button 
              onClick={() => setIsAIModalOpen(true)}
              className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-gradient-to-r from-[#00F2FE] to-[#05D5B2] text-slate-950 font-bold text-xs hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] transition-all cursor-pointer"
            >
              <Bot className="w-4 h-4" />
              <span className="hidden sm:inline">{t.nav.aiAgent}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* 2. مقطع الهيرو السينمائي */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
        <CognitiveMatrixCanvas />

        <div className="max-w-6xl mx-auto text-center relative z-10 pointer-events-none">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#00F2FE]/30 bg-[#0F172A]/70 backdrop-blur-md mb-8 shadow-inner pointer-events-auto">
            <span className="w-2 h-2 rounded-full bg-[#05D5B2] animate-ping" />
            <span className="text-xs md:text-sm font-mono text-[#00F2FE] tracking-wide">
              {t.hero.badge}
            </span>
            <span className="text-[11px] font-mono text-gray-500 border-x border-gray-700 px-2">
              {t.hero.binary}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.2] mb-8 max-w-5xl mx-auto tracking-tight">
            <span>{t.hero.title_start}</span>
            <span className="block mt-3 bg-gradient-to-r from-[#00F2FE] via-[#05D5B2] to-[#B829E3] bg-clip-text text-transparent drop-shadow-sm">
              {t.hero.title_highlight}
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-xl text-gray-300 font-light leading-relaxed mb-12 text-balance">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
            <a
              href="#sectors"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#00F2FE] to-[#05D5B2] text-slate-950 font-bold text-sm hover:shadow-[0_0_30px_rgba(0,242,254,0.4)] transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <span>{t.hero.cta_explore}</span>
              <ArrowIcon className="w-4 h-4" />
            </a>

            <button
              onClick={() => setIsAIModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-sm backdrop-blur-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#B829E3]" />
              <span>{t.hero.cta_consult}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. شبكة قطاعات مصفوفة لوغاريتم */}
      <section id="sectors" className="py-24 px-6 lg:px-12 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
              {t.sectors_title}
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              {t.sectors_subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.sectors.map((sector) => {
              const IconComp = sector.icon;
              return (
                <div
                  key={sector.id}
                  onClick={() => handleOpenSector(sector.id)}
                  className="group relative p-8 rounded-2xl glass-panel glass-panel-hover transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${sector.gradient} p-0.5 shadow-xl group-hover:scale-105 transition-transform duration-300`}>
                        <div className="w-full h-full bg-[#060813] rounded-[14px] flex items-center justify-center text-white">
                          <IconComp className="w-7 h-7 text-white" />
                        </div>
                      </div>
                      <span className="text-xs font-mono px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300">
                        {sector.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#00F2FE] transition-colors">
                      {sector.title}
                    </h3>
                    <p className="text-xs text-gray-500 font-mono mb-4 tracking-wider">
                      {sector.subtitle}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">
                      {sector.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#05D5B2]">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>{sector.stats}</span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-[#00F2FE] transition-colors">
                      <span>{sector.action}</span>
                      <ArrowIcon className="w-4 h-4 transform group-hover:translate-x-[-2px] transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. قسم مواءمة رؤية السعودية 2030 والتكامل الخوارزمي */}
      <Vision2030Section lang={lang} />

      {/* 5. تذييل الصفحة المؤسسي الموسع (Mega-Footer) */}
      <CorporateFooter onOpenModal={(type) => setInstitutionalModal(type)} lang={lang} />

      {/* 6. المساعد الإدراكي */}
      <AIConciergeModal 
        isOpen={isAIModalOpen} 
        onClose={() => setIsAIModalOpen(false)} 
        lang={lang} 
      />

      {/* 7. كونسول القطاعات الاستثماري */}
      <SectorDeepDiveDrawer
        sectorId={selectedSector}
        onClose={handleCloseSector}
        lang={lang}
      />

      {/* 8. النوافذ المؤسسية (عن لوغاريتم / الحوكمة / تواصل معنا) */}
      <InstitutionalModal
        type={institutionalModal}
        onClose={() => setInstitutionalModal(null)}
        lang={lang}
      />
    </div>
  );
}