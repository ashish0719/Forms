import Link from "next/link";
type Props = {
  submission: Record<string, any>;
};

export default function SubmissionDetailPage({ submission }: Props) {
  const formData =
    typeof submission.data === "object" &&
    submission.data !== null &&
    "data" in submission.data
      ? submission.data.data
      : submission.data;

  return (
    <section className="min-h-screen bg-zinc-100 py-12">
      <div className="container mx-auto mb-6 max-w-3xl px-4">
        <Link
          href="/submission"
          className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-3 font-medium text-white transition hover:bg-green-700"
        >
          ← Back to Submissions
        </Link>
      </div>
      <div className="container mx-auto max-w-3xl px-4">
        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
          <div className="bg-green-600 px-8 py-6">
            <h1 className="text-4xl font-bold capitalize text-white">
              {String(submission.form_name).replaceAll("-", " ")}
            </h1>
          </div>

          <div className="space-y-5 p-8">
            {Object.entries(formData ?? {}).map(([key, value]) => (
              <div
                key={key}
                className="flex items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50 px-6 py-4"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
                  {key.replaceAll("_", " ")}
                </p>

                <p className="text-lg font-medium text-zinc-900">
                  {typeof value === "boolean"
                    ? value
                      ? "Yes"
                      : "No"
                    : String(value)}
                </p>
              </div>
            ))}

            <div className="my-8 border-t" />

            {Object.entries(submission)
              .filter(([key]) => key !== "data")
              .map(([key, value]) => (
                <div
                  key={key}
                  className="flex items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50 px-6 py-4"
                >
                  <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
                    {key.replaceAll("_", " ")}
                  </p>

                  <p className="break-all text-right text-lg font-medium text-zinc-900">
                    {String(value)}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
