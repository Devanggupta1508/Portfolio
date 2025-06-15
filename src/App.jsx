import { useEffect } from 'react';
import './App.css';


import AOS from 'aos';
import 'aos/dist/aos.css';
import Portfolio from './Portfolio';


function App() {
  useEffect(() => {
    // AOS initialization
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      anchorPlacement: 'top-bottom',
    });

    // Disable right click
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    // Block Inspect Shortcuts
    const blockKeys = (e) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) ||
        (e.ctrlKey && ['U', 'S'].includes(e.key))
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener('keydown', blockKeys);

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', (e) => e.preventDefault());
      document.removeEventListener('keydown', blockKeys);
    };
  }, []);

  return (
    <>
     <Portfolio/>
    </>
  );
}

export default App;
