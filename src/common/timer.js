import { useEffect, useState } from "react";
import "./style.css";

function CountDown() {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-07-15T00:00:00Z").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="glass-countdown-container">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="glass-box">
          <div className="glass-time">{String(value).padStart(2, "0")}</div>
          <div className="glass-label">{unit.toUpperCase()}</div>
        </div>
      ))}
    </div>
  );
}

export default CountDown;
