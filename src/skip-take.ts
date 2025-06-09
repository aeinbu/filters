
export const skip = <TIn>(n: number) => {
    return (x: TIn, ix: number) => ix >= n;
}

export const take = <TIn>(n: number) => {
    return (x: TIn, ix: number) => ix < n;
}
