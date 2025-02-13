import { useState, useEffect } from "react";

const TypingText = ({ text, speed = 150 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;

      if (index === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <h1 className="text-4xl font-bold text-white-500">{displayedText}|</h1>;
};

export default TypingText;
