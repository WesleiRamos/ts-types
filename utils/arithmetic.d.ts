import { Concat, ArrayFrom, Length, GTE } from "./index";

/** Soma dois numeros */
export type Add<A extends number, B extends number> = Length<
  Concat<ArrayFrom<A>, ArrayFrom<B>>
>;

/** Subtrai dois numeros */
export type Sub<A extends number, B extends number> =
  ArrayFrom<A> extends [...ArrayFrom<B>, ...infer U] ? Length<U> : 0;

/** Multiplica dois números */
export type Multiply<A extends number, B extends number> = B extends 0
  ? 0
  : Add<A, Multiply<A, Sub<B, 1>>>;

/** Divide dois números, retorna o quociente inteiro */
export type Div<
  A extends number,
  B extends number,
  Count extends number = 0,
> = B extends 0
  ? never
  : GTE<A, B> extends true
    ? Div<Sub<A, B>, B, Add<Count, 1>>
    : Count;

/**
 * Calcula o resto da divisão de dois números.
 * Formula:
 *   a - (b * (a / b))
 */
export type Mod<A extends number, B extends number> = Sub<
  A,
  Multiply<B, Div<A, B>>
>;
