import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/ui/accordion";
import { Switch } from "@/components/shadcn/ui/switch";
import { Separator } from "@/components/shadcn/ui/separator";
import PortableText from "@/components/ui/PortableText";

export interface FaqItem {
  _id: string;
  category: string;
  categoryMs?: string;
  order: number;
  question: string;
  answer: any;
  questionMs?: string;
  answerMs?: any;
}

interface FAQAccordionProps {
  items: FaqItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [isEnglish, setIsEnglish] = useState(true);

  // Group items by category, preserving the order categories first appear in
  // (items already arrive sorted by a single global "order" field).
  const sections = new Map<string, FaqItem[]>();
  for (const item of items) {
    const list = sections.get(item.category) ?? [];
    list.push(item);
    sections.set(item.category, list);
  }

  return (
    <section className="container mx-auto my-8 max-w-[1120px] px-4 sm:my-12 lg:px-8">
      <label className="flex w-fit items-center gap-2.5 justify-self-start text-sm text-text/80">
        <Switch
          checked={!isEnglish}
          onCheckedChange={(checked) => setIsEnglish(!checked)}
        />
        Switch to {isEnglish ? "Bahasa Malaysia" : "English"}
      </label>
      <Accordion type="single" collapsible>
        {Array.from(sections.entries()).map(([category, sectionItems]) => (
          <div
            key={category}
            className="grid-cols-6 gap-x-4 py-0 text-sm sm:grid md:py-8 md:text-base"
          >
            <Separator
              className="col-span-6 mb-7 bg-black/10"
              orientation="horizontal"
            />
            <h2 className="col-span-2 max-w-sm pt-2 font-serif text-lg font-medium leading-7 text-text sm:pt-4">
              {isEnglish
                ? category
                : sectionItems[0]?.categoryMs || category}
            </h2>
            <div className="col-span-4">
              {sectionItems.map((item) => (
                <AccordionItem
                  key={item._id}
                  value={item._id}
                  className="border-black/10"
                >
                  <AccordionTrigger className="text-left font-medium text-text">
                    {isEnglish ? item.question : item.questionMs || item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[15px] leading-7 text-text/70">
                    <PortableText
                      value={
                        isEnglish ? item.answer : item.answerMs || item.answer
                      }
                    />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </div>
          </div>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQAccordion;
