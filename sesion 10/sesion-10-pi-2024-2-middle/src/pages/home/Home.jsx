import { Canvas } from '@react-three/fiber';
import Controls from './controls/Controls';
import Lights from './lights/Lights';
import { Physics } from '@react-three/rapier';
import Beach from './world/Beach';
import Staging from './staging/Staging';
import { Loader, PositionalAudio } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { useRef } from 'react';
import Video from './world/Video';

const Home = ({ ready }) => {
  const cameraSettings = {
    position: [0, 15, 15],
  };

  const audioRef = useRef();

  return (
    <>
      <Canvas camera={cameraSettings}>
          <Perf position={"top-left"} />
          <Controls />
          <Lights />
          <Staging />
          <Physics debug={false}>
            <Beach />
          </Physics>
          <Video name="screen" position-y={10} scale={8} />
          {ready && (
          <group position={[0, 5, 0]}>
            <PositionalAudio
              ref={audioRef}
              autoplay
              loop
              url="/sounds/waves.mp3"
              distance={3}
            />
          </group>
        )}
      </Canvas>
      <Loader />
    </>
  );
};

export default Home;
