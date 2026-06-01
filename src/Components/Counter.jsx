import { useState, useEffect } from "react";

export default function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (!startCount) return;

    let current = 0;
    const step = end / 55;
    const timer = window.setInterval(() => {
      current += step;
      if (current >= end) {
        setCount(end);
        window.clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 28);

    return () => window.clearInterval(timer);
  }, [end, startCount]);

  useEffect(() => {
    setStartCount(true);
  }, []);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}
