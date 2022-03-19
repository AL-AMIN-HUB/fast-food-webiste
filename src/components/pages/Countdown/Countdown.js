import React, { useEffect, useRef, useState } from "react";
import "./Countdown.css";

const Countdown = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  //
  let interval = useRef();

  const startTimer = () => {
    const CountdownDate = new Date("April 30 2022 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = CountdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // stop our timer
        clearInterval(interval.current);
      } else {
        // update our timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  // componentDidMount lifecycle method
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <section className="timer-container">
        <section className="timer">
          <div>
            <span className="mdi mdi-calendar-clock timer-icon"></span>
            <h2 className="text-3xl">
              {" "}
              <span> &#128293;</span> <span className="text-amber-400 font-extrabold">OUR OFFER</span>
            </h2>
            <p>
              Log in now and order a meal for 1000 rupees to take advantage of our offer. One you could or would never imagine! . There are only{" "}
              <span className="text-red-400 font-extrabold">{timerDays}</span> days left
            </p>
          </div>
          <div>
            <section>
              <p>{timerDays}</p>
              <p>
                <small>Days</small>
              </p>
            </section>
            <span>:</span>

            <section>
              <p>{timerHours}</p>
              <p>
                <small>Hours</small>
              </p>
            </section>
            <span>:</span>

            <section>
              <p>{timerMinutes}</p>
              <p>
                <small>Minutes</small>
              </p>
            </section>
            <span>:</span>

            <section>
              <p>{timerSeconds}</p>
              <p>
                <small>Second</small>
              </p>
            </section>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Countdown;
