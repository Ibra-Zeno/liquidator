import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQAccordion from "@/components/ui/faq/FAQAccordion";
import CTA from "@/components/ui/CTA";
const FAQ: React.FC = () => {
  return (
    <>
      <section id="banner">
        <div className="relative overflow-hidden">
          <div className="relative bg-gradient-to-b from-secondary/30 to-transparent">
            <div className="mx-auto max-w-[85rem]  px-4 py-2 sm:px-6 md:py-16 lg:px-8">
              <div className="mx-auto max-w-4xl text-left">
                <p className="w-fit text-xs font-semibold italic leading-7 text-primary md:text-sm">
                  Find Your Answers
                </p>

                <div className="mt-2 max-w-2xl">
                  <h1 className="mt-1.5 text-3xl font-bold tracking-tight text-gray-900 sm:mt-2 sm:text-4xl">
                    Frequently Asked Questions
                  </h1>
                </div>

                <div className="mt-5 max-w-6xl">
                  <p className="mt-6 text-xs font-medium leading-5 text-gray-700 sm:text-sm sm:leading-7 xl:text-base xl:leading-8">
                    Here, you&apos;ll find answers to the most common questions
                    about our liquidation services, from how we source our
                    inventory to tips on purchasing and delivery details.
                    Whether you&apos;re new to liquidation or a seasoned buyer,
                    we aim to provide clear and helpful information to make your
                    experience seamless and rewarding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Breadcrumbs /> */}
      </section>
      <FAQAccordion />
      <CTA />
    </>
  );
};

export default FAQ;
