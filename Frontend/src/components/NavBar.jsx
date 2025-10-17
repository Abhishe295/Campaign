import React from 'react';
import { Palette } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="relative bg-base-200 shadow-xl border-b border-base-300">
      <div className="navbar px-6 py-4">
        <div className="navbar-start">
          <a href="/" className="group flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-lg blur-md group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              <h1 className="relative text-3xl font-black tracking-tight text-base-content 
                           transform group-hover:scale-105 transition-all duration-300
                           hover:text-primary">
                CAMPAIGN
              </h1>
            </div>
          </a>
        </div>
        
        <div className="navbar-end">
          <a 
            href="/theme" 
            className="group relative btn btn-ghost btn-circle btn-lg overflow-hidden
                     hover:bg-primary/10 transition-all duration-500 hover:scale-110 hover:rotate-12"
          >
            {/* Animated background ring */}
            <div className="absolute inset-0 rounded-full border-4 border-primary/0 
                          group-hover:border-primary/30 transition-all duration-500
                          group-hover:scale-150 group-hover:rotate-180"></div>
            
            {/* Icon with animation */}
            <Palette className="h-7 w-7 text-base-content 
                              transform group-hover:rotate-180 transition-all duration-700
                              group-hover:scale-125 group-hover:text-primary" />
            
            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-full bg-primary/0 
                          group-hover:bg-primary/20 blur-xl transition-all duration-500"></div>
            
            {/* Tooltip */}
            <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 
                           bg-base-100 text-base-content px-4 py-2 rounded-lg
                           border border-base-300
                           opacity-0 group-hover:opacity-100 transition-all duration-300
                           whitespace-nowrap text-sm font-semibold shadow-2xl
                           transform group-hover:-translate-y-2">
              Choose Theme
            </span>
          </a>
        </div>
      </div>
      
      {/* Bottom accent line with animation */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent
                    animate-pulse"></div>
    </nav>
  );
}