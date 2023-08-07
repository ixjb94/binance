export interface CoinMConstructor {
    api_key?: string
    api_secret?: string
    recvWindow?: number
    reconnectSleep?: number
    isTestNet?: boolean
}

export type EnumCoinmSymbolType = "DELIVERY_CONTRACT" | "PERPETUAL_CONTRACT";
export type EnumCoinmContractType = "PERPETUAL" | "CURRENT_QUARTER" | "NEXT_QUARTER" | "CURRENT_QUARTER_DELIVERING" | "NEXT_QUARTER_DELIVERING" | "PERPETUAL_DELIVERING";
export type EnumCoinmContractStatus = "PENDING_TRADING" | "TRADING" | "PRE_DELIVERING" | "DELIVERING" | "DELIVERED";
export type EnumCoinmOrderStatus = "NEW" | "PARTIALLY_FILLED" | "FILLED" | "CANCELED" | "EXPIRED";
export type EnumCoinmOrderType = "LIMIT" | "MARKET" | "STOP" | "STOP_MARKET" | "TAKE_PROFIT" | "TAKE_PROFIT_MARKET" | "TRAILING_STOP_MARKET";
export type EnumCoinmOrderSide = "BUY" | "SELL";
export type EnumCoinmPositionSide = "BOTH" | "LONG" | "SHORT";
export type EnumCoinmTimeInForce = "GTC" | "IOC" | "FOK" | "GTX";
export type EnumCoinmWorkingType = "MARK_PRICE" | "CONTRACT_PRICE";
export type EnumCoinmNewOrderRespType = "ACK" | "RESULT";
export type EnumCoinmIntervals = "1m" | "3m" | "5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "6h" | "8h" | "12h" | "1d" | "3d" | "1w" | "1M";
export type EnumCoinmRateLimitType = "REQUEST_WEIGHT" | "ORDERS";
export type EnumCoinmRateLimitInterval = "MINUTE"

export interface CoinmPing {
    recvWindow?: number;
}

export interface CoinmTime {
    recvWindow?: number;
}

export interface CoinmExchangeInfo {
    recvWindow?: number;
}

export interface CoinmDepth {
    symbol: string;
    limit?: number;
    recvWindow?: number;
}

export interface CoinmTrades {
    symbol: string;
    limit?: number;
    recvWindow?: number;
}

export interface CoinmHistoricalTrades {
    symbol: string;
    limit?: number;
    fromId?: number;
    recvWindow?: number;
}

export interface CoinmAggTrades {
    symbol: string;
    fromId?: number;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
}

export interface CoinmPremiumIndex {
    symbol?: string;
    pair?: string;
    recvWindow?: number;
}

export interface CoinmFundingRate {
    symbol: string;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
}

export interface CoinmKlines {
    symbol: string;
    interval: EnumCoinmIntervals;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
}

export interface CoinmContinuousKlines {
    pair: string;
    contractType: EnumCoinmContractType;
    interval: EnumCoinmIntervals;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
}

export interface CoinmIndexPriceKlines {
    pair: string;
    interval: EnumCoinmIntervals;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
}

export interface CoinmMarkPriceKlines {
    symbol: string;
    interval: EnumCoinmIntervals;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
}

export interface CoinmTicker24hr {
    symbol?: string;
    pair?: string;
    recvWindow?: number;
}

export interface CoinmTickerPrice {
    symbol?: string;
    pair?: string;
    recvWindow?: number;
}

export interface CoinmTickerBookTicker {
    symbol?: string;
    pair?: string;
    recvWindow?: number;
}

export interface CoinmOpenInterest {
    symbol: string;
    recvWindow?: number;
}

export interface CoinmFuturesDataOpenInterestHist {
    pair: string;
    contractType: EnumCoinmContractType;
    period: "5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "6h" | "12h" | "1d";
    limit?: number;
    startTime?: number;
    endTime?: number;
    recvWindow?: number;
}

export interface CoinmFuturesDataTopLongShortAccountRatio {
    pair: string;
    period: "5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "6h" | "12h" | "1d";
    limit?: number;
    startTime?: number;
    endTime?: number;
    recvWindow?: number;
}

export interface CoinmFuturesDataTopLongShortPositionRatio {
    pair: string;
    period: "5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "6h" | "12h" | "1d";
    limit?: number;
    startTime?: number;
    endTime?: number;
    recvWindow?: number;
}

export interface CoinmFuturesDataGlobalLongShortAccountRatio {
    pair: string;
    period: "5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "6h" | "12h" | "1d";
    limit?: number;
    startTime?: number;
    endTime?: number;
    recvWindow?: number;
}

export interface CoinmFuturesDataTakerBuySellVol {
    pair: string;
    contractType: "ALL" | "CURRENT_QUARTER" | "NEXT_QUARTER" | "PERPETUAL";
    period: "5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "6h" | "12h" | "1d";
    limit?: number;
    startTime?: number;
    endTime?: number;
    recvWindow?: number;
}

