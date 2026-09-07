"use client";

import React, { useState } from "react";
import { 
  X, 
  ArrowUpLeft, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Activity,
  Send
} from "lucide-react";
import { 
  CognitiveNexusIcon, 
  AlgorithmicGrowthIcon, 
  SpatialMonolithIcon, 
  KineticFlowIcon 
} from "./BespokeIcons";

export type SectorId = "cognitive" | "marketing" | "proptech" | "logistics";

interface SectorDeepDiveDrawerProps {
  sectorId: SectorId | null;
  onClose: () => void;
  lang: "ar" | "en";
}

export default function SectorDeepDiveDrawer({ sectorId, onClose, lang }: SectorDeepDiveDrawerProps) {
  const isAr = lang === "ar";
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", organization: "", email: "", intent: "investment" });

  if (!sectorId) return null;

  const ArrowIcon = isAr ? ArrowUpLeft : ArrowUpRight;

  const data = {
    cognitive: {
      title: isAr ? "الأنظمة الإدراكية وهندسة البيانات" : "Cognitive Intelligence & Data Systems",
      subtitle: isAr ? "العقل المدبر للمصفوفة" : "The Matrix Intellectual Engine",
      icon: CognitiveNexusIcon,
      gradient: "from-cyan-500 to-blue-600",
      accent: "#00F2FE",
      thesis: isAr 
        ? "ليس الذكاء لدينا محاكاة للآلة، بل هندسةٌ للبصيرة. نُشيّد بنى تحتية تفكّر، وتستنتج، وتحوّل تدفقات البيانات الصامتة إلى قرارات استثمارية وتشغيلية حاسمة."
        : "Intelligence is not our imitation of the machine, but the architecture of discernment. We engineer cognitive infrastructures that reason, infer, and transmute silent data streams into decisive capital trajectories.",
      capabilities: isAr 
        ? [
            { title: "نمذجة الاستنتاج التكيفي", desc: "تطوير نماذج تفكير استنتاجي مستقلة تعالج القرارات المعقدة في أجزاء من الثانية." },
            { title: "أمن وحوسبة السيادة البيانية", desc: "بيئات معزولة تشفر الأصول المعرفية للمؤسسات وتضمن أمان البيانات الصارم." },
            { title: "الأتمتة الإدراكية للبنى التحتية", desc: "إعادة تشكيل تدفقات العمل المؤسسية عبر وكلاء أذكياء يتفاعلون ذاتياً." },
          ]
        : [
            { title: "Adaptive Deep-Inference", desc: "Autonomous reasoning architectures resolving complex enterprise vectors in real time." },
            { title: "Sovereign Data Enclaves", desc: "Hardware-isolated environments safeguarding intellectual capital and enterprise data privacy." },
            { title: "Cognitive Infrastructure Automation", desc: "Re-engineering enterprise operational workflows via self-orchestrating intelligent agents." },
          ],
      metric: { label: isAr ? "دقة الاستنتاج التنبؤي" : "Inference Precision", value: "99.8%" },
    },
    marketing: {
      title: isAr ? "التسويق الاستراتيجي ومحركات النمو" : "Algorithmic Growth & Brand Architecture",
      subtitle: isAr ? "هندسة الحضور الرقمي عالي القيمة" : "Predictive Brand Architecture",
      icon: AlgorithmicGrowthIcon,
      gradient: "from-purple-500 to-pink-600",
      accent: "#B829E3",
      thesis: isAr
        ? "تجاوزنا الحملات العابرة إلى بناء محركات حتمية للنمو؛ نقرأ الأنماط السلوكية قبل تشكلها، وننسج حضوراً مؤسسياً راسخاً يرفع القيمة السوقية للعلامات."
        : "Transcending transient campaigns into the construction of deterministic growth engines. We decode behavioral patterns before they emerge, cultivating indelible enterprise resonance.",
      capabilities: isAr
        ? [
            { title: "النمذجة التنبؤية للأسواق", desc: "استقراء رغبات وسلوكيات الجمهور المستهدف عبر خوارزميات إدراكية متقدمة." },
            { title: "هندسة الهويات ذات القيمة العالية", desc: "بناء سمعة مؤسسية رفيعة تتوافق مع تطلعات المستثمرين والشركاء النخبويين." },
            { title: "مسارات التحويل الخوارزمية", desc: "أتمتة خطوط الاستحواذ على العملاء والشركاء بنسب تحويل تتجاوز المعايير التقليدية." },
          ]
        : [
            { title: "Predictive Behavioral Modeling", desc: "Forecasting consumer sentiment and market shifts prior to consensus emergence." },
            { title: "High-Resonance Brand Architecture", desc: "Crafting institutional prestige that commands valuation premiums in institutional markets." },
            { title: "Algorithmic Pipeline Velocity", desc: "Automating high-conversion acquisition vectors tailored for institutional scale." },
          ],
      metric: { label: isAr ? "مضاعفة العائد التسويقي" : "Conversion Multiplier", value: "3.8x" },
    },
    proptech: {
      title: isAr ? "العقارات الذكية وتكنولوجيا التطوير" : "Intelligent PropTech & Spatial Assets",
      subtitle: isAr ? "إعادة ابتكار الأصول المكانية" : "Autonomous Spatial Asset Matrix",
      icon: SpatialMonolithIcon,
      gradient: "from-emerald-400 to-teal-600",
      accent: "#05D5B2",
      thesis: isAr
        ? "نعيد تعريف الأصل العقاري من كونه حيزاً ساكناً إلى منظومة ديناميكية متصلة؛ ندمج الذكاء المكاني بنماذج التقييم الفوري لاقتناص الفرص وتعظيم العائد الرأسمالي."
        : "Redefining real estate from static space into dynamic, interconnected assets. By synthesizing spatial analytics with real-time algorithmic valuation, we cultivate asymmetric capital yields.",
      capabilities: isAr
        ? [
            { title: "التقييم الخوارزمي اللحظي", desc: "محركات تقييم فوري تقرأ نبض السوق والمؤشرات الاقتصادية بدقة متناهية." },
            { title: "الذكاء المكاني وتحليل التدفقات", desc: "رسم خرائط حرارية لحركة رأس المال والنمو السكاني لاختيار المواقع الاستراتيجية." },
            { title: "التوأمة الرقمية للأصول", desc: "محاكاة افتراضية حية للمشاريع العقارية لتحسين كفاءة التشغيل وخفض التكاليف." },
          ]
        : [
            { title: "Continuous Algorithmic Valuation", desc: "Real-time pricing engines decoding macro signals and micro-market liquidity." },
            { title: "Spatial Demographic Intelligence", desc: "Predictive spatial mapping isolating high-yield urban corridors and capital flows." },
            { title: "Digital-Twin Asset Optimization", desc: "Dynamic virtualization of physical assets to streamline energy, yield, and lifecycle management." },
          ],
      metric: { label: isAr ? "كفاءة العائد الخوارزمي" : "Capital Efficiency Alpha", value: "+34%" },
    },
    logistics: {
      title: isAr ? "سلاسل الإمداد والخدمات المتكاملة" : "Synchronized Logistics & Flow Systems",
      subtitle: isAr ? "التدفق المؤسسي بلا انقطاع" : "Mission-Critical Supply Chains",
      icon: KineticFlowIcon,
      gradient: "from-amber-400 to-orange-600",
      accent: "#F59E0B",
      thesis: isAr
        ? "اللوجستيات لدينا هي حركةٌ متناغمة بلا هدر؛ ندير شبكات التوريد والعمليات المساندة بخوارزميات ترسم المسار الأمثل وتضمن استدامة التدفق المؤسسي بثقة مطلقة."
        : "Logistics as frictionless kinetic harmony. We orchestrate global supply networks and mission-critical support services through algorithms that optimize flow, ensuring relentless velocity.",
      capabilities: isAr
        ? [
            { title: "التوجيه الذكي ومحاكاة الطلب", desc: "خوارزميات حية للتنبؤ باحتياجات المخزون وإعادة توجيه المسارات لتفادي أي اختناقات." },
            { title: "مواءمة العمليات والخدمات المساندة", desc: "حلول تشغيلية شاملة ترفع كفاءة الأعمال المؤسسية وتقلل الهدر الزمني." },
            { title: "الربط الشبكي وإدارة الأساطيل", desc: "تنسيق متكامل لمنظومة النقل والتوزيع مدعوم بالبيانات اللحظية على مدار الساعة." },
          ]
        : [
            { title: "Dynamic Flow & Demand Forecasting", desc: "Live dispatch algorithms anticipating bottleneck formations and inventory latency." },
            { title: "Integrated Operational Synergy", desc: "Full-spectrum enterprise operational management mitigating friction across supply nodes." },
            { title: "Autonomous Fleet Orchestration", desc: "24/7 telemetry-synchronized logistics infrastructure delivering unparalleled precision." },
          ],
      metric: { label: isAr ? "تقليص زمن الاستجابة" : "Throughput Latency", value: "-42%" },
    },
  }[sectorId];

  const IconComp = data.icon;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-[#060813]/90 backdrop-blur-2xl transition-opacity animate-in fade-in duration-300"
      />

      <div 
        className="relative w-full max-w-6xl max-h-[92vh] bg-[#090D1E] border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 overflow-y-auto shadow-[0_0_80px_rgba(0,0,0,0.8)] z-10 animate-in zoom-in-95 duration-300"
        dir={isAr ? "rtl" : "ltr"}
      >
        <div 
          className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-[140px] pointer-events-none opacity-20"
          style={{ backgroundColor: data.accent }}
        />

        {/* 1. رأس الكونسول (Header) مع الأيقونة المبتكرة الموحدة */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8 relative z-10">
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${data.gradient} p-0.5 shadow-xl`}>
              <div className="w-full h-full bg-[#060813] rounded-[14px] flex items-center justify-center text-white">
                <IconComp className="w-7 h-7 text-white" />
              </div>
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-gray-400 block mb-0.5">
                {data.subtitle}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {data.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-3 rounded-2xl border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* 2. الهيكل الداخلي المنظم */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md relative overflow-hidden">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 block mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isAr ? "الميثاق والرؤية الاستراتيجية" : "Strategic Mandate"}</span>
              </span>
              <p className="text-sm sm:text-base text-gray-200 font-light leading-relaxed">
                {data.thesis}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>{isAr ? "القدرات والركائز التشغيلية" : "Core Operational Vectors"}</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {data.capabilities.map((cap, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 rounded-xl bg-slate-900/40 border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="w-2 h-2 rounded-full mb-2.5 block" style={{ backgroundColor: data.accent }} />
                      <h5 className="text-xs font-bold text-white mb-1.5 leading-snug">
                        {cap.title}
                      </h5>
                    </div>
                    <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-white/10 bg-gradient-to-r from-slate-900/80 to-[#060813] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <span className="text-xs font-mono text-gray-400 block">
                    {isAr ? "مؤشر الأداء والقيمة المضافة" : "Performance Benchmark"}
                  </span>
                  <span className="text-xs font-medium text-gray-200">{data.metric.label}</span>
                </div>
              </div>
              <span className="text-3xl font-mono font-black" style={{ color: data.accent }}>
                {data.metric.value}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-slate-950/70 border border-white/10 backdrop-blur-xl">
            {formSubmitted ? (
              <div className="my-auto p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center animate-in zoom-in-95">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                <h5 className="text-base font-bold text-white mb-2">
                  {isAr ? "تم تسجيل طلب الشراكة بنجاح" : "Partnership Request Registered"}
                </h5>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  {isAr 
                    ? "سيتواصل معك الفريق الاستشاري لمصفوفة لوغاريتم لبحث فرص التعاون والاستثمار المشترك."
                    : "The Logarithm advisory matrix will contact you to evaluate strategic alignment."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                    <Send className="w-4 h-4 text-cyan-400" />
                    <span>{isAr ? "طلب شراكة أو استثمار استراتيجي" : "Initiate Strategic Partnership"}</span>
                  </h4>
                  <p className="text-[11px] text-gray-400 font-light">
                    {isAr ? "تواصل مباشر مع قيادة هذا الذراع لبحث الفرص المؤسسية." : "Direct communication with the pillar leadership."}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="text-[11px] font-mono text-gray-400 mb-1 block">
                      {isAr ? "الاسم الكامل" : "Full Name"}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isAr ? "سعادة / الأستاذ..." : "Your name..."}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-900/90 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-gray-400 mb-1 block">
                      {isAr ? "الجهة / المؤسسة" : "Organization"}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isAr ? "اسم الشركة أو الصندوق..." : "Company or Fund name..."}
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full bg-slate-900/90 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-gray-400 mb-1 block">
                      {isAr ? "البريد المؤسسي الرسمي" : "Corporate Email"}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-900/90 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-3 rounded-xl font-bold text-xs text-slate-950 flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(0,242,254,0.4)] transition-all cursor-pointer"
                  style={{ backgroundColor: data.accent }}
                >
                  <span>{isAr ? "إرسال طلب الاستثمار والشراكة" : "Submit Strategic Inquiry"}</span>
                  <ArrowIcon className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}