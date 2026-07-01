import SubmissionCard from "@/components/Cards/SubmissionCard";

type Props = {
  submissions: any[];
  section: any;
  forms: any[];
  buttonText: string;
};

export default function SubmissionRenderer({
  submissions,
  section,
  forms,
  buttonText,
}: Props) {
  const formMap: Record<string, any> = {};

  forms.forEach((form: any) => {
    formMap[form.slug] = form;
  });

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {submissions.map((submission: any) => (
        <SubmissionCard
          key={submission.id}
          submission={submission}
          form={formMap[submission.form_name]}
          fallbackFields={section.FallbackFields}
          detailsButtonText={buttonText}
        />
      ))}
    </div>
  );
}
