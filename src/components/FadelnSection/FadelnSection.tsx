import { ReactNode, useEffect, useRef, useState } from "react";
import "./FadelnSection.scss";
import { useOnScreen } from "../../hooks/useOnScreen";

type SectionProps = {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  duration?: number;
};

export const FadelnSection = ({
  children,
  className = "",
  threshold = 0.2,
  delay = 0,
  duration = 800,
}: SectionProps) => {
  const id = "fadeln-section";
  const [shouldRender, setShouldRender] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const isOnScreen = useOnScreen(sectionRef, { threshold, triggerOnce: true });

  useEffect(() => {
    if (isOnScreen) {
      const timer = setTimeout(() => setShouldRender(true), delay);
      return () => clearTimeout(timer);
    }
  }, [isOnScreen, delay]);

  const style = {
    "--animation-duration": `${duration}ms`,
  } as React.CSSProperties;

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`FadeInSection ${
        shouldRender ? "FadeInSection--visible" : ""
      } ${className}`}
      style={style}
    >
      {children}
    </section>
  );
};
