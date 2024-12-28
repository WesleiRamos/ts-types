import { ParseInt } from "./index";

export type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

/** ? */
export type IsDigit<S extends string> = S extends Digit ? true : false;

/** Divide a string */
export type Split<T extends string, M extends string> = T extends ""
  ? []
  : T extends `${infer S}${M}${infer E}`
    ? [S, ...Split<E, M>]
    : [T];

/** Troca caracteres de uma string */
export type Replace<
  T extends string,
  N extends string,
  R extends string,
> = T extends `${infer Prefix}${N}${infer Sufix}`
  ? Replace<`${Prefix}${R}${Sufix}`, N, R>
  : T;

/** Obtém cada caractere digito da string e insere num array */
export type StrToArrayNum<
  P extends string,
  T extends number[] = [],
> = P extends `${infer Head}${infer Tail}`
  ? IsDigit<Head> extends true
    ? [ParseInt<Head>, ...StrToArrayNum<Tail, T>]
    : never
  : T;
