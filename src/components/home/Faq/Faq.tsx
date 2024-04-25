import React, { useState } from "react";

interface FAQItem {
  title: string;
  content: string;
}

interface AccordionProps {
  data: FAQItem[];
}

const Accordion: React.FC<AccordionProps> = ({ data }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col gap-5 px-5 lg:px-52 mb-12">
      <h1 className="text-[32px] font-semibold leading-[48px]">FAQ</h1>
      <div className="text-center font-normal text-lg mb-5">
        We are a huge marketplace dedicated to connecting great artists of all
        CARDIFY with their fans and unique token collectors!
      </div>
      <div className="mx-auto flex w-full flex-col items-center justify-center">
        {data.map((item, index) => (
          <div className="w-full" key={index}>
            <div
              className="w-full cursor-pointer bg-transparent shadow-sm"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex h-16 select-none flex-row items-center justify-between text-left md:h-16">
                <h5 className="flex-1 text-sm font-normal leading-tight sm:text-lg md:text-lg">
                  {item.title}
                </h5>
                <div className="flex h-6 w-6 items-center justify-center rounded-full">
                  {expandedIndex === index ? "-" : "+"}
                </div>
              </div>
              <div
                className={`overflow-hidden pt-0 transition-[max-height] duration-500 ease-in ${
                  expandedIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="pb-4 text-left text-xs font-normal tracking-[0.01em] opacity-60 sm:text-sm leading-[28px]">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
