import SubmissionRenderer from "@/components/Renderer/SubmissionRenderer";
import SearchBar from "@/components/Search/searchBar";
import Link from "next/link";

type Props = {
  section: any;
  forms: any[];
  submissions: any[];
};
export default function SubmissionPage({ section, forms, submissions }: Props) {
  return (
    <section className="min-h-screen bg-zinc-50 py-12">
      <div className="mx-auto mb-6 max-w-7xl px-6">
        <Link
          href="/form"
          className="inline-flex items-center rounded-xl bg-zinc-900 px-6 py-3 font-semibold text-white transition hover:bg-zinc-800"
        >
          ← Forms Page
        </Link>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-bold text-zinc-900">
              {section.heading}
            </h1>

            <p className="mt-2 text-zinc-600">{section.description}</p>
          </div>

          <div className="w-full md:w-[400px]">
            <SearchBar placeholder={section.searchplaceholder} />
          </div>
        </div>

        <SubmissionRenderer
          section={section}
          forms={forms}
          submissions={submissions}
          buttonText={section.detailsButtonText}
        />
      </div>
    </section>
  );
}
