import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UppercasePipe implements PipeTransform {
  transform(value: any) {
    if (typeof value === 'string') {
      return value.toUpperCase();
    }
  }
}
