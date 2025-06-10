import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center">
      <div className="relative w-16 h-16">
        <div className="absolute w-full h-full rounded-full border-4 border-transparent border-zinc-800 border-t-violet-500 animate-spin ">
        </div>
      </div>
    </div>
  );
};