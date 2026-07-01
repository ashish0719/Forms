import Link from "next/link";

type Props = {
  form: any;
};

export default function FormCard({ form }: Props) {
  return (
    <div className="group flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:shadow-xl">
      <div>
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-2xl">
          📝
        </div>

        <h2 className="text-2xl font-bold text-zinc-900">{form.title}</h2>

        <p className="mt-3 text-sm leading-6 text-zinc-500">
          {form.cardDescription ??
            "Complete this form by providing the required information."}
        </p>

        <div className="mt-6">
          <span className="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            {form.FormFields.length} Fields
          </span>
        </div>
      </div>

      <Link
        href={`/form/${form.slug}`}
        className="mt-8 flex items-center justify-center rounded-xl bg-green-600 py-3 font-semibold text-white transition-all duration-300 hover:bg-green-700"
      >
        {form.cardButtonText ?? "Open Form"}
      </Link>
    </div>
  );
}
