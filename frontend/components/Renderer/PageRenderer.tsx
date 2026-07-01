import FormSection from "@/components/Section/FormSection";

type Props = {
  sections: any[];
};

export default function PageRenderer({ sections }: Props) {
  return (
    <>
      {sections.map((section) => {
        switch (section.__component) {
          case "sections.form-section":
            return <FormSection key={section.id} section={section} />;

          default:
            return null;
        }
      })}
    </>
  );
}
