import FormRenderer from "@/components/Renderer/FormRenderer";
import { formVariants } from "@/components/Variants/FormVariant";

export default function FormPage({
  form,
  globalVariant,
}: {
  form: any;
  globalVariant: string;
}) {
  const variantName = form.variant || globalVariant;

  const selectedVariant =
    formVariants[variantName as keyof typeof formVariants] ||
    formVariants.Default;

  return (
    <section className={selectedVariant.section}>
      <div className={selectedVariant.container}>
        <div className={selectedVariant.card}>
          <h1 className={selectedVariant.heading}>{form.title}</h1>

          <FormRenderer form={form} variant={selectedVariant} />
        </div>
      </div>
    </section>
  );
}
