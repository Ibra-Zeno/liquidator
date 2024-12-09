"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/ui/accordion";

import { English } from "@/lib/faqEnglish";
import { Malay } from "@/lib/faqMalay";
import { Switch } from "@nextui-org/react";
import { Separator } from "@/components/shadcn/ui/separator";

const FAQAccordion = () => {
  const [isEnglish, setIsEnglish] = useState(true);

  // Function to toggle the language
  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  // Selecting the data based on the language
  const data = isEnglish ? English : Malay;
  return (
    <>
      <section className="mx-auto my-8 max-w-8xl sm:my-12">
        <Switch
          onValueChange={toggleLanguage}
          size={"sm"}
          className="flex justify-self-start px-4 text-sm"
        >
          Switch to {isEnglish ? "Bahasar Malaysia" : "English"}
        </Switch>
        <Accordion type="single" collapsible className="">
          {data.map((section, index) => (
            <div key={index}>
              {Object.entries(section).map(([title, items], sectionIndex) => (
                <div
                  key={sectionIndex}
                  className="grid-cols-6 gap-x-4 px-6 py-0 text-sm sm:grid md:py-8 md:text-base"
                >
                  <Separator
                    className="col-span-6 mb-7"
                    orientation="horizontal"
                  />
                  <h2 className="col-span-2 max-w-sm pt-2 text-lg font-bold leading-7 text-gray-800/90 sm:pt-4">
                    {title}
                  </h2>
                  <div className="col-span-4">
                    {items.map((item, itemIndex) => (
                      <AccordionItem
                        key={itemIndex}
                        value={`item-${index}-${sectionIndex}-${itemIndex}`}
                      >
                        <AccordionTrigger className="text-left font-medium text-slate-800/95">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-[15px] leading-7">
                          {item.a()}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </Accordion>
      </section>
    </>
  );
};

export default FAQAccordion;
