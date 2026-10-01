"use client";

import { useEffect, useState } from "react";

// 2nd October 2026, 10:00 AM WAT (UTC+1) => 09:00 UTC.
const TARGET = Date.UTC(2026, 9, 2, 9, 0, 0);

function parts(ms) {
  const clamped = Math.max(0, ms);
  return {
    days: Math.floor(clamped / 86400000),
    hours: Math.floor(clamped / 3600000) % 24,
    mins: Math.floor(clamped / 60000) % 60,
    secs: Math.floor(clamped / 1000) % 60,
  };
}

export default function Countdown() {
  const [left, setLeft] = useState(() => parts(TARGET - Date.now()));

  useEffect(() => {
    const id = setInterval(() => setLeft(parts(TARGET - Date.now())), 1000);
    return () => clearInterval(id);
  }, []);

  const cells = [
    { v: left.days, l: "Days" },
    { v: left.hours, l: "Hours" },
    { v: left.mins, l: "Minutes" },
    { v: left.secs, l: "Seconds" },
  ];

  return (
    <div className="countdown" role="timer" aria-label="Countdown to the inauguration ceremony">
      {cells.map((c) => (
        <div className="countdown__cell" key={c.l}>
          <span className="countdown__num">{String(c.v).padStart(2, "0")}</span>
          <span className="countdown__label">{c.l}</span>
        </div>
      ))}
    </div>
  );
}
