import React from 'react';

const Heading1 = ({
   children,
   className,
}: {
   children: React.ReactNode;
   className: string;
}) => {
   return (
      <h1
         className={`text-5xl font-thin md:text-6xl lg:text-6xl xl:text-7xl ${className}`}
      >
         {children}
      </h1>
   );
};

const Heading2 = ({
   children,
   className,
}: {
   children: React.ReactNode;
   className: string;
}) => {
   return (
      <h2 className={`text-3xl font-thin md:text-4xl lg:text-5xl ${className}`}>
         {children}
      </h2>
   );
};

const Heading3 = ({
   children,
   className,
}: {
   children: React.ReactNode;
   className: string;
}) => {
   return (
      <h3 className={`text-2xl font-thin md:text-3xl lg:text-4xl ${className}`}>
         {children}
      </h3>
   );
};
const Heading4 = ({
   children,
   className,
}: {
   children: React.ReactNode;
   className: string;
}) => {
   return (
      <h4 className={`text-xl font-thin md:text-xl lg:text-2xl ${className}`}>
         {children}
      </h4>
   );
};
const Heading5 = ({
   children,
   className,
}: {
   children: React.ReactNode;
   className: string;
}) => {
   return (
      <h5 className={`text-lg font-light md:text-lg lg:text-xl ${className}`}>
         {children}
      </h5>
   );
};
const Heading6 = ({
   children,
   className,
}: {
   children: React.ReactNode;
   className: string;
}) => {
   return (
      <h6
         className={`text-base font-light md:text-base lg:text-base ${className}`}
      >
         {children}
      </h6>
   );
};
const Paragraph1 = ({
   children,
   className,
}: {
   children: React.ReactNode;
   className: string;
}) => {
   return (
      <p
         className={`text-base font-normal md:text-base lg:text-base ${className}`}
      >
         {children}
      </p>
   );
};
const Paragraph2 = ({
   children,
   className,
}: {
   children: React.ReactNode;
   className: string;
}) => {
   return (
      <p className={`text-sm font-normal md:text-sm lg:text-sm ${className}`}>
         {children}
      </p>
   );
};
const Paragraph3 = ({
   children,
   className,
}: {
   children: React.ReactNode;
   className: string;
}) => {
   return (
      <p className={`text-xs font-normal md:text-xs lg:text-xs ${className}`}>
         {children}
      </p>
   );
};
const Paragraph4 = ({
   children,
   className,
}: {
   children: React.ReactNode;
   className: string;
}) => {
   return (
      <p className={`text-xl font-normal md:text-xl lg:text-2xl ${className}`}>
         {children}
      </p>
   );
};
const Label = ({
   children,
   className,
   htmlFor,
}: {
   children: React.ReactNode;
   className: string;
   htmlFor: string;
}) => {
   return (
      <label
         htmlFor={htmlFor}
         className={`text-sm font-normal md:text-base lg:text-lg ${className}`}
      >
         {children}
      </label>
   );
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
   Paragraph4,
   Label,
};
