import { useState, useEffect, RefObject } from "react";

type useOnScreenOptions = {
  threshold?: number;
  triggerOnce?: boolean;
};

export const useOnScreen = (
  ref: RefObject<HTMLElement | null>,
  options: useOnScreenOptions = {}
): boolean => {
  const { threshold = 0.1, triggerOnce = false } = options;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const element = ref.current;

    if (!element || (triggerOnce && isVisible)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting && triggerOnce) {
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, triggerOnce, isVisible]);

  return isVisible;
};
