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
import { Switch } from "@/components/shadcn/ui/switch";
import { Label } from "@/components/shadcn/ui/label";

const FAQAccordion = () => {
  const [isEnglish, setIsEnglish] = useState(false);

  // Function to toggle the language
  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  // Selecting the data based on the language
  const data = isEnglish ? English : Malay;
  return (
    <>
      <section className="mx-auto my-12 max-w-7xl">
        <div className="my-4 flex items-center justify-end space-x-2">
          <Label htmlFor="language-switch">
            Switch to {isEnglish ? "Bahasar Malaysia" : "English"}
          </Label>
          <Switch id="language-switch" onCheckedChange={toggleLanguage} />
        </div>
        <Accordion type="single" collapsible className="">
          {data.map((section, index) => (
            <div key={index}>
              {Object.entries(section).map(([title, items], sectionIndex) => (
                <div key={sectionIndex}>
                  <h2 className="text-3xl font-semibold">{title}</h2>
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
