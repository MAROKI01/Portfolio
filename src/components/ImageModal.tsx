import React, { useEffect } from 'react';
import { X, ExternalLink, ZoomIn, ZoomOut } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageSrc, title }) => {
  const [zoomed, setZoomed] = React.useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between items-center p-4 sm:p-6 lg:p-8 animate-fade-in"
      onClick={onClose}
    >
      {/* Background Dark-Red Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#5C0A14]/20 via-transparent to-black/80 pointer-events-none" />

      {/* Top Header Controls */}
      <div 
        className="relative z-10 w-full max-w-7xl flex items-center justify-between border-b border-white/10 pb-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="font-montserrat font-extrabold text-xs text-red-500 tracking-widest uppercase border border-red-900/60 bg-red-950/50 px-3 py-1">
            FULL IMAGE VIEW
          </span>
          <span className="font-montserrat font-bold text-sm text-white tracking-wider uppercase truncate max-w-xs sm:max-w-md">
            {title}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Zoom Toggle Button */}
          <button
            onClick={() => setZoomed(!zoomed)}
            title={zoomed ? "Zoom out" : "Zoom in"}
            className="p-2 text-white/80 hover:text-white border border-white/15 hover:border-red-500/50 bg-[#0A0A0A] rounded transition-all cursor-pointer flex items-center gap-1.5 text-xs font-montserrat tracking-widest"
          >
            {zoomed ? <ZoomOut className="w-4 h-4 text-red-400" /> : <ZoomIn className="w-4 h-4 text-red-400" />}
            <span className="hidden sm:inline">{zoomed ? 'FIT SCREEN' : 'ZOOM'}</span>
          </button>

          {/* Open Original File Button */}
          <a
            href={imageSrc}
            target="_blank"
            rel="noopener noreferrer"
            title="Open original image in new tab"
            className="p-2 text-white/80 hover:text-white border border-white/15 hover:border-red-500/50 bg-[#0A0A0A] rounded transition-all cursor-pointer flex items-center gap-1.5 text-xs font-montserrat tracking-widest"
          >
            <ExternalLink className="w-4 h-4 text-white/70" />
            <span className="hidden sm:inline">ORIGINAL</span>
          </a>

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-white/80 hover:text-white border border-white/15 hover:border-red-500/50 bg-red-950/40 rounded transition-all cursor-pointer"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Main Center Image Display */}
      <div 
        className="relative z-10 my-auto flex items-center justify-center w-full h-full max-h-[82vh] overflow-auto py-4 cursor-zoom-in"
        onClick={(e) => {
          e.stopPropagation();
          setZoomed(!zoomed);
        }}
      >
        <img
          src={imageSrc}
          alt={title}
          className={`transition-all duration-300 rounded border border-white/20 shadow-[0_0_60px_rgba(143,23,38,0.4)] ${
            zoomed 
              ? 'max-w-none w-auto h-auto scale-110 cursor-zoom-out' 
              : 'max-w-full max-h-[80vh] w-auto h-auto object-contain cursor-zoom-in hover:scale-[1.01]'
          }`}
        />
      </div>

      {/* Bottom Footer Telemetry */}
      <div 
        className="relative z-10 w-full max-w-7xl flex items-center justify-between border-t border-white/10 pt-4 text-xs font-mono text-white/40 uppercase tracking-widest"
        onClick={(e) => e.stopPropagation()}
      >
        <span>CLICK IMAGE TO TOGGLE ZOOM • PRESS ESC TO CLOSE</span>
        <span className="hidden sm:inline">STATUS: HIGH RES PREVIEW</span>
      </div>
    </div>
  );
};
