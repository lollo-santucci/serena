import React from 'react';

type SectionProps = {
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <section className="h-screen flex flex-col p-6">
      {children}
    </section>
  );
};

export default Section;
