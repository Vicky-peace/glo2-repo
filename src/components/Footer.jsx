import React, { useEffect, useState } from 'react';
import './footer.css'

const Footer = () => {
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const currentDate = new Date();
      const formattedDateTime = currentDate.toLocaleString();
      setCurrentDateTime(formattedDateTime);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Glory Jeptoo. All rights reserved.</p>
      <p>Current date and time: {currentDateTime}</p>
    </footer>
  );
};

export default Footer;
