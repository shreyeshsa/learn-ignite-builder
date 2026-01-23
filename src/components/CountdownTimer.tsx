import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="flex items-center justify-center gap-2 md:gap-4">
      <div className="timer-item">
        <span className="timer-value">{formatNumber(timeLeft.days)}</span>
        <span className="timer-label">Days</span>
      </div>
      <span className="text-3xl font-bold text-foreground/50">:</span>
      <div className="timer-item">
        <span className="timer-value">{formatNumber(timeLeft.hours)}</span>
        <span className="timer-label">Hours</span>
      </div>
      <span className="text-3xl font-bold text-foreground/50">:</span>
      <div className="timer-item">
        <span className="timer-value">{formatNumber(timeLeft.minutes)}</span>
        <span className="timer-label">Mins</span>
      </div>
      <span className="text-3xl font-bold text-foreground/50">:</span>
      <div className="timer-item">
        <span className="timer-value">{formatNumber(timeLeft.seconds)}</span>
        <span className="timer-label">Secs</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
