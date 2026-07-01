import type { Schema, Struct } from '@strapi/strapi';

export interface FormFieldsBooleanFields extends Struct.ComponentSchema {
  collectionName: 'components_form_fields_boolean_fields';
  info: {
    displayName: 'Boolean Fields';
  };
  attributes: {
    DefaultValue: Schema.Attribute.Boolean;
    fieldName: Schema.Attribute.String;
    label: Schema.Attribute.String;
    ShowInCard: Schema.Attribute.Boolean;
    validation: Schema.Attribute.Component<'shared.validation', false>;
  };
}

export interface FormFieldsCheckBox extends Struct.ComponentSchema {
  collectionName: 'components_form_fields_check_boxes';
  info: {
    displayName: 'CheckBox';
  };
  attributes: {
    fieldName: Schema.Attribute.String;
    label: Schema.Attribute.String;
    options: Schema.Attribute.Component<'shared.option', true>;
    validation: Schema.Attribute.Component<'shared.validation', false>;
  };
}

export interface FormFieldsInputArea extends Struct.ComponentSchema {
  collectionName: 'components_form_fields_input_areas';
  info: {
    displayName: 'Input Area';
  };
  attributes: {
    fieldName: Schema.Attribute.String;
    label: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
    ShowInCard: Schema.Attribute.Boolean;
    validation: Schema.Attribute.Component<'shared.validation', false>;
  };
}

export interface FormFieldsInputField extends Struct.ComponentSchema {
  collectionName: 'components_form_fields_input_fields';
  info: {
    displayName: 'Input Field';
  };
  attributes: {
    fieldName: Schema.Attribute.String;
    fieldType: Schema.Attribute.Enumeration<
      [
        'text',
        'email',
        'password',
        'number',
        'tel',
        'url',
        'search',
        'date',
        'datetime-local',
        'time',
        'month',
        'week',
        'color',
        'range',
        'file',
      ]
    >;
    label: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
    ShowInCard: Schema.Attribute.Boolean;
    validation: Schema.Attribute.Component<'shared.validation', false>;
  };
}

export interface FormFieldsRadioField extends Struct.ComponentSchema {
  collectionName: 'components_form_fields_radio_fields';
  info: {
    displayName: 'Radio Field';
  };
  attributes: {
    fieldName: Schema.Attribute.String;
    label: Schema.Attribute.String;
    options: Schema.Attribute.Component<'shared.option', true>;
    ShowInCard: Schema.Attribute.Boolean;
    validation: Schema.Attribute.Component<'shared.validation', false>;
  };
}

export interface FormFieldsSelect extends Struct.ComponentSchema {
  collectionName: 'components_form_fields_selects';
  info: {
    displayName: 'Select';
  };
  attributes: {
    fieldName: Schema.Attribute.String;
    label: Schema.Attribute.String;
    options: Schema.Attribute.Component<'shared.option', true>;
    ShowInCard: Schema.Attribute.Boolean;
    validation: Schema.Attribute.Component<'shared.validation', false>;
  };
}

export interface SectionsFormSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_form_sections';
  info: {
    displayName: 'form section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    forms: Schema.Attribute.Relation<'oneToMany', 'api::form.form'>;
    globalVariant: Schema.Attribute.Enumeration<
      ['Default', 'Card', 'Dark', 'Glass', 'Luxury']
    >;
    heading: Schema.Attribute.String;
    SubmissionButtonText: Schema.Attribute.String;
  };
}

export interface SectionsSubmissionSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_submission_sections';
  info: {
    displayName: 'Submission Section';
  };
  attributes: {
    cardsPerPage: Schema.Attribute.Integer;
    description: Schema.Attribute.Text;
    detailsButtonText: Schema.Attribute.String;
    FallbackFields: Schema.Attribute.Component<'shared.fallback-field', true>;
    heading: Schema.Attribute.String;
    searchplaceholder: Schema.Attribute.String;
  };
}

export interface SharedFallbackField extends Struct.ComponentSchema {
  collectionName: 'components_shared_fallback_fields';
  info: {
    displayName: 'Fallback Field';
  };
  attributes: {
    fieldName: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface SharedOption extends Struct.ComponentSchema {
  collectionName: 'components_shared_options';
  info: {
    displayName: 'Option';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SharedValidation extends Struct.ComponentSchema {
  collectionName: 'components_shared_validations';
  info: {
    displayName: 'Validation';
  };
  attributes: {
    maxLength: Schema.Attribute.Integer;
    maxLengthMessage: Schema.Attribute.String;
    minLength: Schema.Attribute.Integer;
    minLengthMessage: Schema.Attribute.String;
    required: Schema.Attribute.Boolean;
    requiredMessage: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'form-fields.boolean-fields': FormFieldsBooleanFields;
      'form-fields.check-box': FormFieldsCheckBox;
      'form-fields.input-area': FormFieldsInputArea;
      'form-fields.input-field': FormFieldsInputField;
      'form-fields.radio-field': FormFieldsRadioField;
      'form-fields.select': FormFieldsSelect;
      'sections.form-section': SectionsFormSection;
      'sections.submission-section': SectionsSubmissionSection;
      'shared.fallback-field': SharedFallbackField;
      'shared.option': SharedOption;
      'shared.validation': SharedValidation;
    }
  }
}
