export default function TextInputField({
  field,
  register,
  errors,
  variant,
}: any) {
  return (
    <div>
      <label htmlFor={field.fieldName} className={variant.label}>
        {field.label}
      </label>

      <input
        id={field.fieldName}
        type={field.fieldType}
        placeholder={field.placeholder}
        className={variant.input}
        {...register(field.fieldName)}
      />

      {errors[field.fieldName] && (
        <p className={variant.error}>{errors[field.fieldName]?.message}</p>
      )}
    </div>
  );
}
