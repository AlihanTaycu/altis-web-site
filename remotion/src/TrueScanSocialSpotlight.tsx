import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

type TrueScanSocialSpotlightProps = {
  assetPath: string;
};

const colors = {
  navy: '#0A1438',
  mint: '#39F2A6',
};

export const TrueScanSocialSpotlight = ({ assetPath }: TrueScanSocialSpotlightProps) => {
  const frame = useCurrentFrame();
  const { fps, width } = useVideoConfig();
  const intro = spring({ frame, fps, config: { damping: 24, stiffness: 90 } });
  const sweep = interpolate(frame % 150, [0, 120], [-20, 116], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{ background: '#F4F7FB', color: colors.navy, fontFamily: 'Inter, Arial, sans-serif', overflow: 'hidden' }}>
      <Img
        src={staticFile(assetPath)}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <AbsoluteFill
        style={{
          background: 'linear-gradient(180deg, rgba(244,247,251,.1), rgba(244,247,251,.82) 50%, rgba(10,20,56,.96))',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: `${sweep}%`,
          top: '28%',
          width: 18,
          height: '46%',
          borderRadius: 999,
          background: 'linear-gradient(180deg, transparent, rgba(57,242,166,.48), transparent)',
          boxShadow: '0 0 90px rgba(57,242,166,.74)',
          transform: 'rotate(18deg)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 72,
          right: 72,
          top: 118,
          opacity: intro,
          transform: `translateY(${interpolate(intro, [0, 1], [28, 0])}px)`,
        }}
      >
        <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: 0 }}>TrueScan</div>
        <div style={{ marginTop: 22, fontSize: 74, lineHeight: 1.04, fontWeight: 850, letterSpacing: 0 }}>
          Zorlu yuzeylerde guvenilir okuma
        </div>
        <div style={{ marginTop: 26, fontSize: 31, lineHeight: 1.38, color: '#46556A' }}>
          Barkod, QR ve DPM kodlari icin endustriyel goruntu isleme.
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          left: 72,
          right: 72,
          bottom: 88,
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 18,
          opacity: interpolate(frame, [45, 75], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
        }}
      >
        {[
          ['Metal yuzey', 'dusuk kontrast ve yansima kosullarinda'],
          ['Tek istasyon', 'barkod, QR ve DPM okuma akisi'],
          ['Altis Teknoloji', 'saha icin uygulanabilir goruntu isleme'],
        ].map(([label, detail]) => (
          <div
            key={label}
            style={{
              padding: '24px 28px',
              borderRadius: 12,
              background: 'rgba(255,255,255,.1)',
              border: '1px solid rgba(255,255,255,.28)',
              backdropFilter: 'blur(14px)',
            }}
          >
            <div style={{ fontSize: 29, fontWeight: 800, color: '#fff' }}>{label}</div>
            <div style={{ marginTop: 6, fontSize: 21, color: 'rgba(255,255,255,.68)' }}>{detail}</div>
          </div>
        ))}
      </div>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          border: `${Math.max(8, Math.round(width / 140))}px solid rgba(255,255,255,.35)`,
          pointerEvents: 'none',
        }}
      />
    </AbsoluteFill>
  );
};
