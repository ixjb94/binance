export interface EuOptionsConstructor {
    api_key?: string,
    api_secret?: string,
    reconnectSleep?: number,
    recvWindow?: number,
    isTestNet?: boolean
}

export type EnumEuOptionsContractType = "CALL" | "PUT";
export type EnumEuOptionsOrderSide = "BUY" | "SELL";
export type EnumEuOptionsPositionSide = "LONG" | "SHORT";
export type EnumEuOptionsTimeInForce = "GTC" | "IOC" | "FOK";
export type EnumEuOptionsNewOrderRespType = "ACK" | "RESULT";
export type EnumEuOptionsOrderType = "LIMIT"
export type EnumEuOptionsOrderStatus = "ACCEPTED" | "REJECTED" | "PARTIALLY_FILLED" | "FILLED" | "CANCELLED";
export type EnumEuOptionsIntervals = "1m" | "3m" | "5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "6h" | "8h" | "12h" | "1d" | "3d" | "1w" | "1M";
export type EnumEuOptionsRateLimitType = "REQUEST_WEIGHT" | "ORDERS";
export type EnumEuOptionsRateLimitInterval = "MINUTE"

export interface EuOptionsPing {
    recvWindow?: number;
}

export interface EuOptionsTime {
    recvWindow?: number;
}

export interface EuOptionsExchangeInfo {
    recvWindow?: number;
}

export interface EuOptionsDepth {
    symbol: string;
    limit?: number;
    recvWindow?: number;
}

export interface EuOptionsTrades {
    symbol: string;
    limit?: number;
    recvWindow?: number;
}

export interface EuOptionsHistoricalTrades {
    symbol: string;
    fromId?: number;
    limit?: number;
    recvWindow?: number;
}

export interface EuOptionsKlines {
    symbol: string;
    interval: EnumEuOptionsIntervals;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
}

export interface EuOptionsMark {
    symbol?: string;
    recvWindow?: number;
}

export interface EuOptionsTicker {
    symbol?: string;
    recvWindow?: number;
}

export interface EuOptionsIndex {
    underlying: string;
    recvWindow?: number;
}

export interface EuOptionsExerciseHistory {
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
}

export interface EuOptionsOpenInterest {
    underlyingAsset: string;
    expiration: string;
    recvWindow?: number;
}

export interface EuOptionsAccount {
    recvWindow?: number;
}

export interface EuOptionPostTransfer {
    currency: string;
    type: "IN" | "OUT";
    amount: number;
    recvWindow?: number;
}

export interface EuOptionsPostOrder {
    symbol: string;
    side: EnumEuOptionsOrderSide;
    type: EnumEuOptionsOrderType;
    quantity: number;
    price?: number;
    timeInForce?: number;
    reduceOnly?: boolean;
    postOnly?: boolean;
    newOrderRespType?: EnumEuOptionsNewOrderRespType;
    clientOrderId?: string;
    isMmp?: boolean;
    recvWindow?: number;
}

export interface EuOptionsPostBatchOrders {
    orders: EuOptionsPostOrder;
    recvWindow?: number;
}

export interface EuOptionsDeleteOrder {
    symbol: string;
    orderId?: number;
    clientOrderId?: string;
    recvWindow?: number;
}

export interface EuOptionsDeleteOrder {
    symbol: string;
    orderId?: number;
    clientOrderId?: string;
    recvWindow?: number;
}

export interface EuOptionsDeleteBatchOrders {
    symbol: string;
    orderIds?: Array<number>;
    clientOrderIds?: Array<string>;
    recvWindow?: number;
}

export interface EuOptionsDeleteAllOpenOrder {
    symbol: string;
    recvWindow?: number;
}

export interface EuOptionsDeleteAllOpenOrdersByUnderlying {
    underlying: string;
    recvWindow?: number;
}

export interface EuOptionsOpenOrders {
    symbol?: string;
    orderId?: number;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
}

export interface EuOptionsHistoryOrders {
    symbol: string;
    orderId?: number;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
}

export interface EuOptionsPosition {
    symbol?: string;
    recvWindow?: number;
}

export interface EuOptionsUserTrades {
    symbol?: string;
    fromId?: number;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
}

export interface EuOptionsExerciseRecord {
    symbol?: string;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
}

export interface EuOptionsBill {
    currency: string;
    recordId?: number;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
}

export interface EuOptionsMarginAccount {
    recvWindow?: number;
}

export interface EuPostOptionsMmpSet {
    underlying: string;
    windowTimeInMilliseconds: number;
    frozenTimeInMilliseconds: number;
    qtyLimit: number;
    deltaLimit: number;
    recvWindow?: number;
}

export interface EuOptionsMmp {
    underlying: string;
    recvWindow?: number;
}

export interface EuOptionsPostMmpReset {
    underlying: string;
    recvWindow?: number;
}

export interface EuOptionsPostCountdownCancelAll {
    underlying: string;
    countdownTime: number;
    recvWindow?: number;
}

export interface EuOptionsCountdownCancelAll {
    underlying?: string;
    recvWindow?: number;
}

export interface EuOptionsPostCountdownCancelAllHeartBeat {
    underlyings: string;
    recvWindow?: number;
}

export interface EuOptionsPostListenKey {
    recvWindow?: number;
}

export interface EuOptionsPutListenKey {
    recvWindow?: number;
}

export interface EuOptionsDeleteListenKey {
    recvWindow?: number;
}