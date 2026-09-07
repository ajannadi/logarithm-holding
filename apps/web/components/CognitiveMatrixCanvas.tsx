"use client";

import React, { useEffect, useRef } from "react";

interface NodeParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseColor: string;
  isGlow: boolean;
  pulsePhase: number;
  pulseSpeed: number;
}

interface PulseSignal {
  fromIndex: number;
  toIndex: number;
  progress: number;
  speed: number;
  color: string;
}

export default function CognitiveMatrixCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId = 0;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodeCount = prefersReducedMotion ? 0 : isMobile ? 40 : 85;

    const mouse = {
      x: -1000,
      y: -1000,
      radius: isMobile ? 100 : 170,
    };

    const colors = ["#00F2FE", "#05D5B2", "#7928CA", "#B829E3", "#38BDF8"];
    const nodes: NodeParticle[] = [];
    const pulses: PulseSignal[] = [];

    // إنشاء جزيئات بلورية دقيقة ورشيقة
    for (let i = 0; i < nodeCount; i++) {
      const isGlow = Math.random() < 0.25;
      const color = colors[Math.floor(Math.random() * colors.length)] || "#00F2FE";

      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (isMobile ? 0.4 : 0.75),
        vy: (Math.random() - 0.5) * (isMobile ? 0.4 : 0.75),
        size: isGlow ? Math.random() * 1.2 + 1.8 : Math.random() * 0.8 + 1.0, // أحجام رشيقة ودقيقة
        baseColor: color,
        isGlow,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.03 + 0.015,
      });
    }

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0 && e.touches[0]) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    // توليد نبضات ليزرية خفيفة وسريعة
    const pulseInterval = setInterval(() => {
      if (nodes.length < 2 || pulses.length > 14) return;
      const from = Math.floor(Math.random() * nodes.length);
      const to = Math.floor(Math.random() * nodes.length);
      const nodeFrom = nodes[from];
      const nodeTo = nodes[to];
      if (!nodeFrom || !nodeTo) return;

      const dist = Math.hypot(nodeFrom.x - nodeTo.x, nodeFrom.y - nodeTo.y);
      if (dist < (isMobile ? 95 : 145) && from !== to) {
        pulses.push({
          fromIndex: from,
          toIndex: to,
          progress: 0,
          speed: Math.random() * 0.02 + 0.018,
          color: nodeFrom.baseColor,
        });
      }
    }, 320);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. هالة استكشاف ناعمة وخافتة خلف الفأرة
      if (mouse.x > 0 && mouse.y > 0) {
        const glowGradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouse.radius
        );
        glowGradient.addColorStop(0, "rgba(0, 242, 254, 0.12)");
        glowGradient.addColorStop(0.6, "rgba(121, 40, 202, 0.04)");
        glowGradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. خطوط الشبكة النيونية الرشيقة
      const maxConnectDist = isMobile ? 90 : 135;
      for (let i = 0; i < nodes.length; i++) {
        const p1 = nodes[i];
        if (!p1) continue;

        for (let j = i + 1; j < nodes.length; j++) {
          const p2 = nodes[j];
          if (!p2) continue;

          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < maxConnectDist) {
            const alpha = (1 - dist / maxConnectDist) * 0.28;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p1.baseColor;
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 0.65;
            ctx.stroke();
          }
        }
      }

      // 3. النبضات الليزرية الدقيقة
      for (let k = pulses.length - 1; k >= 0; k--) {
        const pulse = pulses[k];
        if (!pulse) continue;

        const fromNode = nodes[pulse.fromIndex];
        const toNode = nodes[pulse.toIndex];

        if (!fromNode || !toNode) {
          pulses.splice(k, 1);
          continue;
        }

        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          pulses.splice(k, 1);
          continue;
        }

        const currX = fromNode.x + (toNode.x - fromNode.x) * pulse.progress;
        const currY = fromNode.y + (toNode.y - fromNode.y) * pulse.progress;

        ctx.beginPath();
        ctx.arc(currX, currY, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = "#FFFFFF";
        ctx.shadowBlur = 8;
        ctx.shadowColor = pulse.color;
        ctx.globalAlpha = 0.9;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // 4. رسم الجزيئات والنجوم البلورية بدقة بالغة
      for (let i = 0; i < nodes.length; i++) {
        const p = nodes[i];
        if (!p) continue;

        p.x += p.vx;
        p.y += p.vy;
        p.pulsePhase += p.pulseSpeed;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distMouse = Math.hypot(dx, dy);

        if (distMouse < mouse.radius) {
          const force = (mouse.radius - distMouse) / mouse.radius;
          p.x -= (dx / distMouse) * force * 3.5;
          p.y -= (dy / distMouse) * force * 3.5;
        }

        const dynamicSize = p.isGlow 
          ? p.size + Math.sin(p.pulsePhase) * 0.5 
          : p.size;

        ctx.beginPath();
        ctx.arc(p.x, p.y, dynamicSize, 0, Math.PI * 2);
        ctx.fillStyle = p.isGlow ? "#FFFFFF" : p.baseColor;
        ctx.globalAlpha = p.isGlow ? 0.95 : 0.65;
        ctx.shadowBlur = p.isGlow ? 10 : 4;
        ctx.shadowColor = p.baseColor;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(pulseInterval);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto opacity-80 transition-opacity duration-1000 z-0"
    />
  );
}