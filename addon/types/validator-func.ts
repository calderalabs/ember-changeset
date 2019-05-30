import { ValidationResult } from 'ember-changeset/types/validation-result';

export type ValidatorFunc = {
  (
    key: string,
    newValue: any,
    oldValue: any,
    changes: { [key: string]: any },
    content: object
  ): ValidationResult | Promise<ValidationResult>;
}
