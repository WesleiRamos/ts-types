import {
  GTE,
  Append,
  Length,
  Every,
  Replace,
  StrToArrayNum,
  Add,
  Sub,
  Multiply,
  Mod,
  Equals,
  And,
} from "./utils/index";

/** Calcula a soma dos produtos */
type SumProduct<N extends number[], I extends number> = N extends [
  infer Head extends number,
  ...infer Tail extends number[],
]
  ? Add<SumProduct<Tail, Sub<I, 1>>, Multiply<Head, I>>
  : 0;

/** Obtém o digito verificador */
type ExpectedDigit<N extends number[], I extends number> =
  Mod<SumProduct<N, I>, 11> extends infer Rest extends number
    ? GTE<Rest, 2> extends true
      ? Sub<11, Rest>
      : 0
    : never;

/** Remove os pontos do CPF */
type NormalizeCPF<CPF extends string> = Replace<Replace<CPF, ".", "">, "-", "">;

/** Extrai os numeros do cpf e separa os digitos verificadores */
type ParseCPF<CPF extends string> =
  NormalizeCPF<CPF> extends infer Normalized extends string
    ? StrToArrayNum<Normalized> extends infer Array extends number[]
      ? Equals<Length<Array>, 11> extends false
        ? never
        : Every<Array, Array[0]> extends true
          ? never
          : Array extends [...infer R, infer STL, infer L]
            ? [R, [STL, L]]
            : never
      : never
    : never;

/** ... */
export type ValidateCPF<CPF extends string> =
  ParseCPF<CPF> extends [infer N extends number[], infer D extends number[]]
    ? And<
        Equals<ExpectedDigit<N, 10>, D[0]>,
        Equals<ExpectedDigit<Append<N, D[0]>, 11>, D[1]>
      >
    : false;
