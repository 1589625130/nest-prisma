import { ValidationError, ValidationPipe } from '@nestjs/common';

export class Validate extends ValidationPipe {
  protected mapChildrenToValidationErrors(
    error: ValidationError,
    parentPath?: string,
  ): ValidationError[] {
    const errors = super.mapChildrenToValidationErrors(error, parentPath);
    console.log({ errors });
    errors.map((item) => {
      for (const itemElement in item.constraints) {
        item.constraints[itemElement] =
          item.property + '-' + item.constraints[itemElement];
      }
    });
    return errors;
  }
}