export interface CoinmFuturesDataBasis {
    pair: string;
    contractType: "CURRENT_QUARTER" | "NEXT_QUARTER" | "PERPETUAL";
    period: "5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "6h" | "12h" | "1d";
    limit?: number;
    startTime?: number;
    endTime?: number;
    recvWindow?: number;
}

export interface CoinmPostPositionSideDual {
    dualSidePosition: "true" | "false";
    recvWindow?: number;
}

export interface CoinmPositionSideDual {
    recvWindow?: number;
}

export interface CoinmPostOrder {
    symbol: string;
    side: EnumCoinmOrderSide;
    positionSide?: EnumCoinmPositionSide;
    type: EnumCoinmOrderType;
    timeInForce?: EnumCoinmTimeInForce;
    quantity: number;
    reduceOnly?: "true" | "false";
    price?: number;
    newClientOrderId?: string;
    stopPrice?: number;
    closePosition?: "true" | "false";
    activationPrice?: number;
    callbackRate?: number;
    workingType?: EnumCoinmWorkingType;
    priceProtect?: string;
    newOrderRespType?: EnumCoinmNewOrderRespType;
    recvWindow?: number;
}

export interface CoinmPutOrder {
    orderId?: number;
    origClientOrderId?: string;
    symbol: string;
    side: EnumCoinmOrderSide;
    quantity?: number;
    price?: number;
    recvWindow?: number;
}

export interface CoinmPostBatchOrders {
    batchOrders: CoinmPostOrder;
    recvWindow?: number;
}

export interface CoinmPutBatchOrders {
    batchOrders: CoinmPutOrder;
    recvWindow?: number;
}

export interface CoinmOrderAmendment {
    symbol: string;
    orderId?: number;
    origClientOrderId?: string;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
}

export interface CoinmOrder {
    symbol: string;
    orderId?: number;
    origClientOrderId?: string;
    recvWindow?: number;
}

export interface CoinmDeleteOrder {
    symbol: string;
    orderId?: number;
    origClientOrderId?: string;
    recvWindow?: number;
}

export interface CoinmDeleteAllOpenOrders {
    symbol: string;
    recvWindow?: number;
}

export interface CoinmDeleteBatchOrders {
    symbol: string;
    orderIdList?: Array<number>;
    origClientOrderIdList?: Array<string>;
    recvWindow?: number;
}

export interface CoinmPostCountDownCancelAll {
    symbol: string;
    countdownTime: number;
    recvWindow?: number;
}

export interface CoinmOpenOrder {
    symbol: string;
    orderId?: number;
    origClientOrderId?: string;
    recvWindow?: number;
}

export interface CoinmOpenOrders {
    symbol?: string;
    pair?: string;
    recvWindow?: number;
}

export interface CoinmAllOrders {
    symbol?: string;
    pair?: string;
    orderId?: number;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
}

export interface CoinmBalance {
    recvWindow?: number;
}

export interface CoinmAccount {
    recvWindow?: number;
}

export interface CoinmPostLeverage {
    symbol: string;
    leverage: number;
    recvWindow?: number;
}

export interface CoinmPostMarginType {
    symbol: string;
    marginType: "ISOLATED" | "CROSSED";
    recvWindow?: number;
}

export interface CoinmPostPositionMargin {
    symbol: string;
    positionSide?: EnumCoinmPositionSide;
    amount: number;
    type: 1 | 2;
    recvWindow?: number;
}

export interface CoinmPositionMarginHistory {
    symbol: string;
    type?: 1 | 2;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
}

export interface CoinmPositionRisk {
    marginAsset?: string;
    pair?: string;
    recvWindow?: number;
}

export interface CoinmUserTrades {
    symbol?: string;
    pair?: string;
    startTime?: number;
    endTime?: number;
    fromId?: number;
    limit?: number;
    recvWindow?: number;
}

export interface CoinmIncome {
    symbol?: string;
    incomeType?: "TRANSFER" | "WELCOME_BONUS" | "FUNDING_FEE" | "REALIZED_PNL" | "COMMISSION" | "INSURANCE_CLEAR" | "DELIVERED_SETTELMENT";
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
}

export interface CoinmLeverageBracket {
    pair?: string;
    recvWindow?: number;
}

export interface CoinmLeverageBracket {
    symbol?: string;
    recvWindow?: number;
}

export interface CoinmForceOrders {
    symbol?: string;
    autoCloseType?: "LIQUIDATION" | "ADL";
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
}

export interface CoinmAdlQuantile {
    symbol?: string;
    recvWindow?: number;
}

export interface CoinmCommissionRate {
    symbol: string;
    recvWindow?: number;
}

export interface CoinmPmExchangeInfo {
    symbol?: string;
    pair?: string;
    recvWindow?: number;
}

export interface CoinmPmAccountInfo {
    asset: string;
    recvWindow?: number;
}

export interface CoinmPostListenKey {
    recvWindow?: number;
}

export interface CoinmPutListenKey {
    recvWindow?: number;
}

export interface CoinmDeleteListenKey {
    recvWindow?: number;
}