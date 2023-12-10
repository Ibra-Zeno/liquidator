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
                <div
                  key={sectionIndex}
                  className="grid grid-cols-6 gap-x-4 px-6 py-8"
                >
                  <Separator
                    className="col-span-6 mb-7"
                    orientation="horizontal"
                  />
                  <h2 className="col-span-2 pt-4 font-bold">{title}</h2>
                  <div className="col-span-4">
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
