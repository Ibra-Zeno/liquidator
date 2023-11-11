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
      <section className="mx-auto my-12 max-w-7xl">
        <Switch
          onValueChange={toggleLanguage}
          size={"md"}
          className="flex justify-self-end"
        >
          Switch to {isEnglish ? "Bahasar Malaysia" : "English"}
        </Switch>
        <Accordion type="single" collapsible className="">
          {data.map((section, index) => (
            <div key={index}>
              {Object.entries(section).map(([title, items], sectionIndex) => (
                <div key={sectionIndex} className="py-8">
                  <h2 className="pb-2 text-3xl font-semibold">{title}</h2>
                  {items.map((item, itemIndex) => (
                    <AccordionItem
                      key={itemIndex}
                      value={`item-${index}-${sectionIndex}-${itemIndex}`}
                    >
                      <AccordionTrigger>{item.q}</AccordionTrigger>
                      <AccordionContent className="text-base leading-7">
                        {item.a()}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
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
