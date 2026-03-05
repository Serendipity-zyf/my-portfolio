"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

interface StatCardProps {
  icon: string;
  category: string;
  total: number;
  items: string[];
}

function CountUp({ target }: { target: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    const controls = animate(count, target, {
      duration: 2,
      ease: "easeOut",
    });
    return controls.stop;
  }, [count, target]);

  return <motion.span>{rounded}</motion.span>;
}

export default function StatCard({
  icon,
  category,
  total,
  items,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-background p-6">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">{icon}</span>
        <div>
          <h3 className="text-lg font-semibold text-foreground">{category}</h3>
          <p className="text-2xl font-bold text-accent">
            <CountUp target={total} />
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-card-bg px-3 py-1 text-xs text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
