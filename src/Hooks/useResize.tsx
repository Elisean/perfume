import { useState, useEffect } from 'react';
import { Breakpoints } from '../Breakpoints/Breakpoints.js';

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event:any) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isScreenSm: width >= Breakpoints.SCREEN_SM,
    isScreenMd: width >= Breakpoints.SCREEN_MD,
    isScreenLg: width >= Breakpoints.SCREEN_LG,
    isScreenXl: width >= Breakpoints.SCREEN_XL,
    isScreenXxl: width >= Breakpoints.SCREEN_XXL,
  };
};