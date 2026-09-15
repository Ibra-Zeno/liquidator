import {
  PortableText as PortableTextReact,
  type PortableTextComponents,
} from "@portabletext/react";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-3 last:mb-0">{children}</p>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-3 list-inside list-disc space-y-1 last:mb-0">
        {children}
      </ul>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-text">{children}</strong>
    ),
  },
};

const PortableText: React.FC<{ value: any }> = ({ value }) => {
  if (!value) return null;
  return <PortableTextReact value={value} components={components} />;
};

export default PortableText;
