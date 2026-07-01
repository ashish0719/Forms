export default function BooleanField({ field, register, errors }: any) {
  return (
    <div>
      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          defaultChecked={field.DefaultValue}
          {...register(field.fieldName)}
        />

        <span>{field.label}</span>
      </label>

      {errors[field.fieldName] && (
        <p className="mt-1 text-sm text-red-500">
          {errors[field.fieldName].message}
        </p>
      )}
    </div>
  );
}
