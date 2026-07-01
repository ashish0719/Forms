"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import TextInputField from "@/components/FormFields/TextInputField";
import RadioField from "@/components/FormFields/RadioField";
import CheckboxField from "@/components/FormFields/CheckboxField";
import SelectField from "@/components/FormFields/SelectField";
import TextAreaField from "@/components/FormFields/TextAreaField";
import BooleanField from "../FormFields/BooleanField";
import { submitForm } from "@/app/actions/formActions";

import { validationSchema } from "@/lib/validationSchema";

export default function FormRenderer({
  form,
  variant,
}: {
  form: any;
  variant: any;
}) {
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const schema = validationSchema(form.FormFields);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  const components: Record<string, any> = {
    "form-fields.input-field": TextInputField,
    "form-fields.radio-field": RadioField,
    "form-fields.check-box": CheckboxField,
    "form-fields.select": SelectField,
    "form-fields.boolean-fields": BooleanField,
    "form-fields.text-area": TextAreaField,
  };

  const onSubmit = async (data: any) => {
    try {
      const response = await submitForm({
        formName: form.slug,
        data,
      });

      console.log(response);

      router.push("/submission");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {form.FormFields.map((field: any) => {
        const Component = components[field.__component];

        return Component ? (
          <Component
            key={`${field.__component}-${field.fieldName}-${field.id}`}
            field={field}
            register={register}
            errors={errors}
            variant={variant}
          />
        ) : null;
      })}

      {submitted && (
        <p className="text-center font-medium text-green-600">
          ✓ Response submitted successfully!
        </p>
      )}

      <div className="flex justify-center">
        <button type="submit" className={variant.button}>
          {form.submitButtonText}
        </button>
      </div>
    </form>
  );
}
