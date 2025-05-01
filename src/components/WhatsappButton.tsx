import React from 'react';



interface WhatsappButtonProps {
  className?: string;
}

const WhatsappButton: React.FC<WhatsappButtonProps> = ({ className = '' }) => {
  const whatsappNumber = '+966568365197'; // Replace with your WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-5 rounded-full shadow-lg flex items-center space-x-2 transition-colors duration-300 ${className}`}
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48A11.91 11.91 0 0012 0C5.37 0 0 5.37 0 12a11.91 11.91 0 001.64 6.01L0 24l6.12-1.6A11.91 11.91 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zm-8.52 17.52a9.9 9.9 0 01-5.3-1.54l-.38-.23-3.64.95.97-3.55-.25-.37a9.9 9.9 0 1111.6 4.74zM17.1 14.4c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.18.2-.36.22-.66.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.79-1.68-2.09-.18-.3-.02-.46.13-.61.14-.14.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.25-.24-.59-.49-.51-.68-.52-.18-.01-.38-.01-.58-.01-.2 0-.52.07-.8.37-.28.3-1.07 1.05-1.07 2.56 0 1.5 1.1 2.95 1.25 3.15.15.2 2.15 3.3 5.2 4.63.73.32 1.3.51 1.75.65.74.23 1.42.2 1.96.12.6-.1 1.77-.72 2.02-1.41.25-.7.25-1.3.18-1.41-.07-.1-.28-.15-.58-.3z" />
      </svg>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
};

export default WhatsappButton;

