/** Converte um tipo para numero */
export type ParseInt<S> = S extends `${infer Value extends number}`
  ? Value
  : never;
