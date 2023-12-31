import React, { useState, useEffect } from "react";

const Clock = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let interval;
  const countDown = () => {
    const destination = new Date("January 1 2024").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;
      const days = Math.floor(different / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));

      const seconds = Math.floor((different % (1000 * 60)) / 1000);

      if (destination < 0) clearInterval(interval.current);
      else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    countDown();
  });

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-3">
        <div className="text-center">
        {/* text-center lg:text-2xl md:text-lg text-md font-semibold */}
          <h1 className="text-white mb-2 lg:text-4xl text-xl">{days}</h1>
          <h5 className="text-white lg:text-2xl text-lg">Days</h5>
        </div>
        <span className="text-white ">:</span>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-center">
          <h1 className="text-white mb-2 lg:text-4xl text-xl">{hours}</h1>
          <h5 className="text-white lg:text-2xl text-lg">Hours</h5>
        </div>
        <span className="text-white ">:</span>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-center">
          <h1 className="text-white mb-2 lg:text-4xl text-xl">{minutes}</h1>
          <h5 className="text-white lg:text-2xl text-lg">Minutes</h5>
        </div>
        <span className="text-white ">:</span>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-center">
          <h1 className="text-white mb-2 lg:text-4xl text-xl">{seconds}</h1>
          <h5 className="text-white lg:text-2xl text-lg">Seconds</h5>
        </div>
      </div>
    </div>
  );
};

export default Clock;
