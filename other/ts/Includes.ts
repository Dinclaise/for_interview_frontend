
// your answers
type Includes<T extends readonly any[], U> = {
    [P in T[number]]: true
}[U] extends true ? true : false;



// var 2
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends
    (<T>() => T extends Y ? 1 : 2) ? true : false;

type Includes<T extends any[], U> = T extends [infer First, ...infer Rest] ? Equal<U, First> extends true ? true : Includes<Rest, U> : false;
