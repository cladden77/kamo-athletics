'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  animationDelay?: number;
}

export default function LazySection({ 
  children, 
  className = '', 
  threshold = 0.1, 
  rootMargin = '0px 0px -50px 0px',
  animationDelay = 0
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          // Add delay before showing content
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, animationDelay);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin, animationDelay, hasAnimated]);

  return (
    <div
      ref={elementRef}
      className={`lazy-section ${isVisible ? 'lazy-section-visible' : 'lazy-section-hidden'} ${className}`}
    >
      {children}
    </div>
  );
}


