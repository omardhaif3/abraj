import React, { useRef, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

interface TiltProps {
  children: React.ReactNode;
  options?: any;
  className?: string;
}

const TiltWrapper: React.FC<TiltProps> = ({ children, options, className }) => {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
        scale: 1.05,
        ...options,
      });
    }
    return () => {
      if (tiltRef.current) {
        // Cast to any to access vanillaTilt property
        (tiltRef.current as any).vanillaTilt?.destroy();
      }
    };
  }, [options]);

  return <div ref={tiltRef} className={className}>{children}</div>;
};

export default TiltWrapper;
