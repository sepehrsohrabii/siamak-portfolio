const LoadingSpinSM = () => {
   return (
      <div className='flex items-center'>
         <div
            className='inline-block h-3 w-3 animate-spin rounded-full border-[2px] border-current border-t-transparent text-white'
            role='status'
            aria-label='loading'
         ></div>
      </div>
   );
};
export default LoadingSpinSM;
