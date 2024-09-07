"use client"
import { useTheme } from '@/context/ThemeContext'; // Adjust the import path accordingly

const ToggleButton = () => {
  const { isDarkMode: isOn, toggleTheme } = useTheme();


  return (
    <button
      onClick={toggleTheme}
      className={`flex items-center px-6 py-2 rounded-full transition-colors duration-300 
        ${isOn ? 'bg-purple-600 text-white' : 'bg-gray-300 text-gray-700'}
        shadow-md focus:outline-none`}
    >
      <span className={`w-4 h-4 rounded-full transition-transform duration-300 
        ${isOn ? 'bg-white transform translate-x-4' : 'bg-gray-600 transform -translate-x-4'}`}
      />
    </button>
  );
};

export default ToggleButton;
