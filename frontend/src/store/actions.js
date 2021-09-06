export function TokenName(fname) {
    return{
        type: 'TOKEN_NAME',
        fname
    }
}
export function TokenSymbol(fsymbol) {
    return{
        type: 'TOKEN_SYM',
        fsymbol
    }
}
export function TotalSupply(ftotalSupply) {
    return{
        type: 'TOTAL_SUPPLY',
        ftotalSupply
    }
}