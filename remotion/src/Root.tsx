import { Composition } from 'remotion';
import { TrueScanAmbientLoop } from './TrueScanAmbientLoop';
import { TrueScanSocialSpotlight } from './TrueScanSocialSpotlight';

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="TrueScanWebLoop"
        component={TrueScanAmbientLoop}
        durationInFrames={150}
        fps={30}
        width={1280}
        height={720}
        defaultProps={{
          assetPath: 'images/truescan/truescan-marketing.png',
        }}
      />
      <Composition
        id="TrueScanSocialPortrait"
        component={TrueScanSocialSpotlight}
        durationInFrames={240}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          assetPath: 'images/truescan/truescan-marketing.png',
        }}
      />
    </>
  );
};
