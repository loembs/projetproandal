import { useEffect, useRef } from 'react';

export const useSmoothAnimations = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  // Animation d'entrée simple et élégante
  const animateIn = (delay: number = 0) => {
    const element = elementRef.current;
    if (!element) return;

    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';

    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, delay);
  };

  // Animation au scroll avec Intersection Observer
  const animateOnScroll = () => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    
    observer.observe(element);

    return () => observer.disconnect();
  };

  // Animation stagger pour les listes
  const animateStagger = (selector: string, staggerDelay: number = 100) => {
    const elements = elementRef.current?.querySelectorAll(selector);
    if (!elements) return;

    elements.forEach((element, index) => {
      (element as HTMLElement).style.opacity = '0';
      (element as HTMLElement).style.transform = 'translateY(20px)';
      (element as HTMLElement).style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';

      setTimeout(() => {
        (element as HTMLElement).style.opacity = '1';
        (element as HTMLElement).style.transform = 'translateY(0)';
      }, index * staggerDelay);
    });
  };

  return {
    elementRef,
    animateIn,
    animateOnScroll,
    animateStagger
  };
}; 