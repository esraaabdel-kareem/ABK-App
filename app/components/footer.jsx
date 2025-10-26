import React from "react";

const Footer = () => {
  return (
    <footer className="bg-background text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; 2025 ABK CONSULTANTS. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-white">
            Facebook
          </a>
          <a href="#" className="hover:text-gray-400">
            Twitter
          </a>
          <a href="#" className="hover:text-gray-400">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
