import { Paragraph1 } from './typography';

const LoadingSpin = ({ loadingText }: { loadingText: string }) => {
   return (
      <div className='flex items-center'>
         <div
            className='inline-block h-6 w-6 animate-spin rounded-full border-[2px] border-current border-t-transparent text-blue-700'
            role='status'
            aria-label='loading'
         ></div>
         <Paragraph1 className='ms-5 text-black'>{loadingText}</Paragraph1>
      </div>
   );
};
export default LoadingSpin;
