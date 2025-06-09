import { isDeepEqual } from "./isDeepEqual";

export const except = <TIn>(values: Array<TIn>, compareFn = isDeepEqual) => {
    return (x: TIn, ix: number) => values.every(v => !compareFn(x, v))
}
