import React from 'react';
import MainContainer from '@/components/PublicSide/main';

const Template = ({ children }: { children: React.ReactNode }) => {
   return <MainContainer>{children}</MainContainer>;
};

export default Template;
