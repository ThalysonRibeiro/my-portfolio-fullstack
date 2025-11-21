"use client";
import { useEffect, useState } from "react";

export function AnimatedNumber({ value, simbol = "+" }: { value: number; simbol?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="text-2xl font-bold">
      {count}
      {}
      {simbol}
    </span>
  );
}
