import { ArrayFrom } from "./array";

/** Inverte o valor booleano */
export type Not<A extends boolean> = A extends true ? false : true;

/** Retorna true se A e B forem verdadeiros */
export type And<A extends boolean, B extends boolean> = A extends true
  ? B extends true
    ? true
    : false
  : false;

/** Retorna true se A ou B forem verdadeiros */
export type Or<A extends boolean, B extends boolean> = A extends true
  ? true
  : B extends true
    ? true
    : false;

/** Retorna true se ambos os valores forem iguais */
export type Equals<A extends unknown, B extends unknown> = A extends B
  ? B extends A
    ? true
    : false
  : false;

/** Verifica se A é maior que B */
export type GT<A extends number, B extends number> =
  ArrayFrom<A> extends [...ArrayFrom<B>, ...infer _Rest]
    ? Not<Equals<A, B>>
    : false;

/** Verifica se A é maior ou igual a B */
export type GTE<A extends number, B extends number> = Or<
  GT<A, B>,
  Equals<A, B>
>;

/** Verifica se A é menor que B */
export type LT<A extends number, B extends number> = Not<GTE<A, B>>;

/** Verifica se A é menor ou igual a B */
export type LTE<A extends number, B extends number> = Not<GT<A, B>>;
