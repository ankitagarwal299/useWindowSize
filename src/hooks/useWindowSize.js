import { useState, useEffect } from 'react';

export default function useWindowSize() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    function updateWindowSize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }

    window.addEventListener('resize', updateWindowSize);

    return () => removeEventListener('resize', updateWindowSize);
  }, []);

  return { width, height };
}
