export type EnumSymbolType = "FUTURE"
export type EnumContractType = "PERPETUAL" | "CURRENT_MONTH" | "CURRENT_MONTH" | "NEXT_MONTH" | "CURRENT_QUARTER" | "NEXT_QUARTER" | "PERPETUAL_DELIVERING";
export type EnumContractStatus = "PENDING_TRADING" | "TRADING" | "PRE_DELIVERING" | "DELIVERING" | "DELIVERED" | "PRE_SETTLE" | "SETTLING" | "CLOSE";
export type EnumOrderStatus = "NEW" | "PARTIALLY_FILLED" | "FILLED" | "CANCELED" | "REJECTED" | "EXPIRED";
export type EnumOrderTypes = "LIMIT" | "MARKET" | "STOP" | "STOP_MARKET" | "TAKE_PROFIT" | "TAKE_PROFIT_MARKET" | "TRAILING_STOP_MARKET";
export type EnumOrderSide = "BUY" | "SELL";
export type EnumPositionSide = "BOTH" | "LONG" | "SHORT";
export type EnumTimeInForce = "GTC" | "IOC" | "FOK" | "GTX";
export type EnumWorkingType = "MARK_PRICE" | "CONTRACT_PRICE";
export type EnumNewOrderRespType = "ACK" | "RESULT";
export type EnumIntervals = "1m" | "3m" | "5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "6h" | "8h" | "12h" | "1d" | "3d" | "1w" | "1M";
export type EnumRateLimitType = "REQUEST_WEIGHT" | "ORDERS";
export type EnumRateLimitInterval = "MINUTE"
export type EnumMarginType = "ISOLATED" | "CROSSED";
export type EnumAutoCloseType = "LIQUIDATION" | "ADL";

export interface FuturesConstructor {
  api_key?: string;
  api_secret?: string;
  reconnectSleep?: number;
  recvWindow?: number;
  isTestNet?: boolean;
}

export interface FuturesJustRecvWindow {
  recvWindow?: number;
}

export interface FuturesDepth {
  symbol: string;
  limit?: number;
  recvWindow?: number;
}

export interface FuturesTrades {
  symbol: string;
  limit?: number;
  recvWindow?: number;
}

export interface FuturesHistoricalTrades {
  symbol: string;
  limit?: number;
  fromId?: number;
  recvWindow?: number;
}

export interface FuturesAggTrades {
  symbol: string;
  limit?: number;
  fromId?: number;
  startTime?: number;
  endTime?: number;
  recvWindow?: number;
}

export interface FuturesKlines {
  symbol: string;
  interval: EnumIntervals;
  startTime?: number;
  endTime?: number;
  limit?: number;
  recvWindow?: number;
}

export interface FuturesContinuousKlines {
  pair: string;
  contractType: EnumContractType;
  interval: EnumIntervals;
  startTime?: number;
  endTime?: number;
  limit?: number;
  recvWindow?: number;
}

export interface FuturesIndexPriceKlines {
  pair: string;
  interval: EnumIntervals;
  startTime?: number;
  endTime?: number;
  limit?: number;
  recvWindow?: number;
}

export interface FuturesMarkPriceKlines {
  symbol: string;
  interval: EnumIntervals;
  startTime?: number;
  endTime?: number;
  limit?: number;
  recvWindow?: number;
}

export interface FuturesPremiumIndex {
  symbol?: string;
  recvWindow?: number;
}

export interface FuturesFundingRate {
  symbol?: string;
  startTime?: number;
  endTime?: number;
  limit?: number;
  recvWindow?: number;
}

export interface Futures24hr {
  symbol?: string;
  recvWindow?: number;
}

export interface FuturesTickerPrice {
  symbol?: string;
  recvWindow?: number;
}

export interface FuturesTickerBookTicker {
  symbol?: string;
  recvWindow?: number;
}

export interface FuturesOpenInterest {
  symbol: string;
  recvWindow?: number;
}

export interface FuturesDataOpenInterestHist {
  symbol: string;
  period: EnumIntervals;
  limit?: number;
  startTime?: number;
  endTime?: number;
  recvWindow?: number;
}

export interface FuturesDataTopLongShortAccountRatio {
  symbol: string;
  period: EnumIntervals;
  limit?: number;
  startTime?: number;
  endTime?: number;
  recvWindow?: number;
}

export interface FuturesDataTopLongShortPositionRatio {
  symbol: string;
  period: EnumIntervals;
  limit?: number;
  startTime?: number;
  endTime?: number;
  recvWindow?: number;
}

export interface FuturesDataGlobalLongShortAccountRatio {
  symbol: string;
  period: EnumIntervals;
  limit?: number;
  startTime?: number;
  endTime?: number;
  recvWindow?: number;
}

export interface FuturesDataTakerLongShortRatio {
  symbol: string;
  period: EnumIntervals;
  limit?: number;
  startTime?: number;
  endTime?: number;
  recvWindow?: number;
}

export interface FuturesLvtKlines {
  symbol: string;
  interval: EnumIntervals;
  startTime?: number;
  endTime?: number;
  limit?: number;
  recvWindow?: number;
}

