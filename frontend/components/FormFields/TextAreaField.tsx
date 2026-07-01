export default function TextAreaField({
  field,
  register,
  errors,
  variant,
}: any) {
  return (
    <div>
      <label className={variant.label}>{field.label}</label>

      <textarea
        rows={5}
        placeholder={field.placeholder}
        className={variant.textarea}
        {...register(field.fieldName)}
      />

      {errors[field.fieldName] && (
        <p className={variant.error}>{errors[field.fieldName]?.message}</p>
      )}
    </div>
  );
}
