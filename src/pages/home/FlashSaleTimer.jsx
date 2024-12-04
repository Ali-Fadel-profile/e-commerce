import React, { useEffect, useState } from "react";
import styles from "./FlashSaleTimer.module.css";

function FlashSaleTimer({
  endTime,
  timerUnitStyle,
  timeValueStyle,
  timeLabelStyle,
}) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(endTime));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(endTime));
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  function calculateTimeLeft(endTime) {
    const now = new Date();
    const distance = new Date(endTime) - now;

    if (distance < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }
  return (
    <div className={styles.timer}>
      {/* Days */}
      <div
        style={timerUnitStyle ? timerUnitStyle : null}
        className={!timerUnitStyle ? styles.timerUnit : null}
      >
        <span
          style={timeLabelStyle ? timeLabelStyle : null}
          className={!timeLabelStyle ? styles.timeLabel : null}
        >
          Days
        </span>
        <span
          style={timeValueStyle ? timeValueStyle : null}
          className={!timeValueStyle ? styles.timeValue : null}
        >
          {timeLeft.days}
        </span>
      </div>
      <span className={!timerUnitStyle ? styles.timerSpacesCircule : null}>
        :
      </span>

      {/* Hours */}
      <div
        style={timerUnitStyle ? timerUnitStyle : null}
        className={!timerUnitStyle ? styles.timerUnit : null}
      >
        <span
          style={timeLabelStyle ? timeLabelStyle : null}
          className={!timeLabelStyle ? styles.timeLabel : null}
        >
          Hours
        </span>
        <span
          style={timeValueStyle ? timeValueStyle : null}
          className={!timeValueStyle ? styles.timeValue : null}
        >
          {timeLeft.hours}
        </span>
      </div>
      <span className={!timerUnitStyle ? styles.timerSpacesCircule : null}>
        :
      </span>

      {/* Minutes */}
      <div
        style={timerUnitStyle ? timerUnitStyle : null}
        className={!timerUnitStyle ? styles.timerUnit : null}
      >
        <span
          style={timeLabelStyle ? timeLabelStyle : null}
          className={!timeLabelStyle ? styles.timeLabel : null}
        >
          Minutes
        </span>
        <span
          style={timeValueStyle ? timeValueStyle : null}
          className={!timeValueStyle ? styles.timeValue : null}
        >
          {timeLeft.minutes}
        </span>
      </div>
      <span className={!timerUnitStyle ? styles.timerSpacesCircule : null}>
        :
      </span>

      {/* Seconds */}
      <div
        style={timerUnitStyle ? timerUnitStyle : null}
        className={!timerUnitStyle ? styles.timerUnit : null}
      >
        <span
          style={timeLabelStyle ? timeLabelStyle : null}
          className={!timeLabelStyle ? styles.timeLabel : null}
        >
          Seconds
        </span>
        <span
          style={timeValueStyle ? timeValueStyle : null}
          className={!timeValueStyle ? styles.timeValue : null}
        >
          {timeLeft.seconds}
        </span>
      </div>
    </div>
  );
}

export default FlashSaleTimer;
