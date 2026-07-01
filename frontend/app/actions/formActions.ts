"use server";

type SubmitFormProps = {
  formName: string;
  data: Record<string, any>;
};

export async function submitForm({
  formName,
  data,
}: SubmitFormProps) {
  const response = await fetch(
    `${process.env.BASE_URL}/api/public/forms`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        form_name: formName,
        ...data,
      }),
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to submit form");
  }

  return await response.json();
}