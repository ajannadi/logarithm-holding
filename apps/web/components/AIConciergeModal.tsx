"use client";

import React, { useState, useRef, useEffect } from "react";
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  Building2, 
  TrendingUp, 
  Truck,
  CornerDownLeft,
  RotateCcw
} from "lucide-react";

interface AIConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: "ar" | "en";
}

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
}

export default function AIConciergeModal({ isOpen, onClose, lang }: AIConciergeModalProps) {
  const isAr = lang === "ar";
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialGreeting = isAr
    ? "مرحباً بك في لوغاريتم. أنا مساعدك الرقمي المدعوم بالذكاء الاصطناعي الإدراكي. كيف يمكنني إرشادك اليوم بشأن قطاعاتنا أو فرص الاستثمار والشراكة؟"
    : "Welcome to Logarithm. I am your Cognitive AI Concierge. How may I assist you today regarding our business units, investment opportunities, or partnerships?";

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "ai",
      text: initialGreeting,
      timestamp: "الآن",
    },
  ]);

  const quickPrompts = isAr
    ? [
        { label: "حلول الذكاء الاصطناعي", query: "ما هي حلول الذكاء الاصطناعي وهندسة البيانات لديكم؟", icon: Cpu },
        { label: "الاستثمار العقاري الذكي", query: "كيف تعيد لوغاريتم ابتكار التطوير العقاري عبر PropTech؟", icon: Building2 },
        { label: "محركات النمو والتسويق", query: "ما هي آلية التسويق الخوارزمي وصناعة الهويات؟", icon: TrendingUp },
        { label: "الخدمات اللوجستية", query: "كيف تدار سلاسل الإمداد والخدمات اللوجستية الذكية؟", icon: Truck },
      ]
    : [
        { label: "Cognitive AI Solutions", query: "What are your core AI & data engineering capabilities?", icon: Cpu },
        { label: "Smart PropTech Assets", query: "How does Logarithm revolutionize PropTech and Real Estate?", icon: Building2 },
        { label: "Algorithmic Growth", query: "Explain your data-driven marketing and growth engines.", icon: TrendingUp },
        { label: "Smart Logistics", query: "What are your integrated supply chain solutions?", icon: Truck },
      ];

  // التمرير التلقائي لأسفل المحادثة
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  if (!isOpen) return null;

  const handleSendMessage = (textToSend?: string) => {
    const queryText = textToSend || input;
    if (!queryText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: queryText,
      timestamp: "الآن",
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput("");
    setIsTyping(true);

    // محاكاة استجابة ذكية ومؤطرة (Knowledge-Grounded Response)
    setTimeout(() => {
      let reply = "";
      const lower = queryText.toLowerCase();

      if (queryText.includes("الذكاء الاصطناعي") || lower.includes("ai")) {
        reply = isAr 
          ? "ذراع الذكاء الاصطناعي في لوغاريتم يمثل العقل المدبر؛ نقوم ببناء خوارزميات التعلم العميق، نمذجة البيانات السيادية، وأتمتة اتخاذ القرارات المؤسسية بدقة تتجاوز 99%."
          : "Logarithm's Cognitive AI unit is our intellectual engine: engineering deep-learning architectures, sovereign data models, and enterprise automation with 99%+ precision.";
      } else if (queryText.includes("عقار") || lower.includes("proptech") || lower.includes("real estate")) {
        reply = isAr
          ? "قطاع العقارات الذكية (PropTech) يدمج خوارزميات التقييم المالي الفوري والبيانات المكانية الجغرافية لاقتناص وإدارة الأصول العقارية بأعلى عائد استثماري."
          : "Our Smart PropTech vertical synergizes spatial intelligence with instant algorithmic valuation models to maximize capital yield in real estate assets.";
      } else if (queryText.includes("تسويق") || lower.includes("marketing") || lower.includes("growth")) {
        reply = isAr
          ? "نحن لا نقدم تسويقاً تقليدياً، بل 'محركات نمو خوارزمية' تعتمد على النماذج التنبؤية لسلوك المستهلك وهندسة الهويات ذات القيمة العالية."
          : "We provide algorithmic growth engines driven by predictive behavioral analytics, ensuring hyper-targeted conversion and premium brand architecture.";
      } else if (queryText.includes("لوجستي") || lower.includes("إمداد") || lower.includes("logistics")) {
        reply = isAr
          ? "ذراع اللوجستيات يوفر إدارة ذكية ومترابطة لسلاسل الإمداد والخدمات المساندة لضمان كفاءة التدفقات وسرعة التوريد المؤسسي بأقل تكلفة تشغيلية."
          : "Our Smart Logistics unit orchestrates intelligent supply chain flows and operational services, ensuring maximum throughput and minimal overhead.";
      } else {
        reply = isAr
          ? "شكراً لتواصلك مع لوغاريتم. بصفتي مساعداً مؤطراً ببيانات الشركة، يسعدني توجيهك للمسؤول المختص أو يمكنك ترك بياناتك لطلب استشارة أو شراكة استثمارية مباشرة."
          : "Thank you for inquiring. As a grounded corporate assistant, I can direct you to the dedicated investment team or log your inquiry for direct consultation.";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "ai",
          text: reply,
          timestamp: "الآن",
        },
      ]);
      setIsTyping(false);
    }, 1100);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* خلفية معتمة بصرية */}
      <div 
        onClick={onClose} 
        className="absolute inset-0 bg-[#060813]/85 backdrop-blur-xl transition-opacity animate-in fade-in duration-300"
      />

      {/* لوحة الكونسيرج الرئيسية */}
      <div className="relative w-full max-w-2xl bg-[#090D1E] border border-cyan-500/25 rounded-3xl shadow-[0_0_50px_rgba(0,242,254,0.15)] flex flex-col h-[650px] max-h-[90vh] overflow-hidden z-10 animate-in zoom-in-95 duration-300">
        
        {/* شريط الرأس (Header) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#060813]/90">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00F2FE] via-[#7928CA] to-[#B829E3] p-[2px] shadow-[0_0_15px_rgba(0,242,254,0.4)]">
              <div className="w-full h-full bg-[#060813] rounded-[9px] flex items-center justify-center">
                <Bot className="w-5 h-5 text-[#00F2FE]" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-white tracking-wide">
                  {isAr ? "مساعد لوغاريتم الإدراكي" : "Logarithm AI Concierge"}
                </h3>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <p className="text-[11px] text-gray-400 font-mono">
                {isAr ? "نظام استشاري مؤطر ومعتمد" : "Grounded Institutional Intelligence"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setMessages([{ id: "1", sender: "ai", text: initialGreeting, timestamp: "الآن" }])}
              title={isAr ? "إعادة تعيين المحادثة" : "Reset Conversation"}
              className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* جسم المحادثة والرسائل (Chat Body) */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 cyber-circuit-bg">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                msg.sender === "user" 
                  ? "bg-[#7928CA]/30 border border-[#7928CA]/50 text-white" 
                  : "bg-[#00F2FE]/10 border border-[#00F2FE]/30 text-[#00F2FE]"
              }`}>
                {msg.sender === "user" ? <Sparkles className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                msg.sender === "user"
                  ? "bg-gradient-to-r from-[#7928CA] to-[#9B51E0] text-white rounded-tr-none shadow-md"
                  : "bg-slate-900/90 border border-white/10 text-gray-200 rounded-tl-none backdrop-blur-md shadow-sm"
              }`}>
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#00F2FE]/10 border border-[#00F2FE]/30 text-[#00F2FE] flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-slate-900/90 border border-white/10 rounded-2xl px-4 py-3 rounded-tl-none flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE] animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE] animate-bounce delay-150" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE] animate-bounce delay-300" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

       {/* الأسئلة السريعة المقترحة (Quick Prompts) */}
        <div className="px-6 py-2 bg-[#060813]/60 border-t border-white/5 flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {quickPrompts.map((p, idx) => {
            const Icon = p.icon;
            return (
              <button
                key={idx}
                onClick={() => handleSendMessage(p.query)}
                className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:border-[#00F2FE]/50 hover:bg-[#00F2FE]/10 text-xs text-gray-300 hover:text-[#00F2FE] transition-all"
              >
                <Icon className="w-3 h-3 text-[#00F2FE]" />
                <span>{p.label}</span>
              </button>
            );
          })}
        </div>

        {/* شريط الإدخال والإرسال (Input Footer) */}
        <div className="p-4 border-t border-white/10 bg-[#060813] flex items-center gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder={isAr ? "اطرح استفسارك الاستثماري أو التقني هنا..." : "Type your institutional query..."}
            className="flex-1 bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00F2FE] transition-all"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={!input.trim() || isTyping}
            className="p-3 rounded-xl bg-gradient-to-r from-[#00F2FE] to-[#05D5B2] text-slate-950 font-bold hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <Send className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`} />
          </button>
        </div>

      </div>
    </div>
  );
}