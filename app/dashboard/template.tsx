import React from 'react';

export const fetchCache = 'force-no-store';
export const revalidate = 0;

const Template = ({ children }: { children: React.ReactNode }) => {
   return <>{children}</>;
};

export default Template;
