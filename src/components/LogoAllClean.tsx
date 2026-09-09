import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textClassName?: string;
  variant?: 'light' | 'dark' | 'badge-only';
}

export const LogoAllClean: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  textClassName = '',
  variant = 'dark',
}) => {
  const sizeMap = {
    sm: { badge: 38, textClass: 'text-base', subClass: 'text-[9px]' },
    md: { badge: 52, textClass: 'text-xl', subClass: 'text-[11px]' },
    lg: { badge: 72, textClass: 'text-2xl', subClass: 'text-xs' },
    xl: { badge: 120, textClass: 'text-4xl', subClass: 'text-sm' },
  };

  const { badge, textClass, subClass } = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* 3D Circular Brand Emblem */}
      <svg
        width={badge}
        height={badge}
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-md transition-transform duration-300 hover:scale-105"
      >
        <defs>
          {/* Outer ring gradient */}
          <linearGradient id="ringGrad" x1="20" y1="20" x2="220" y2="220" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#003580" />
            <stop offset="40%" stopColor="#0264d6" />
            <stop offset="70%" stopColor="#0047a8" />
            <stop offset="100%" stopColor="#001d4a" />
          </linearGradient>

          {/* Disc bevel inner shadow */}
          <radialGradient id="discGrad" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="75%" stopColor="#f8faff" />
            <stop offset="100%" stopColor="#e2e8f4" />
          </radialGradient>

          {/* Letter A & Word Gradient */}
          <linearGradient id="blue3D" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0084ff" />
            <stop offset="50%" stopColor="#0050bd" />
            <stop offset="100%" stopColor="#002b66" />
          </linearGradient>

          {/* Wave gradient */}
          <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00a8ff" />
            <stop offset="50%" stopColor="#0062e0" />
            <stop offset="100%" stopColor="#002d73" />
          </linearGradient>

          {/* Filter for subtle 3D emboss shadow */}
          <filter id="emboss3D" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="1" dy="2.5" stdDeviation="1.5" floodColor="#00183d" floodOpacity="0.4" />
          </filter>
          <filter id="softShadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#001026" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Outer Circular Beveled Rim */}
        <circle cx="120" cy="120" r="116" fill="url(#ringGrad)" stroke="#002661" strokeWidth="3" />
        <circle cx="120" cy="120" r="110" fill="none" stroke="#60a5fa" strokeWidth="1.5" opacity="0.8" />

        {/* Inner White Porcelain Plate */}
        <circle cx="120" cy="120" r="102" fill="url(#discGrad)" stroke="#cbd5e1" strokeWidth="1.5" />
        
        {/* Subtle inner ambient ring */}
        <circle cx="120" cy="120" r="99" fill="none" stroke="#e0e7ff" strokeWidth="2" opacity="0.6" />

        {/* --- Top Stylized Letter 'A' with Water Wave Splash --- */}
        <g filter="url(#emboss3D)">
          {/* Main A legs */}
          <path
            d="M 120 40 L 98 94 L 112 94 L 120 73 L 128 94 L 142 94 Z"
            fill="url(#blue3D)"
          />
          {/* Left leg shadow facet for 3D look */}
          <path
            d="M 120 40 L 98 94 L 105 94 L 120 54 Z"
            fill="#002c6b"
            opacity="0.35"
          />
          {/* Right leg highlight facet */}
          <path
            d="M 120 40 L 120 73 L 128 94 L 142 94 Z"
            fill="#38bdf8"
            opacity="0.3"
          />

          {/* Dynamic Water Swoosh Wave crossing the A */}
          <path
            d="M 88 77 C 98 67, 116 67, 126 73 C 145 78, 160 63, 172 61 C 163 71, 148 83, 127 81 C 114 80, 103 84, 88 77 Z"
            fill="#0099ff"
          />
          <path
            d="M 94 76 C 104 69, 120 70, 130 74 C 146 80, 162 70, 172 61 C 160 74, 142 86, 125 83 C 110 81, 101 82, 94 76 Z"
            fill="#0284c7"
            opacity="0.8"
          />

          {/* Sparkles on top right of A */}
          {/* Star 1 */}
          <path
            d="M 164 45 Q 164 53 160 53 Q 164 53 164 61 Q 164 53 168 53 Q 164 53 164 45 Z"
            fill="#003580"
          />
          {/* Star 2 */}
          <path
            d="M 178 57 Q 178 63 175 63 Q 178 63 178 69 Q 178 63 181 63 Q 178 63 178 57 Z"
            fill="#0047a8"
          />
        </g>

        {/* --- ALL CLEAN (Embossed 3D bold typography) --- */}
        <g filter="url(#emboss3D)">
          <text
            x="120"
            y="132"
            textAnchor="middle"
            fontFamily="'Outfit', 'Plus Jakarta Sans', sans-serif"
            fontWeight="900"
            fontSize="26"
            letterSpacing="1.5"
            fill="url(#blue3D)"
          >
            ALL CLEAN
          </text>
        </g>

        {/* --- SOLUTION (with horizontal separator lines) --- */}
        <g>
          {/* Left rule line */}
          <line x1="38" y1="146" x2="68" y2="146" stroke="#00224f" strokeWidth="2.5" strokeLinecap="round" />
          {/* Text */}
          <text
            x="120"
            y="151"
            textAnchor="middle"
            fontFamily="'Outfit', 'Plus Jakarta Sans', sans-serif"
            fontWeight="800"
            fontSize="15"
            letterSpacing="4"
            fill="#001e47"
          >
            SOLUTION
          </text>
          {/* Right rule line */}
          <line x1="172" y1="146" x2="202" y2="146" stroke="#00224f" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* --- Slogan: TUDO LIMPO, TUDO PRONTO. --- */}
        <g filter="url(#softShadow)">
          <text
            x="120"
            y="173"
            textAnchor="middle"
            fontFamily="'Outfit', 'Plus Jakarta Sans', sans-serif"
            fontWeight="800"
            fontSize="10.5"
            letterSpacing="1.2"
            fill="#005ecb"
          >
            TUDO LIMPO, TUDO PRONTO.
          </text>
        </g>

        {/* Curved blue underline accent under slogan */}
        <path
          d="M 82 181 Q 120 187 158 181"
          stroke="#0077ff"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />

        {/* --- Bottom Dynamic Wave Crest --- */}
        <g>
          {/* Darker bottom base wave */}
          <path
            d="M 44 196 C 68 182, 102 206, 138 198 C 168 191, 188 197, 196 200 C 176 218, 149 228, 120 228 C 91 228, 64 218, 44 196 Z"
            fill="#002b66"
          />
          {/* Bright royal blue overlay wave */}
          <path
            d="M 47 195 C 68 184, 100 200, 134 194 C 162 189, 185 194, 195 198 C 190 206, 180 213, 168 217 C 138 213, 104 206, 74 210 C 62 206, 53 200, 47 195 Z"
            fill="url(#waveGrad)"
          />
        </g>
      </svg>

      {/* Brand Text Block (Optional) */}
      {showText && (
        <div className={`flex flex-col text-left ${textClassName}`}>
          <div className="flex items-center gap-1.5">
            <span
              className={`font-black font-heading tracking-tight leading-none ${
                variant === 'light' ? 'text-white' : 'text-slate-900'
              } ${textClass}`}
            >
              ALL CLEAN
            </span>
            <span
              className={`font-extrabold font-heading tracking-widest text-cyan-500 uppercase leading-none ${textClass}`}
            >
              SOLUTION
            </span>
          </div>
          <span
            className={`font-semibold tracking-wider uppercase mt-1 ${
              variant === 'light' ? 'text-cyan-200' : 'text-blue-600'
            } ${subClass}`}
          >
            Tudo Limpo, Tudo Pronto
          </span>
        </div>
      )}
    </div>
  );
};
