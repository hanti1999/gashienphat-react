import React, { useState, useEffect } from 'react';
function Clock() {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let interval;

  const countDown = () => {
    const destination = new Date('December 31, 2024').getTime();
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
    <div className='flex items-center gap-5'>
      <div className='flex items-center gap-5'>
        <div className='text-center'>
          <h1 className='text-white text-24 mb-2'>{days} </h1>
          <h5 className='text-white text-14'>Ngày</h5>
        </div>
        <span className='text-24 text-white'>:</span>
      </div>

      <div className='flex items-center gap-5'>
        <div className='text-center'>
          <h1 className='text-white text-24 mb-2'>{hours} </h1>
          <h5 className='text-white text-14'>Giờ</h5>
        </div>
        <span className='text-24 text-white'>:</span>
      </div>

      <div className='flex items-center gap-5'>
        <div className='text-center'>
          <h1 className='text-white text-24 mb-2'>{minutes} </h1>
          <h5 className='text-white text-14'>Phút</h5>
        </div>
        <span className='text-24 text-white'>:</span>
      </div>

      <div className='flex items-center gap-5'>
        <div className='text-center'>
          <h1 className='text-white text-24 mb-2'>{seconds} </h1>
          <h5 className='text-white text-14'>Giây</h5>
        </div>
      </div>
    </div>
  );
}

export default Clock;
