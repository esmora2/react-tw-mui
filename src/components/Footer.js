import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; 2023 My App</p>
      <p>
        <a href="https://facebook.com" className="text-blue-500">Facebook</a> | 
        <a href="https://twitter.com" className="text-blue-400">Twitter</a>
      </p>
    </footer>
  );
}

export default Footer;
