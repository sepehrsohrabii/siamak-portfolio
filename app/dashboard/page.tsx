import { Heading1, Paragraph1 } from '@/components/General/typography';

const DashboardPage = () => {
   const date = new Date().toISOString().split('T')[0];
   return (
      <div className='bg- h-full w-full rounded-lg bg-slate-200 p-5 shadow-lg'>
         <Heading1 className=''>Dashboard</Heading1>
         <Paragraph1 className=''>{date}</Paragraph1>
      </div>
   );
};
export default DashboardPage;
