import React from 'react';

export const Button = ({ children, isLoading, className = "", ...props }) => (
    <button
        disabled={isLoading}
        className={`w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-medium rounded-[12px] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_4px_20px_-5px_rgba(59,130,246,0.4)] dark:shadow-[0_0_30px_-10px_rgba(59,130,246,0.6)] ${className}`}
        {...props}
    >
        {isLoading ? (
        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
        ) : children}
    </button>
);