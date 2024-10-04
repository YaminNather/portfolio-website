import { useEffect, useMemo, useState } from "react";

export function useIsVisible(element: HTMLElement | null, hold: boolean = true, intersectionRatio: number = 0.5): boolean {
  if (typeof window === 'undefined') return false;

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const intersectionObserver = useMemo(
    () => {
      return new IntersectionObserver(
        (entries, observer) => {
          setIsVisible((isVisible) => {
            if (hold && isVisible) return true;

            return entries.filter((element) => element.isIntersecting && element.intersectionRatio > intersectionRatio).length != 0;
          });
        },
        {
          threshold: intersectionRatio,
        }
      );
    },
    []
  );
  
  useEffect(
    () => {
      if (element === null) return;

      intersectionObserver.observe(element);

      return () => {
        intersectionObserver.unobserve(element);
      };
    },
    [element, intersectionObserver]
  );

  return isVisible;
}