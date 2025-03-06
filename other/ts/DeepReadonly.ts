type DeepReadonly<T> = keyof T extends never
    ? T
    : { readonly [k in keyof T]: DeepReadonly<T[k]> };


type DeepReadonlyV2<T> = T extends Function
    ? T
    : T extends object
        ? { readonly [Key in keyof T]: DeepReadonlyV2<T[Key]>}
        : T
