import React from 'react';
import { X } from 'lucide-react';
import { DownloadButton } from './ui/DownloadButton';

type DownloadPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function DownloadPopup({ isOpen, onClose }: DownloadPopupProps) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-[100]"
        onClick={onClose}
      />
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-100 dark:border-gray-800 rounded-lg shadow-lg z-[101]">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Download Cardabase</h2>
            <button
              onClick={onClose}
              className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-3">
            <DownloadButton
              onClick={() => window.open('https://f-droid.org/en/packages/com.georgeyt9769.cardabase/', '_blank')}
              variant="primary"
            >
              F-Droid
            </DownloadButton>
            <DownloadButton
              onClick={() => window.open('https://github.com/GeorgeYT9769/cardabase-app/releases/latest', '_blank')}
              variant="primary"
            >
              GitHub (.APK)
            </DownloadButton>
          </div>
        </div>
      </div>
    </>
  );
}