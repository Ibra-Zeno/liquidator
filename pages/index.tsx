import { GetStaticProps } from "next";
import Seo from "@/components/Seo";
import Hero from "@/components/ui/index/Hero";
import ServicesTeaser from "@/components/ui/index/ServicesTeaser";
import WhoWeWorkFor from "@/components/ui/index/WhoWeWorkFor";
import Process from "@/components/ui/index/Process";
import CTA from "@/components/ui/CTA";
import { fetchServices, Service } from "@/lib/sanityQueries";

interface IndexProps {
  services: Service[];
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const services = await fetchServices();
  return {
    props: { services },
    revalidate: 3600,
  };
};

const Index: React.FC<IndexProps> = ({ services }) => {
  return (
    <>
      <Seo
        title="Corporate Recovery & Insolvency Specialists"
        description="Licensed liquidators and corporate recovery specialists in Kuala Lumpur, guiding Malaysian businesses through winding-up, receivership and stalled projects."
        path="/"
      />
      <Hero />
      <ServicesTeaser services={services} />
      <WhoWeWorkFor />
      <Process />
      <CTA />
    </>
  );
};

export default Index;
