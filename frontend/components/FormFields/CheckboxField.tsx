export default function CheckboxField({
  field,
  register,
  errors,
  variant,
}: any) {
  return (
    <div>
      <label className={variant.label}>{field.label}</label>

      <div className="flex flex-wrap gap-4">
        {field.options?.map((option: any) => (
          <label key={option.id} className={variant.label}>
            <input
              type="checkbox"
              value={option.value}
              {...register(field.fieldName)}
              className={variant.checkbox}
            />

            {option.label}
          </label>
        ))}
      </div>

      {errors[field.fieldName] && (
        <p className={variant.error}>{errors[field.fieldName]?.message}</p>
      )}
    </div>
  );
}
