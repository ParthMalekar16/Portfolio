import { useEffect, useState } from "react";

export const useTypewriter = (text: string, speed = 50) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setDisplayText("");
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (currentIndex >= text.length) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setDisplayText((currentText) => currentText + text[currentIndex]);
      setCurrentIndex((index) => index + 1);
    }, speed);

    return () => window.clearTimeout(timeoutId);
  }, [currentIndex, speed, text]);

  return displayText;
};
