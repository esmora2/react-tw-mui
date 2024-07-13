import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <footer className="bg-purple-700 text-white p-4 text-center">
      <p>&copy; 2024</p>
      <p>Sheylees Company</p>
      <p>
        <FacebookIcon className="text-white-500 mx-2 hover:text-blue-300"/>
        <a href="https://facebook.com" className="text-blue-500 mx-2 hover:text-blue-300">Facebook</a> 
        <TwitterIcon className="text-white-500 mx-2 hover:text-blue-300"/>
        <a href="https://twitter.com" className="text-blue-400 mx-2 hover:text-blue-200">Twitter</a>
      </p>
    </footer>
  );
}

export default Footer;
 