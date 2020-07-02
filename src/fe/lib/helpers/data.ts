export type UrlString = string; //& { readonly _: unique symbol };
export const URL_REGEX = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
export const isUrlString = (_: any): _ is UrlString => 'string' === typeof _ && URL_REGEX.test(_);
