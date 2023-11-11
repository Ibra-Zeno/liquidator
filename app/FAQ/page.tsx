import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQAccordion from "@/components/ui/faq/FAQAccordion";

const FAQ: React.FC = () => {
  return (
    <>
      <section id="banner">
        <div className="mx-auto grid max-w-2xl py-12 text-center text-lg tracking-wide">
          <span className="text-base font-semibold leading-7 text-indigo-600">
            Improve you asset management
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our mission is to provide a platform for all stakeholders in the
            property industry to collaborate and share information in a
            transparent manner.
          </p>
        </div>
        <Breadcrumbs />
      </section>
      <FAQAccordion />
    </>
  );
};

export default FAQ;
