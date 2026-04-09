import { useEffect, useState } from 'react';

const InkMountains = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div 
      style={{ 
        position: 'fixed', 
        inset: 0, 
        pointerEvents: 'none', 
        overflow: 'hidden', 
        zIndex: 0,
        backgroundColor: '#faf8f5',
      }}
    >
      {/* Far Mountains */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '24rem' }}>
        <svg viewBox="0 0 1440 400" style={{ width: '100%', height: '100%' }} preserveAspectRatio="none">
          <defs>
            <linearGradient id="mountainGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4a4a4a" />
              <stop offset="100%" stopColor="#faf8f5" />
            </linearGradient>
          </defs>
          <path
            d="M0 400 L0 250 Q180 150 360 200 T720 180 T1080 220 T1440 180 L1440 400 Z"
            fill="url(#mountainGradient1)"
            style={{ opacity: 0.2 }}
          />
        </svg>
      </div>

      {/* Mid Mountains */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '16rem' }}>
        <svg viewBox="0 0 1440 300" style={{ width: '100%', height: '100%' }} preserveAspectRatio="none">
          <defs>
            <linearGradient id="mountainGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2d2d2d" />
              <stop offset="100%" stopColor="#faf8f5" />
            </linearGradient>
          </defs>
          <path
            d="M0 300 L0 200 Q240 120 480 160 T960 140 T1440 180 L1440 300 Z"
            fill="url(#mountainGradient2)"
            style={{ opacity: 0.15 }}
          />
        </svg>
      </div>

      {/* Mist Layers */}
      <div style={{ 
        position: 'absolute', 
        bottom: 0, 
        left: 0, 
        right: 0, 
        height: '10rem',
        background: 'linear-gradient(to top, #faf8f5, transparent)',
      }} />
      
      {/* Floating Ink Splashes */}
      <div
        style={{
          position: 'absolute',
          top: '25%',
          left: '25%',
          width: '16rem',
          height: '16rem',
          borderRadius: '50%',
          backgroundColor: 'rgba(45, 45, 45, 0.03)',
          filter: 'blur(48px)',
          animation: 'float1 8s ease-in-out infinite',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '33%',
          right: '25%',
          width: '12rem',
          height: '12rem',
          borderRadius: '50%',
          backgroundColor: 'rgba(45, 45, 45, 0.03)',
          filter: 'blur(48px)',
          animation: 'float2 10s ease-in-out infinite',
          animationDelay: '2s',
        }}
      />

      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0); opacity: 0.03; }
          50% { transform: translateY(-10px); opacity: 0.05; }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0); opacity: 0.02; }
          50% { transform: translateY(15px); opacity: 0.04; }
        }
      `}</style>
    </div>
  );
};

export default InkMountains;
