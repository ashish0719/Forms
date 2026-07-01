import FormCard from "@/components/Cards/FormCard";
import Link from "next/link";

type Props = {
  section: any;
};

export default function FormSection({ section }: Props) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <Link
        href="/submission"
        className="rounded-xl bg-green-900 px-8 py-3 font-semibold text-white transition hover:bg-zinc-800"
      >
        {section.SubmissionButtonText}
      </Link>
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <h1 className="text-5xl font-bold text-zinc-900">{section.heading}</h1>

        <p className="mt-5 text-lg text-zinc-500">{section.description}</p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {section.forms.map((form: any) => (
          <FormCard key={form.id} form={form} />
        ))}
      </div>
    </section>
  );
}
