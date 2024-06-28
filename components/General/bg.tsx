import { useEffect, useMemo, useState } from 'react';

import {
   Container,
   ISourceOptions,
   MoveDirection,
   OutMode,
   type,
} from '@tsparticles/engine';
import Particles, { initParticlesEngine } from '@tsparticles/react';
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from '@tsparticles/slim'; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const Background = () => {
   const [init, setInit] = useState(false);

   // this should be run only once per application lifetime
   useEffect(() => {
      initParticlesEngine(async (engine) => {
         // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
         // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
         // starting from v2 you can add only the features you need reducing the bundle size
         //await loadAll(engine);
         //await loadFull(engine);
         await loadSlim(engine);
         //await loadBasic(engine);
      }).then(() => {
         setInit(true);
      });
   }, []);

   const particlesLoaded = async (container?: Container): Promise<void> => {
      // console.log(container);
   };

   const options: ISourceOptions = useMemo(
      () => ({
         fpsLimit: 120,
         interactivity: {
            events: {
               onClick: {
                  enable: true,
                  mode: 'push',
               },
               onHover: {
                  enable: true,
                  mode: 'repulse',
               },
            },
            modes: {
               push: {
                  quantity: 4,
               },
               repulse: {
                  distance: 200,
                  duration: 0.4,
               },
            },
         },
         particles: {
            color: {
               value: '#000',
            },
            links: {
               color: '#000',
               distance: 150,
               enable: true,
               opacity: 0.5,
               width: 1,
            },
            move: {
               enable: true,
               random: false,
               speed: 3,
               straight: false,
            },
            number: {
               density: {
                  enable: true,
               },
               value: 40,
            },
            opacity: {
               value: 0.3,
            },
            shape: {
               type: 'circle',
            },
            size: {
               value: { min: 2, max: 5 },
            },
         },
         detectRetina: true,
      }),
      []
   );

   if (init) {
      return (
         <Particles
            id='tsparticles'
            particlesLoaded={particlesLoaded}
            options={options}
         />
      );
   }

   return <></>;
};

export default Background;
