import React from 'react';

type DownloadButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  variant: 'primary' | 'secondary';
};

export function DownloadButton({ children, onClick, variant }: DownloadButtonProps) {
  const baseClasses = "w-full px-4 py-3 rounded-lg transition-colors text-lg font-semibold";
  const variantClasses = {
    primary: "bg-primary-600 text-white dark:bg-primary-500 hover:bg-primary-700 dark:hover:bg-primary-600",
    secondary: "bg-gray-800 text-white dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {children}
    </button>
  );
}