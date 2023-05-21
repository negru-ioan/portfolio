import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress === 0) {
          clearInterval(interval);
          return 0;
        }
        return prevProgress - 1;
      });
    }, 30);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className="progress-bar relative top-5 mb-2 rounded-md border-none outline-none bg-gray-200 text-white text-sm transition-all duration-300 hover:bg-blue-700 
    ease-0s w-full h-[10px] overflow-hidden"
    >
      <div
        className="progress-bar-fill h-full bg-[#00c7ff] transition-width duration-300 linear"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;