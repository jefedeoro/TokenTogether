import { createSelector } from 'reselect'
import { get } from 'lodash'


const TokenName = state => get(state, token.fname, [])
export const tokenNameSelector = createSelector(TokenName, tn => tn)

const TokenSymbol = state => get(state, token.fsymbol, [])
export const tokenSymbolSelector = createSelector(TokenSymbol, ts => ts)

const TokenSupply = state => get(state, token.ftotalSupply, [])
export const tokenSupplySelector = createSelector(TokenSupply, st => st)