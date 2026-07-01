export default function SelectField({ field, register, errors, variant }: any) {
  return (
    <div>
      <label className={variant.label}>{field.label}</label>

      <select className={variant.select} {...register(field.fieldName)}>
        <option value="">Select {field.label}</option>

        {field.options?.map((option: any) => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {errors[field.fieldName] && (
        <p className={variant.error}>{errors[field.fieldName]?.message}</p>
      )}
    </div>
  );
}
