"use client";
import { useState, useEffect } from "react";

function useInView(ref: any, time?: number) {
  const [isInView, setIsInView] = useState(false);
  const threshold = time || 0.2;

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        },
        { threshold }
      );
      observer.observe(ref.current);

      return () => observer.disconnect();
    }
  }, [ref]);

  return isInView;
}

export default useInView;
