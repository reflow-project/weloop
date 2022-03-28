import { isUrlString } from 'fe/lib/helpers/data';
import { Schema } from 'yup';

export const TestUrlOrFile: Parameters<Schema<File | string>['test']> = ([
  'imageurl',
  'need a file or an url',
  (val: File | string) => {
    return !val
      ? true
      : typeof val === 'string'
      ? isUrlString(val)
      : val instanceof File;
  }
] as any) as Parameters<Schema<any>['test']>;
