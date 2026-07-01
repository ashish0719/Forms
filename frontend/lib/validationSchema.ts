import { z } from "zod";

export function validationSchema(fields: any[]) {
  const shape: Record<string, any> = {};

  fields.forEach((field) => {
    const validation = field.validation || {};

    switch (field.__component) {
      case "form-fields.input-field": {
        let validator: any;

        switch (field.fieldType) {
          case "email":
            validator = z.string();

            if (validation.required) {
              validator = validator.min(
                1,
                validation.requiredMessage || "Email is required"
              );
            }

            validator = validator.email(
              validation.patternMessage || "Invalid email address"
            );

            shape[field.fieldName] = validator;
            break;

          case "number":
            validator = z.coerce.number();

            if (validation.min != null) {
              validator = validator.min(
                validation.min,
                validation.minMessage || `Minimum value is ${validation.min}`
              );
            }

            if (validation.max != null) {
              validator = validator.max(
                validation.max,
                validation.maxMessage || `Maximum value is ${validation.max}`
              );
            }

            shape[field.fieldName] = validator;
            break;

          case "text":
          case "password":
          case "phone":
          case "date":
          default:
            validator = z.string();

            if (validation.required) {
              validator = validator.min(
                1,
                validation.requiredMessage || "This field is required"
              );
            }

            if (validation.minLength != null) {
              validator = validator.min(
                validation.minLength,
                validation.minLengthMessage
              );
            }

            if (validation.maxLength != null) {
              validator = validator.max(
                validation.maxLength,
                validation.maxLengthMessage
              );
            }

            if (validation.pattern) {
              validator = validator.regex(
                new RegExp(validation.pattern),
                validation.patternMessage || "Invalid format"
              );
            }

            shape[field.fieldName] = validator;
            break;
        }

        break;
      }

      case "form-fields.text-area": {
        let validator = z.string();

        if (validation.required) {
          validator = validator.min(
            1,
            validation.requiredMessage || "This field is required"
          );
        }

        if (validation.minLength != null) {
          validator = validator.min(
            validation.minLength,
            validation.minLengthMessage
          );
        }

        if (validation.maxLength != null) {
          validator = validator.max(
            validation.maxLength,
            validation.maxLengthMessage
          );
        }

        shape[field.fieldName] = validator;
        break;
      }

      case "form-fields.select": {
        shape[field.fieldName] = validation.required
          ? z.string().min(
              1,
              validation.requiredMessage || "Please select an option"
            )
          : z.string().optional();

        break;
      }

      case "form-fields.radio-field": {
        shape[field.fieldName] = validation.required
          ? z.string().min(
              1,
              validation.requiredMessage || "Please select an option"
            )
          : z.string().optional();

        break;
      }

      case "form-fields.check-box": {
        let validator = z.array(z.string());

        if (validation.required) {
          validator = validator.min(
            1,
            validation.requiredMessage ||
              "Please select at least one option"
          );
        }

        if (validation.minLength != null) {
          validator = validator.min(
            validation.minLength,
            validation.minLengthMessage
          );
        }

        if (validation.maxLength != null) {
          validator = validator.max(
            validation.maxLength,
            validation.maxLengthMessage
          );
        }

        shape[field.fieldName] = validator;
        break;
      }

      case "form-fields.file-upload": {
        let validator = z.any();

        if (validation.required) {
          validator = validator.refine(
            (file) => file instanceof File,
            validation.requiredMessage || "Please upload a file"
          );
        }

        shape[field.fieldName] = validator;
        break;
      }
      case "form-fields.boolean-fields": {
  shape[field.fieldName] = z.boolean();

  break;
}

      default:
        break;
    }
  });

  return z.object(shape);
}