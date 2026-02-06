import { useEffect, useRef, useState } from 'react';

interface LazyLoadOptions {
  rootMargin?: string;
  threshold?: number;
}

/**
 * Hook for lazy loading images with Intersection Observer
 * @param options - Intersection Observer options
 * @returns ref and isVisible state
 */
export const useLazyLoad = (
  options: LazyLoadOptions = {}
): [React.RefObject<HTMLElement>, boolean] => {
  const { rootMargin = '200px', threshold = 0.01 } = options;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check if Intersection Observer is supported
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [rootMargin, threshold]);

  return [ref, isVisible];
};