export interface FuturesIndexInfo {
  symbol?: string;
  recvWindow?: number;
}

export interface FuturesAssetIndex {
  symbol?: string;
  recvWindow?: number;
}

export interface FuturesGetPmExchangeInfo {
  symbol?: string;
  recvWindow?: number;
}

export interface FuturesPmAccountInfo {
  asset: string;
  recvWindow?: number;
}

export interface FuturesPostFuturesTransfer {
  asset: string;
  amount: number;
  type: number;
  recvWindow?: number;
}

export interface FuturesGetFuturesTransfer {
  asset: string;
  startTime?: number;
  endTime?: number;
  current?: number;
  size?: number;
  recvWindow?: number;
}

export interface FuturesPostPositionSideDual {
  dualSidePosition: string;
  recvWindow?: number;
}

export interface FuturesGetPositionSideDual {
  recvWindow?: number;
}

export interface FuturesPostMultiAssetsMargin {
  multiAssetsMargin: string;
  recvWindow?: number;
}

export interface FuturesGetMultiAssetsMargin {
  recvWindow?: number;
}

export interface FuturesPostOrder {
  symbol: string;
  side: EnumOrderSide;
  positionSide?: EnumPositionSide;
  type: EnumOrderTypes;
  timeInForce?: EnumTimeInForce;
  quantity: number;
  reduceOnly?: string;
  price?: number;
  newClientOrderId?: string;
  stopPrice?: number;
  closePosition?: string;
  activationPrice?: number;
  callbackRate?: number;
  workingType?: EnumWorkingType;
  priceProtect?: string;
  newOrderRespType?: EnumNewOrderRespType;
  recvWindow?: number;
}

export interface FuturesPostBatchOrders {
  batchOrders: Array<FuturesPostOrder>;
  recvWindow?: number;
}

export interface FuturesGetOrder {
  symbol: string;
  orderId: number;
  origClientOrderId: string;
  recvWindow?: number;
}

export interface FuturesDeleteOrder {
  symbol: string;
  orderId: number;
  origClientOrderId: string;
  recvWindow?: number;
}

export interface FuturesDeleteAllOpenOrders {
  symbol: string;
  recvWindow?: number;
}

export interface FuturesDeleteBatchOrders {
  symbol: string;
  orderIdList?: Array<number>;
  origClientOrderIdList?: Array<string>;
  recvWindow?: number;
}

export interface FuturesPostCountDownCancelAll {
  symbol: string;
  countdownTime: number;
  recvWindow?: number;
}

export interface FuturesGetOpenOrder {
  symbol: string;
  orderId?: number;
  origClientOrderId?: string;
  recvWindow?: number;
}

export interface FuturesGetOpenOrders {
  symbol?: string;
  recvWindow?: number;
}

export interface FuturesGetAllOrders {
  symbol: string;
  orderId?: number;
  startTime?: number;
  endTime?: number;
  limit?: number;
  recvWindow?: number;
}

export interface FuturesGetBalance {
  recvWindow?: number;
}

export interface FuturesGetAccount {
  recvWindow?: number;
}

export interface FuturesPostLeverage {
  symbol: string;
  leverage: number;
  recvWindow?: number;
}

export interface FuturesPostMarginType {
  symbol: string;
  marginType: EnumMarginType;
  recvWindow?: number;
}

export interface FuturesPostPositionMargin {
  symbol: string;
  positionSide?: EnumPositionSide;
  amount?: number;
  type?: number;
  recvWindow?: number;
}

export interface FuturesGetPositionMarginHistory {
  symbol: string;
  type?: string;
  startTime?: number;
  endTime?: number;
  limit?: number;
  recvWindow?: number;
}

export interface FuturesGetPositionRisk {
  symbol?: string;
  recvWindow?: number;
}

export interface FuturesGetUserTrades {
  symbol: string;
  startTime?: number;
  endTime?: number;
  fromId?: number;
  limit?: number;
  recvWindow?: number;
}

export interface FuturesGetIncome {
  symbol: string;
  incomeType: string;
  startTime?: number;
  endTime?: number;
  limit?: number;
  recvWindow?: number;
}

export interface FuturesGetLeverageBracket {
  symbol?: string;
  recvWindow?: number;
}

export interface FuturesGetADLQuantile {
  symbol?: string;
  recvWindow?: number;
}

export interface FuturesGetForceOrders {
  symbol?: string;
  autoCloseType?: EnumAutoCloseType;
  startTime?: number;
  endTime?: number;
  limit?: number;
  recvWindow?: number;
}

export interface FuturesGetApiTradingStatus {
  symbol?: string;
  recvWindow?: number;
}

export interface FuturesGetCommissionRate {
  symbol: string;
  recvWindow?: number;
}

export interface FuturesGetIncomeAsyn {
  startTime: number;
  endTime: number;
  recvWindow?: number;
}

export interface FuturesGetIncomeAsynId {
  downloadId: string;
  recvWindow?: number;
}

export interface FuturesPostListenKey {
  recvWindow?: number;
}

export interface FuturesPutListenKey {
  recvWindow?: number;
}

export interface FuturesDeleteListenKey {
  recvWindow?: number;
}