import {
  AbsoluteFill,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
} from 'remotion';

type TrueScanAmbientLoopProps = {
  assetPath: string;
};

export const TrueScanAmbientLoop = ({ assetPath }: TrueScanAmbientLoopProps) => {
  const frame = useCurrentFrame();
  const cycle = frame % 150;
  const sweep = interpolate(cycle, [0, 75, 150], [-18, 112, -18]);
  const glow = interpolate(cycle, [0, 38, 75, 112, 150], [0.18, 0.44, 0.24, 0.44, 0.18]);

  return (
    <AbsoluteFill style={{ background: '#F5F8FC', overflow: 'hidden' }}>
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
          background: 'linear-gradient(90deg, rgba(245,248,252,.08), rgba(245,248,252,.02) 52%, rgba(10,20,56,.08))',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: `${sweep}%`,
          top: '9%',
          width: 10,
          height: '76%',
          borderRadius: 999,
          background: `linear-gradient(180deg, transparent, rgba(57,242,166,${glow}), transparent)`,
          boxShadow: `0 0 54px rgba(57,242,166,${glow + 0.18})`,
          transform: 'rotate(18deg)',
        }}
      />
      {[
        { left: '42%', top: '54%', delay: 0 },
        { left: '54%', top: '49%', delay: 18 },
        { left: '63%', top: '56%', delay: 36 },
      ].map((marker) => {
        const markerCycle = (cycle + marker.delay) % 75;
        const opacity = interpolate(markerCycle, [0, 18, 38, 75], [0.12, 0.68, 0.34, 0.12]);
        const scale = interpolate(markerCycle, [0, 38, 75], [0.92, 1.08, 0.92]);

        return (
          <div
            key={`${marker.left}-${marker.top}`}
            style={{
              position: 'absolute',
              left: marker.left,
              top: marker.top,
              width: 74,
              height: 54,
              border: `2px solid rgba(57,242,166,${opacity})`,
              borderRadius: 8,
              boxShadow: `0 0 22px rgba(57,242,166,${opacity * 0.55})`,
              transform: `translate(-50%, -50%) scale(${scale})`,
            }}
          />
        );
      })}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          border: '7px solid rgba(255,255,255,.32)',
          pointerEvents: 'none',
        }}
      />
    </AbsoluteFill>
  );
};
