import { FC } from "react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
interface pageProps {}

const About: FC<pageProps> = ({}) => {
  return (
    <main>
      <section id="banner">
        <div className="mx-auto grid max-w-2xl gap-y-8 py-12 text-center text-lg tracking-wide">
          <span className=" font-semibold">Improve you asset management</span>
          <h2 className="-mt-2 text-6xl font-bold">About Us</h2>
          <p>
            Our mission is to provide a platform for all stakeholders in the
            property industry to collaborate and share information in a
            transparent manner.
          </p>
        </div>
        <Breadcrumbs />
      </section>
    </main>
  );
};

export default About;
