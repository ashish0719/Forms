import { notFound } from "next/navigation";

import PageRenderer from "@/components/Renderer/PageRenderer";
import FormPage from "@/components/Pages/FormPage";
import SubmissionPage from "@/components/Pages/SubmissionPage";
import SubmissionDetailPage from "@/components/Pages/SubmissionDetailPage";

import { getPage } from "@/lib/pageApi";
import {
  getSubmissions,
  searchSubmissions,
  getSubmissionById,
} from "@/app/actions/submissionAction";

type Props = {
  params: Promise<{
    slug: string[];
  }>;

  searchParams: Promise<{
    search?: string;
    page?: string;
  }>;
};

export default async function DynamicPage({ params, searchParams }: Props) {
  const { slug } = await params;

  const { search, page: currentPageParam } = await searchParams;

  switch (slug[0]) {
    case "form": {
      const formPage = await getPage("form");

      if (!formPage) {
        notFound();
      }

      if (slug.length === 1) {
        return <PageRenderer sections={formPage.sections} />;
      }

      const formSection = formPage.sections.find(
        (section: any) => section.__component === "sections.form-section",
      );

      if (!formSection) {
        notFound();
      }

      const form = formSection.forms.find((item: any) => item.slug === slug[1]);

      if (!form) {
        notFound();
      }

      return <FormPage form={form} globalVariant={formSection.globalVariant} />;
    }

    case "submission": {
      const submissionPage = await getPage("submission");

      if (!submissionPage) {
        notFound();
      }

      const submissionSection = submissionPage.sections.find(
        (section: any) => section.__component === "sections.submission-section",
      );

      if (slug.length === 2) {
        const submission = await getSubmissionById(slug[1]);

        return <SubmissionDetailPage submission={submission} />;
      }

      const formPage = await getPage("form");

      if (!formPage) {
        notFound();
      }

      const formSection = formPage.sections.find(
        (section: any) => section.__component === "sections.form-section",
      );

      if (!formSection) {
        notFound();
      }

      const currentPage = Number(currentPageParam) || 1;

      const response =
        search && search.trim() !== ""
          ? await searchSubmissions(
              search,
              currentPage,
              submissionSection.cardsPerPage,
            )
          : await getSubmissions({
              page: currentPage,
              limit: submissionSection.cardsPerPage,
            });

      return (
        <SubmissionPage
          section={submissionSection}
          forms={formSection.forms}
          submissions={response.data}
        />
      );
    }

    default:
      break;
  }

  const pageSlug = slug.join("/");

  const cmsPage = await getPage(pageSlug);

  if (!cmsPage) {
    notFound();
  }

  return <PageRenderer sections={cmsPage.sections} />;
}
