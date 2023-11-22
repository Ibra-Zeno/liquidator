import { RefreshCw } from "lucide-react";

export default function Loading() {
  return (
    <section className="flex min-h-[50vh] flex-col items-center justify-center align-middle">
      <RefreshCw className="mb-6 animate-spinner-ease-spin" size={50} />
      <h2 className=" text-2xl ">Loading</h2>
    </section>
  );
}
