import React from 'react';

const Heading1 = ({
   children,
   className,
}: {
   children: React.ReactNode;
   className: string;
}) => {
   return <h1 className={`text-8xl font-thin ${className}`}>{children}</h1>;
};

const Heading2 = ({
   children,
   className,
}: {
   children: React.ReactNode;
   className: string;
}) => {
   return <h2 className={`text-6xl font-thin ${className}`}>{children}</h2>;
};

const Heading3 = ({
   children,
   className,
}: {
   children: React.ReactNode;
   className: string;
}) => {
   return <h3 className={`text-5xl font-thin ${className}`}>{children}</h3>;
};
const Heading4 = ({
   children,
   className,
}: {
   children: React.ReactNode;
   className: string;
}) => {
   return <h4 className={`text-3xl font-thin ${className}`}>{children}</h4>;
};
const Heading5 = ({
   children,
   className,
}: {
   children: React.ReactNode;
   className: string;
}) => {
   return <h5 className={`text-2xl font-light ${className}`}>{children}</h5>;
};
const Heading6 = ({
   children,
   className,
}: {
   children: React.ReactNode;
   className: string;
}) => {
   return <h6 className={`text-xl font-light ${className}`}>{children}</h6>;
};
const Paragraph1 = ({
   children,
   className,
}: {
   children: React.ReactNode;
   className: string;
}) => {
   return <p className={`text-xl font-normal ${className}`}>{children}</p>;
};
const Paragraph2 = ({
   children,
   className,
}: {
   children: React.ReactNode;
   className: string;
}) => {
   return <p className={`text-md font-normal ${className}`}>{children}</p>;
};
const Paragraph3 = ({
   children,
   className,
}: {
   children: React.ReactNode;
   className: string;
}) => {
   return <p className={`text-sm font-normal ${className}`}>{children}</p>;
};

export {
   Heading1,
   Heading2,
   Heading3,
   Heading4,
   Heading5,
   Heading6,
   Paragraph1,
   Paragraph2,
   Paragraph3,
};
