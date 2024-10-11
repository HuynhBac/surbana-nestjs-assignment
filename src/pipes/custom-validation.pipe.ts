import { ValidationPipe, BadRequestException, ValidationError } from '@nestjs/common';

export class CustomValidationPipe extends ValidationPipe {
  constructor() {
    super({
      exceptionFactory: (errors: ValidationError[]) => this.customExceptionFactory(errors)
    });
  }

  private customExceptionFactory(errors: ValidationError[]): BadRequestException {
    const formattedErrors = errors.map(error => {
      const constraints = Object.values(error.constraints || {}).join(', ');
      return {
        field: error.property,
        errors: constraints
      };
    });

    return new BadRequestException({
      status_code: 400,
      message: 'Invaid params!',
      errors: formattedErrors
    });
  }
}
