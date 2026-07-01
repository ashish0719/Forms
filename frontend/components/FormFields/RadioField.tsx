export default function RadioField({ field, register, errors, variant }: any) {
  return (
    <div>
      <label className={variant.label}>{field.label}</label>

      <div className="flex gap-6">
        {field.options?.map((option: any) => {
          const inputId = `${field.fieldName}-${option.value}`;

          return (
            <label key={option.id} htmlFor={inputId} className={variant.label}>
              <input
                id={inputId}
                type="radio"
                value={option.value}
                {...register(field.fieldName)}
                className={variant.radio}
              />

              {option.label}
            </label>
          );
        })}
      </div>

      {errors[field.fieldName] && (
        <p className={variant.error}>{errors[field.fieldName]?.message}</p>
      )}
    </div>
  );
}
