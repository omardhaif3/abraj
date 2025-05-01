import React from 'react';
import Lottie from 'lottie-react';
import { Icon } from '@iconify/react';

const IconStyleOptions: React.FC = () => {
  return (
    <div className="space-y-8 p-8 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Icon Style Options Preview</h2>

      {/* Option 1: Custom 3D Animated SVG with CSS Animation */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Option 1: 3D Animated SVG + CSS</h3>
        <div className="flex space-x-6 items-center">
          {/* Placeholder 3D SVG icons using public URLs */}
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Cube_icon.svg" 
            alt="3D Menu Icon" 
            className="w-12 h-12 animate-float" 
          />
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Cube_icon.svg" 
            alt="3D Close Icon" 
            className="w-12 h-12 animate-pulse" 
          />
        </div>
        <p className="mt-2 text-gray-600">Subtle floating and pulsing animations enhance the 3D effect.</p>
      </div>

      {/* Option 2: Lottie Animations */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Option 2: Lottie Animations</h3>
        <div className="flex space-x-6 items-center">
          {/* Placeholder Lottie animations - no animation data provided */}
          <div className="w-12 h-12 bg-gray-300 rounded animate-pulse flex items-center justify-center text-gray-600">
            Lottie 1
          </div>
          <div className="w-12 h-12 bg-gray-300 rounded animate-pulse flex items-center justify-center text-gray-600">
            Lottie 2
          </div>
        </div>
        <p className="mt-2 text-gray-600">Smooth, high-quality 3D animations with full control over playback.</p>
      </div>

      {/* Option 3: Iconify Animated Icons */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Option 3: Iconify Animated Icons</h3>
        <div className="flex space-x-6 items-center text-purple-600">
          <Icon icon="mdi:menu" width="48" height="48" className="animate-spin-slow" />
          <Icon icon="mdi:close" width="48" height="48" className="animate-pulse" />
        </div>
        <p className="mt-2 text-gray-600">Use of a modern icon library with built-in subtle animations.</p>
      </div>
    </div>
  );
};

export default IconStyleOptions;
