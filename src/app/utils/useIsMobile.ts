import { useState, useEffect } from 'react';

const useIsMobile = (breakpoint: number = 768): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Prevent error during SSR
    if (typeof window === 'undefined') return;

    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);

    handleResize(); // Initial run
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
