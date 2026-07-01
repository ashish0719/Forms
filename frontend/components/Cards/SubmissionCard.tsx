import Link from "next/link";

type Props = {
  submission: any;
  form?: any;
  fallbackFields: any[];
  detailsButtonText: string;
};

export default function SubmissionCard({
  submission,
  form,
  fallbackFields,
  detailsButtonText,
}: Props) {
  const fields = form
    ? form.FormFields.filter((field: any) => field.ShowInCard)
    : fallbackFields;

  const formData = submission.data?.data ?? submission.data;

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow transition hover:shadow-lg">
      <h2 className="mb-6 text-3xl font-bold text-green-700">
        {form?.title ?? submission.form_name}
      </h2>

      <div className="space-y-5">
        {fields.map((field: any) => {
          const value = formData?.[field.fieldName];

          return (
            <div key={field.fieldName}>
              <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">
                {field.label}
              </p>

              <p className="mt-1 text-lg font-medium text-zinc-900">
                {typeof value === "boolean"
                  ? value
                    ? "Yes"
                    : "No"
                  : (value ?? "-")}
              </p>
            </div>
          );
        })}
      </div>

      <Link
        href={`/submission/${submission.id}`}
        className="mt-8 flex w-full items-center justify-center rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
      >
        {detailsButtonText}
      </Link>
    </div>
  );
}
