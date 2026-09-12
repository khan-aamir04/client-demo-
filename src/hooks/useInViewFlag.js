import { useEffect, useState } from "react";

/**
 * Flips to true the first time the given selector scrolls into view.
 * Used for the staggered statistics reveal on the home page.
 */
export default function useInViewFlag(selector, threshold = 0.3) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.querySelector(selector);
    if (!target) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [selector, threshold]);

  return visible;
}
