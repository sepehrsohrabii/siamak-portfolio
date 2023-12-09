import { forwardRef, useImperativeHandle, useRef } from 'react';
import gsap from 'gsap';

const Circle = forwardRef((props, ref) => {
   const el = useRef();

   useImperativeHandle(
      ref,
      () => {
         // return our API
         return {
            moveTo(x, y) {
               gsap.to(el.current, { x, y });
            },
         };
      },
      []
   );

   return <div className='circle border-2 p-5' ref={el}></div>;
});
export default Circle;
