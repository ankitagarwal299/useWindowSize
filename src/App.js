import React from 'react';
import useWindowSize from './hooks/useWindowSize';

import './style.css';

export default function App() {
  const { width, height } = useWindowSize();
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {width},{height}
    </div>
  );
}
