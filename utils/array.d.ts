import { And, Equals } from "./index";

/** Insere um elemento em um array */
export type Append<T extends unknown[], I> = [...T, I];

/** Concatena 2 arrays */
export type Concat<A extends unknown[], B extends unknown[]> = [...A, ...B];

/** Retorna o tamanho de um array */
export type Length<T extends unknown> = T extends {
  length: infer L extends number;
}
  ? L
  : never;

/** Cria um array de tamanho N */
export type ArrayFrom<N extends number, T extends unknown[] = []> =
  Length<T> extends N ? T : ArrayFrom<N, Append<T, any>>;

/** O elemento está contido no array? */
export type InArray<A extends unknown[], E extends unknown> = A extends [
  infer Head,
  ...infer Tail,
]
  ? Equals<Head, E> extends true
    ? true
    : InArray<Tail, E>
  : false;

/** Remove elementos duplicados do array */
export type Uniques<A extends unknown[]> = A extends [infer Head, ...infer Tail]
  ? Head extends Tail[number]
    ? Uniques<Tail>
    : [Head, ...Uniques<Tail>]
  : [];

/** Checa se os elementos do array são iguais */
type Every<N extends unknown[], V extends unknown> = N extends [
  infer Head,
  ...infer Tail extends unknown[],
]
  ? Equals<V, Head> extends true
    ? Every<Tail, V>
    : false
  : true;
