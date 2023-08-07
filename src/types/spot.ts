export interface SpotConstructor {
  api_key?: string
  api_secret?: string
  reconnectSleep?: number
  recvWindow?: number
  isTestNet?: boolean
  changeBaseURL?: 1 | 2 | 3
  changeWsStream?: boolean
}

export type EnumSpotTransferTypes = "MAIN_UMFUTURE" | "MAIN_CMFUTURE" | "MAIN_MARGIN" | "UMFUTURE_MAIN" | "UMFUTURE_MARGIN" | "CMFUTURE_MAIN" | "CMFUTURE_MARGIN" | "MARGIN_MAIN" | "MARGIN_UMFUTURE" | "MARGIN_CMFUTURE" | "ISOLATEDMARGIN_MARGIN" | "MARGIN_ISOLATEDMARGIN" | "ISOLATEDMARGIN_ISOLATEDMARGIN" | "MAIN_FUNDING" | "FUNDING_MAIN" | "FUNDING_UMFUTURE" | "UMFUTURE_FUNDING" | "MARGIN_FUNDING" | "FUNDING_MARGIN" | "FUNDING_CMFUTURE" | "CMFUTURE_FUNDING";
export type EnumSpotSymbolStatus = "PRE_TRADING" |"TRADING" | "POST_TRADING" | "END_OF_DAY" | "HALT" | "AUCTION_MATCH" | "BREAK";
export type EnumSpotPermissions = "SPOT" | "MARGIN" | "LEVERAGED" | "TRD_GRP_002" | "TRD_GRP_003" | "TRD_GRP_004" | "TRD_GRP_005";
export type EnumSpotOrderStatus = "NEW" | "PARTIALLY_FILLED" | "FILLED" | "CANCELED" | "PENDING_CANCEL" | "REJECTED" | "EXPIRED";
export type EnumSpotListStatusType = "RESPONSE" | "EXEC_STARTED" | "ALL_DONE";
export type EnumSpotListOrderStatus = "EXECUTING" | "ALL_DONE" | "REJECT";
export type EnumSpotContingencyType = "OCO"
export type EnumSpotOrderTypes = "LIMIT" | "MARKET" | "STOP_LOSS" | "STOP_LOSS_LIMIT" | "TAKE_PROFIT" | "TAKE_PROFIT_LIMIT" | "LIMIT_MAKER";
export type EnumSpotNewOrderRespType = "ACK" | "RESULT" | "FULL";
export type EnumSpotOrderSide = "BUY" | "SELL";
export type EnumSpotTimeInForce = "GTC" | "IOC" | "FOK";
export type EnumSpotIntervals = "1s" | "1m" | "3m" | "5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "6h" | "8h" | "12h" | "1d" | "3d" | "1w" | "1M";
export type EnumSpotRateLimitType = "REQUEST_WEIGHT" | "ORDERS" | "RAW_REQUESTS";
export type EnumSpotRateLimitIntervals = "SECOND" | "MINUTE" | "DAY";
export type SpotPing = object
export type SpotTime = object
export type SpotPostOrderTest = SpotPostOrder
export type SpotPostListenKeySPOT = object
export type SpotPostListenKeyMARGIN = object

export interface SpotJustRecvWindow {
  recvWindow?: number;
}

export interface SpotSystemStatus {
  recvWindow?: number;
}

export interface SpotCapitalConfigGetall {
  recvWindow?: number;
}

export interface SpotAccountSnapshot {
  type: "SPOT" | "MARGIN" | "FUTURES";
  startTime?: number;
  endTime?: number;
  limit?: number;
  recvWindow?: number;
}

export interface SpotPostAccountDisableFastWithdrawSwitch {
  recvWindow?: number;
}

export interface SpotPostAccountEnableFastWithdrawSwitch {
  recvWindow?: number;
}

export interface SpotPostCapitalWithdrawApply {
  coin: string;
  withdrawOrderId: string;
  network?: string;
  address: string;
  addressTag?: string;
  amount: number;
  transactionFeeFlag?: boolean;
  name?: string;
  walletType?: 0 | 1;
  recvWindow?: number;
}

export interface SpotCapitalDepositHisrec {
  coin?: string;
  status?: 0 | 1 | 6;
  startTime?: number;
  endTime?: number;
  offset?: number;
  limit?: number;
  txId?: string;
  recvWindow?: number;
}

export interface SpotCapitalWithdrawHistory {
  coin?: string;
  withdrawOrderId?: string;
  status?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  offset?: number;
  limit?: number;
  startTime?: number;
  endTime?: number;
  recvWindow?: number;
}

export interface SpotCapitalDepositAddress {
  coin: string;
  network?: string;
  recvWindow?: number;
}

export interface SpotAccountStatus {
  recvWindow?: number;
}

export interface SpotAccountApiTradingStatus {
  recvWindow?: number;
}

export interface SpotAssetDribblet {
  startTime?: number;
  endTime?: number;
  recvWindow?: number;
}

export interface SpotPostAssetDustBtc {
  recvWindow?: number;
}

export interface SpotPostAssetDust {
  asset: string[];
  recvWindow?: number;
}

export interface SpotAssetAssetDividend {
  asset?: string;
  startTime?: number;
  endTime?: number;
  limit?: number;
  recvWindow?: number;
}

export interface SpotAssetAssetDetail {
  asset?: string;
  recvWindow?: number;
}

export interface SpotAssetTradeFee {
  symbol?: string;
  recvWindow?: number;
}

export interface SpotPostAssetTransfer {
  type: EnumSpotTransferTypes;
  asset: string;
  amount: number;
  fromSymbol?: string;
  toSymbol?: string;
  recvWindow?: number;
}

export interface SpotAssetTransfer {
  type: EnumSpotTransferTypes;
  startTime?: number;
  endTime?: number;
  current?: number;
  size?: number;
  fromSymbol?: string;
  toSymbol?: string;
  recvWindow?: number;
}

export interface SpotPostAssetGetFundingAsset {
  asset?: string;
  needBtcValuation?: true | false;
  recvWindow?: number;
}

export interface SpotPostAssetGetUserAsset {
  asset?: string;
  needBtcValuation?: boolean;
  recvWindow?: number;
}

export interface SpotPostAssetConvertTransfer {
  clientTranId: string;
  asset: string;
  amount: number;
  targetAsset: string;
  accountType?: "MAIN" | "CARD";
  recvWindow?: number;
}

export interface SpotAssetConvertTransferQueryByPage {
  tranId?: number;
  clientTranId?: string;
  asset?: string;
  startTime: number;
  endTime: number;
  accountType?: "MAIN" | "CARD";
  current?: number;
  size?: number;
  recvWindow?: number;
}

export interface SpotAssetLedgerTransferCloudMiningQueryByPag {
  tranId?: number;
  clientTranId?: string;
  asset?: string;
  startTime: number;
  endTime: number;
  current?: number;
  size?: number;
  recvWindow?: number;
}

export interface SpotAccountApiRestrictions {
  recvWindow?: number;
}

export interface SpotPostSubAccountVirtualSubAccount {
  subAccountstring: string;
  recvWindow?: number;
}

export interface SpotSubAccountList {
  email?: string;
  isFreeze?: true | false;
  page?: number;
  limit?: number;
  recvWindow?: number;
}

export interface SpotSubAccountSubTransferHistory {
  fromEmail?: string;
  toEmail?: string;
  startTime?: number;
  endTime?: number;
  page?: number;
  limit?: number;
  recvWindow?: number;
}

export interface SpotSubAccountFuturesInternalTransfer {
  email: string;
  futuresType: 1 | 2;
  startTime?: number;
  endTime?: number;
  page?: number;
  limit?: number;
  recvWindow?: number;
}

export interface SpotPostSubAccountFuturesInternalTransfer {
  fromEmail: string;
  toEmail: string;
  futuresType: 1 | 2;
  asset: string;
  amount: number;
  recvWindow?: number;
}

export interface SpotSubAccountAssets {
  email: string;
  recvWindow?: number;
}

export interface SpotSubAccountSpotSummary {
  email?: string;
  page?: number;
  size?: number;
  recvWindow?: number;
}

export interface SpotCapitalDepositSubAddress {
  email: string;
  coin: string;
  network?: string;
  recvWindow?: number;
}

export interface SpotCapitalDepositSubHisrec {
  email: string;
  coin?: string;
  status?: 0 | 1 | 6;
  startTime?: number;
  endTime?: number;
  limit?: number;
  offset?: number;
  txId?: string;
  recvWindow?: number;
}

export interface SpotSubAccountStatus {
  email?: string;
  recvWindow?: number;
}

export interface SpotPostSubAccountMarginEnable {
  email: string;
  recvWindow?: number;
}

export interface SpotSubAccountMarginAccount {
  email: string;
  recvWindow?: number;
}

export interface SpotSubAccountMarginAccountSummary {
  recvWindow?: number;
}

export interface SpotPostSubAccountFuturesEnable {
  email: string;
  recvWindow?: number;
}

export interface SpotSubAccountFuturesAccount {
  email: string;
  recvWindow?: number;
}

export interface SpotSubAccountFuturesAccountSummary {
  recvWindow?: number;
}

export interface SpotSubAccountFuturesPositionRisk {
  email: string;
  recvWindow?: number;
}

export interface SpotPostSubAccountFuturesTransfer {
  email: string;
  asset: string;
  amount: number;
  type: 1 | 2 | 3 | 4;
  recvWindow?: number;
}

export interface SpotPostSubAccountMarginTransfer {
  email: string;
  asset: string;
  amount: number;
  type: 1 | 2;
  recvWindow?: number;
}

export interface SpotPostSubAccountTransferSubToSub {
  toEmail: string;
  asset: string;
  amount: number;
  recvWindow?: number;
}

export interface SpotPostSubAccountTransferSubToMaster {
  asset: string;
  amount: number;
  recvWindow?: number;
}

export interface SpotSubAccountTransferSubUserHistory {
  asset?: string;
  type?: 1 | 2;
  startTime?: number;
  endTime?: number;
  limit?: number;
  recvWindow?: number;
}

export interface SpotPostSubAccountUniversalTransfer {
  fromEmail?: string;
  toEmail?: string;
  fromAccountType: "SPOT" | "USDT_FUTURE" | "COIN_FUTURE" | "MARGIN" | "ISOLATED_MARGIN";
  toAccountType: "SPOT" | "USDT_FUTURE" | "COIN_FUTURE" | "MARGIN" | "ISOLATED_MARGIN";
  clientTranId?: string;
  symbol?: string;
  asset: string;
  amount: number;
  recvWindow?: number;
}

export interface SpotSubAccountUniversalTransfer {
  fromEmail?: string;
  toEmail?: string;
  clientTranId?: string;
  startTime?: number;
  endTime?: number;
  page?: number;
  limit?: number;
  recvWindow?: number;
}

export interface SpotSubAccountFuturesAccount {
  email: string;
  futuresType: 1 | 2;
  recvWindow?: number;
}

export interface SpotSubAccountFuturesAccountSummary {
  futuresType: 1 | 2;
  page?: number;
  limit?: number;
  recvWindow?: number;
}

export interface SpotSubAccountFuturesPositionRisk {
  email: string;
  futuresType: 1 | 2;
  recvWindow?: number;
}

export interface SpotPostSubAccountBlvtEnable {
  email: string;
  enableBlvt: boolean;
  recvWindow?: number;
}

export interface SpotPostSubAccountSubAccountApiIpRestriction {
  email: string;
  subAccountApiKey: string;
  ipRestrict: boolean;
  recvWindow?: number;
}

export interface SpotPostSubAccountSubAccountApiIpRestrictionIpList {
  email: string;
  subAccountApiKey: string;
  ipAddress?: string;
  recvWindow?: number;
}

export interface SpotSubAccountSubAccountApiIpRestriction {
  email: string;
  subAccountApiKey: string;
  recvWindow?: number;
}

export interface SpotDeleteSubAccountSubAccountApiIpRestrictionIpList {
  email: string;
  subAccountApiKey: string;
  ipAddress?: string;
  recvWindow?: number;
}

export interface SpotSubAccountApiRestrictionsIpRestrictionThirdPartyList {
  recvWindow?: number;
}

export interface SpotPostSubAccountSubAccountApiIpRestriction {
  email: string;
  subAccountApiKey: string;
  status: "1" | "2" | "3";
  thirdPartyName?: string;
  ipAddress?: string;
  recvWindow?: number;
}

export interface SpotPostManagedSubaccountDeposit {
  toEmail: string;
  asset: string;
  amount: number;
  recvWindow?: number;
}

export interface SpotManagedSubaccountAsset {
  email: string;
  recvWindow?: number;
}

export interface SpotPostManagedSubaccountWithdraw {
  fromEmail: string;
  asset: string;
  amount: number;
  transferDate?: number;
  recvWindow?: number;
}

export interface SpotManagedSubaccountAccountSnapshot {
  email: string;
  type: "SPOT" | "MARGIN" | "FUTURES";
  startTime?: number;
  endTime?: number;
  limit?: number;
  recvWindow?: number;
}

export interface SpotExchangeInfo {
  symbol?: string;
  symbols?: string;
  permissions?: string;
}

export interface SpotDepth {
  symbol: string;
  limit?: number;
}

export interface SpotTrades {
  symbol: string;
  limit?: number;
}

export interface SpotHistoricalTrades {
  symbol: string;
  limit?: number;
  fromId?: number;
}

export interface SpotAggTrades {
  symbol: string;
  fromId?: number;
  startTime?: number;
  endTime?: number;
  limit?: number;
}

export interface SpotKlines {
  symbol: string;
  interval: EnumSpotIntervals;
  startTime?: number;
  endTime?: number;
  limit?: number;
}

export interface SpotUiKlines {
  symbol: string;
  interval: EnumSpotIntervals;
  startTime?: number;
  endTime?: number;
  limit?: number;
}

export interface SpotAvgPrice {
  symbol: string;
}

export interface SpotTicker24hr {
  symbol?: string;
  symbols?: string;
  type?: "FULL" | "MINI";
}

export interface SpotTickerPrice {
  symbol?: string;
  symbols?: string;
}

export interface SpotTickerBookTicker {
  symbol?: string;
  symbols?: string;
}

export interface SpotTicker {
  symbol?: string;
  symbols?: string;
  windowSize?: string;
  type?: "FULL" | "MINI";
}

export interface SpotPostOrder {
  symbol: string;
  side: EnumSpotOrderSide;
  type: EnumSpotOrderTypes;
  timeInForce?: EnumSpotTimeInForce;
  quantity: number;
  quoteOrderQty?: number;
  price?: number;
  newClientOrderId?: string;
  strategyId?: number;
  strategyType?: number;
  stopPrice?: number;
  trailingDelta?: number;
  icebergQty?: number;
  newOrderRespType?: EnumSpotNewOrderRespType;
  recvWindow?: number;
}

export interface SpotDeleteOrder {
  symbol: string;
  orderId?: number;
  origClientOrderId?: string;
  newClientOrderId?: string;
  recvWindow?: number;
}

export interface SpotDeleteOpenOrders {
  symbol: string;
  recvWindow?: number;
}

export interface SpotOrder {
  symbol: string;
  orderId?: number;
  origClientOrderId?: string;
  recvWindow?: number;
}

export interface SpotPostOrderCancelReplace {
  symbol: string;
  side: EnumSpotOrderSide;
  type: EnumSpotOrderTypes;
  cancelReplaceMode: "STOP_ON_FAILURE" | "ALLOW_FAILURE";
  timeInForce?: EnumSpotTimeInForce;
  quantity: number;
  quoteOrderQty?: number;
  price?: number;
  cancelNewClientOrderId?: string;
  cancelOrigClientOrderId?: string;
  cancelOrderId?: string;
  newClientOrderId?: string;
  strategyId?: number;
  strategyType?: number;
  stopPrice?: number;
  trailingDelta?: number;
  icebergQty?: number;
  newOrderRespType?: EnumSpotNewOrderRespType;
  recvWindow?: number;
}

export interface SpotOpenOrders {
  symbol?: string;
  recvWindow?: number;
}

export interface SpotAllOrders {
  symbol: string;
  orderId?: number;
  startTime?: number;
  endTime?: number;
  limit?: number;
  recvWindow?: number;
}

export interface SpotPostOrderOco {
  symbol: string;
  listClientOrderId?: string;
  side: EnumSpotOrderSide;
  quantity: number;
  limitClientOrderId?: string;
  limitStrategyId?: number;
  limitStrategyType?: number;
  price: number;
  limitIcebergQty?: number;
  trailingDelta?: number;
  stopClientOrderId?: string;
  stopPrice: number;
  stopStrategyId?: number;
  stopStrategyType?: number;
  stopLimitPrice?: number;
  stopIcebergQty?: number;
  stopLimitTimeInForce?: EnumSpotTimeInForce;
  newOrderRespType?: EnumSpotNewOrderRespType;
  recvWindow?: number;
}

export interface SpotDeleteOrderList {
  symbol: string;
  orderListId?: number;
  listClientOrderId?: string;
  newClientOrderId?: string;
  recvWindow?: number;
}

export interface SpotOrderList {
  orderListId?: number;
  origClientOrderId?: string;
  recvWindow?: number;
}

export interface SpotAllOrderList {
  fromId?: number;
  startTime?: number;
  endTime?: number;
  limit?: number;
  recvWindow?: number;
}

export interface SpotOpenOrderList {
  recvWindow?: number;
}

export interface SpotAccount {
  recvWindow?: number;
}

export interface SpotMyTrades {
  symbol: string;
  orderId?: number;
  startTime?: number;
  endTime?: number;
  fromId?: number;
  limit?: number;
  recvWindow?: number;
}

export interface SpotRateLimitOrder {
  recvWindow?: number;
}

export interface SpotPostMarginTransfer {
  asset: string;
  amount: number;
  type: 1 | 2;
  recvWindow?: number;
}

export interface SpotPostMarginLoa {
  asset: string;
  isIsolated?: "TRUE" | "FALSE";
  symbol?: number;
  amount: number;
  recvWindow?: number;
}

export interface SpotPostMarginRepay {
  asset: string;
  isIsolated?: "TRUE" | "FALSE";
  symbol?: number;
  amount: number;
  recvWindow?: number;
}

export interface SpotMarginAsset {
  asset: string;
  recvWindow?: number;
}

export interface SpotMarginPair {
  symbol: string;
  recvWindow?: number;
}

export interface SpotMarginAllAssets {
  recvWindow?: number;
}

export interface SpotMarginAllPairs {
  recvWindow?: number;
}

export interface SpotMarginPriceIndex {
  symbol: string;
  recvWindow?: number;
}

export interface SpotPostMarginOrder {
  symbol: number;
  isIsolated?: "TRUE" | "FALSE";
  side: EnumSpotOrderSide;
  type: EnumSpotOrderTypes;
  quantity?: number;
  quoteOrderQty?: number;
  price?: number;
  stopPrice?: number;
  newClientOrderId?: string;
  icebergQty?: number;
  newOrderRespType?: EnumSpotNewOrderRespType;
  sideEffectType?: "NO_SIDE_EFFECT" | "MARGIN_BUY" | "AUTO_REPAY";
  timeInForce?: EnumSpotTimeInForce;
  recvWindow?: number;
}

export interface SpotDeleteMarginOrder {
  symbol: string;
  isIsolated?: "TRUE" | "FALSE";
  orderId?: number;
  origClientOrderId?: string;
  newClientOrderId?: string;
  recvWindow?: number;
}

export interface SpotDeleteMarginOpenOrders {
  symbol: string;
  isIsolated?: "TRUE" | "FALSE";
  recvWindow?: number;
}

export interface SpotMarginTransfer {
  asset?: string;
  type?: "ROLL_IN" | "ROLL_OUT";
  startTime?: number;
  endTime?: number;
  current?: number;
  size?: number;
  archived?: string;
  recvWindow?: number;
}

export interface SpotPostMarginLoan {
  asset: string;
  isIsolated?: "TRUE" | "FALSE";
  symbol?: string;
  amount: number;
  recvWindow?: number;
}

export interface SpotMarginLoan {
  asset: string;
  isolatedSymbol?: string;
  txId?: number;
  startTime?: number;
  endTime?: number;
  current?: number;
  size?: number;
  archived?: string;
  recvWindow?: number;
}

export interface SpotMarginRepay {
  asset: string;
  isolatedSymbol?: string;
  txId?: number;
  startTime?: number;
  endTime?: number;
  current?: number;
  size?: number;
  archived?: string;
  recvWindow?: number;
}

export interface SpotMarginInterestHistory {
  asset?: string;
  isolatedSymbol?: string;
  startTime?: number;
  endTime?: number;
  current?: number;
  size?: number;
  archived?: string;
  recvWindow?: number;
}

export interface SpotMarginForceLiquidationRec {
  startTime?: number;
  endTime?: number;
  isolatedSymbol?: string;
  current?: number;
  size?: number;
  recvWindow?: number;
}

export interface SpotMarginAccount {
  recvWindow?: number;
}

export interface SpotMarginOrder {
  symbol: string;
  isIsolated?: "TRUE" | "FALSE";
  orderId?: number;
  origClientOrderId?: string;
  recvWindow?: number;
}

export interface SpotMarginOpenOrders {
  symbol?: string;
  isIsolated?: "TRUE" | "FALSE";
  recvWindow?: number;
}

export interface SpotMarginAllOrders {
  symbol: string;
  isIsolated?: "TRUE" | "FALSE";
  orderId?: number;
  startTime?: number;
  endTime?: number;
  limit?: number;
  recvWindow?: number;
}

export interface SpotPostMarginOrderOco {
  symbol: string;
  isIsolated?: "TRUE" | "FALSE";
  listClientOrderId?: string;
  side: EnumSpotOrderSide;
  quantity: number;
  limitClientOrderId?: string;
  price: number;
  limitIcebergQty?: number;
  stopClientOrderId?: string;
  stopPrice: number;
  stopLimitPrice?: number;
  stopIcebergQty?: number;
  stopLimitTimeInForce?: EnumSpotTimeInForce;
  newOrderRespType?: EnumSpotNewOrderRespType;
  sideEffectType?: "NO_SIDE_EFFECT" | "MARGIN_BUY" | "AUTO_REPAY";
  recvWindow?: number;
}

export interface SpotDeleteMarginOrderList {
  symbol: string;
  isIsolated?: "TRUE" | "FALSE";
  orderListId?: number;
  listClientOrderId?: string;
  newClientOrderId?: string;
  recvWindow?: number;
}

export interface SpotMarginOrderList {
  isIsolated?: "TRUE" | "FALSE";
  symbol?: string;
  orderListId?: number;
  origClientOrderId?: string;
  recvWindow?: number;
}

export interface SpotMarginAllOrderList {
  isIsolated?: "TRUE" | "FALSE";
  symbol?: string;
  fromId?: number;
  startTime?: number;
  endTime?: number;
  limit?: number;
  recvWindow?: number;
}

export interface SpotMarginOpenOrderList {
  isIsolated?: "TRUE" | "FALSE";
  symbol?: string;
  recvWindow?: number;
}

export interface SpotMarginMyTrades {
  symbol: string;
  isIsolated?: "TRUE" | "FALSE";
  orderId?: number;
  startTime?: number;
  endTime?: number;
  fromId?: number;
  limit?: number;
  recvWindow?: number;
}

export interface SpotMarginMaxBorrowable {
  asset: string;
  isolatedSymbol?: string;
  recvWindow?: number;
}

export interface SpotMarginMaxTransferable {
  asset: string;
  isolatedSymbol?: string;
  recvWindow?: number;
}

export interface SpotMarginTradeCoeff {
  recvWindow?: number;
}

export interface SpotPostMarginIsolatedTransfer {
  asset?: string;
  symbol?: string;
  transFrom?: "SPOT" | "ISOLATED_MARGIN";
  transTo?: "SPOT" | "ISOLATED_MARGIN";
  amount?: number;
  recvWindow?: number;
}

export interface SpotMarginIsolatedTransfer {
  asset?: string;
  symbol: string;
  transFrom?: "SPOT" | "ISOLATED_MARGIN";
  transTo?: "SPOT" | "ISOLATED_MARGIN";
  startTime?: number;
  endTime?: number;
  current?: number;
  size?: number;
  archived?: string;
  recvWindow?: number;
}

export interface SpotMarginIsolatedAccount {
  symbols?: string;
  recvWindow?: number;
}

export interface SpotDeleteMarginIsolatedAccount {
  symbol: string;
  recvWindow?: number;
}

export interface SpotPostMarginIsolatedAccount {
  symbol: string;
  recvWindow?: number;
}

export interface SpotMarginIsolatedAccountLimit {
  recvWindow?: number;
}

export interface SpotMarginIsolatedPair {
  symbol: string;
  recvWindow?: number;
}

export interface SpotMarginIsolatedAllPairs {
  recvWindow?: number;
}

export interface SpotPostBnbBurn {
  spotBNBBurn?: "true" | "false";
  interestBNBBurn?: "true" | "false";
  recvWindow?: number;
}

export interface SpotBnbBurn {
  recvWindow?: number;
}

export interface SpotMarginInterestRateHistory {
  asset: string;
  vipLevel?: number;
  startTime?: number;
  endTime?: number;
  recvWindow?: number;
}

export interface SpotMarginCrossMarginData {
  vipLevel?: number;
  coin?: string;
  recvWindow?: number;
}

export interface SpotMarginIsolatedMarginData {
  vipLevel?: number;
  symbol?: string;
  recvWindow?: number;
}

export interface SpotMarginIsolatedMarginTier {
  symbol: string;
  tier?: number;
  recvWindow?: number;
}

export interface SpotMarginRateLimitOrder {
  isIsolated?: "TRUE" | "FALSE";
  symbol?: string;
  recvWindow?: number;
}

export interface SpotMarginDribblet {
  startTime?: number;
  endTime?: number;
  recvWindow?: number;
}

export interface SpotLendingDailyProductList {
  status?: "ALL" | "SUBSCRIBABLE" | "UNSUBSCRIBABLE";
  featured?: "ALL" | "TRUE";
  current?: number;
  size?: number;
  recvWindow?: number;
}

export interface SpotLendingDailyUserLeftQuota {
  productId: string;
  recvWindow?: number;
}

export interface SpotPostLendingDailyPurchase {
  productId: string;
  amount: number;
  recvWindow?: number;
}

export interface SpotLendingDailyUserRedemptionQuota {
  productId: string;
  type: "FAST" | "NORMAL";
  recvWindow?: number;
}

export interface SpotPostLendingDailyRedeem {
  productId: string;
  amount: number;
  type: "FAST" | "NORMAL";
  recvWindow?: number;
}

export interface SpotLendingDailyTokenPosition {
  asset?: string;
  recvWindow?: number;
}

export interface SpotLendingProjectList {
  asset?: string;
  type: "ACTIVITY" | "CUSTOMIZED_FIXED";
  status?: "ALL" | "SUBSCRIBABLE" | "UNSUBSCRIBABLE";
  isSortAsc?: boolean;
  sortBy?: "START_TIME" | "LOT_SIZE" | "INTEREST_RATE" | "DURATION";
  current?: number;
  size?: number;
  recvWindow?: number;
}

export interface SpotPostLendingCustomizedFixedPurchase {
  projectId: string;
  lot: number;
  recvWindow?: number;
}

export interface SpotLendingProjectPositionList {
  asset?: string;
  projectId?: string;
  status?: "HOLDING" | "REDEEMED";
  recvWindow?: number;
}

export interface SpotLendingUnionAccount {
  recvWindow?: number;
}

export interface SpotLendingUnionPurchaseRecord {
  lendingType: "DAILY" | "ACTIVITY" | "CUSTOMIZED_FIXED";
  asset?: string;
  startTime?: number;
  endTime?: number;
  current?: number;
  size?: number;
  recvWindow?: number;
}

export interface SpotLendingUnionRedemptionRecord {
  lendingType: "DAILY" | "ACTIVITY" | "CUSTOMIZED_FIXED";
  asset?: string;
  startTime?: number;
  endTime?: number;
  current?: number;
  size?: number;
  recvWindow?: number;
}

export interface SpotLendingUnionInterestHistory {
  lendingType: "DAILY" | "ACTIVITY" | "CUSTOMIZED_FIXED";
  asset?: string;
  startTime?: number;
  endTime?: number;
  current?: number;
  size?: number;
  recvWindow?: number;
}

export interface SpotPostLendingPositionChanged {
  projectId: string;
  lot: number;
  positionId?: number;
  recvWindow?: number;
}

export interface SpotStakingProductList {
  product: "STAKING" | "F_DEFI" | "L_DEFI";
  asset?: string;
  current?: number;
  size?: number;
  recvWindow?: number;
}

export interface SpotPostStakingPurchase {
  product: "STAKING" | "F_DEFI" | "L_DEFI";
  productId: string;
  amount: number;
  renewable?: string;
  recvWindow?: number;
}

export interface SpotPostStakingRedeem {
  product: "STAKING" | "F_DEFI" | "L_DEFI";
  positionId?: string;
  productId: string;
  amount?: number;
  recvWindow?: number;
}

export interface SpotStakingPosition {
  product: "STAKING" | "F_DEFI" | "L_DEFI";
  productId?: string;
  asset?: string;
  current?: number;
  size?: number;
  recvWindow?: number;
}

export interface SpotStakingStakingRecord {
  product: "STAKING" | "F_DEFI" | "L_DEFI";
  txnType: "SUBSCRIPTION" | "REDEMPTION" | "INTEREST";
  asset?: string;
  startTime?: number;
  endTime?: number;
  current?: number;
  size?: number;
  recvWindow?: number;
}

export interface SpotPostStakingSetAutoStaking {
  product: "STAKING" | "L_DEFI";
  positionId: string;
  renewable: string;
  recvWindow?: number;
}

export interface SpotStakingPersonalLeftQuota {
  product: "STAKING" | "F_DEFI" | "L_DEFI";
  productId: string;
  recvWindow?: number;
}

export interface SpotMiningPubAlgoList {
  recvWindow?: number;
}

export interface SpotMiningPubCoinList {
  recvWindow?: number;
}

export interface SpotMiningWorkerDetail {
  algo: string;
  userName: string;
  workerName: string;
  recvWindow?: number;
}

export interface SpotMiningWorkerList {
  algo: string;
  userName: string;
  pageIndex?: number;
  sort?: number;
  sortColumn?: 1 | 2 | 3 | 4 | 5;
  workerStatus?: 0 | 1 | 2 | 3;
  recvWindow?: number;
}

export interface SpotMiningPaymentList {
  algo: string;
  userName: string;
  coin?: string;
  startDate?: number;
  endDate?: number;
  pageIndex?: number;
  pageSize?: number;
  recvWindow?: number;
}

export interface SpotMiningPaymentOther {
  algo: string;
  userName: string;
  coin?: string;
  startDate?: number;
  endDate?: number;
  pageIndex?: number;
  pageSize?: number;
  recvWindow?: number;
}

export interface SpotMiningHashTransferConfigDetailsList {
  pageIndex?: number;
  pageSize?: number;
  recvWindow?: number;
}

export interface SpotMiningHashTransferProfitDetails {
  configId: number;
  userName: string;
  pageIndex?: number;
  pageSize?: number;
  recvWindow?: number;
}

export interface SpotPostMiningHashTransferConfig {
  userName: string;
  algo: string;
  endDate: number;
  startDate: number;
  toPoolUser: string;
  hashRate: number;
  recvWindow?: number;
}

export interface SpotPostMiningHashTransferConfigCancel {
  configId: number;
  userName: string;
  recvWindow?: number;
}

export interface SpotMiningStatisticsUserStatus {
  algo: string;
  userName: string;
  recvWindow?: number;
}

export interface SpotMiningStatisticsUserList {
  algo: string;
  userName: string;
  recvWindow?: number;
}

export interface SpotMiningPaymentUid {
  algo: string;
  startDate?: number;
  endDate?: number;
  pageIndex?: number;
  pageSize?: number;
  recvWindow?: number;
}

export interface SpotPostFuturesTransfer {
  asset: string;
  amount: number;
  type: 1 | 2 | 3 | 4;
  recvWindow?: number;
}

export interface SpotFuturesTransfer {
  asset: string;
  startTime: number;
  endTime?: number;
  current?: number;
  size?: number;
  recvWindow?: number;
}

export interface SpotFuturesLoanBorrowHistory {
  coin?: string;
  startTime?: number;
  endTime?: number;
  limit?: number;
  recvWindow?: number;
}

export interface SpotFuturesLoanRepayHistory {
  coin?: string;
  startTime?: number;
  endTime?: number;
  limit?: number;
  recvWindow?: number;
}

export interface SpotFuturesLoanWallet {
  recvWindow?: number;
}

export interface SpotFuturesLoanAdjustCollateralHistory {
  loanCoin?: string;
  collateralCoin?: string;
  startTime?: number;
  endTime?: number;
  limit?: number;
  recvWindow?: number;
}

export interface SpotFuturesLoanLiquidationHistory {
  loanCoin?: string;
  collateralCoin?: string;
  startTime?: number;
  endTime?: number;
  limit?: number;
  recvWindow?: number;
}

export interface SpotFuturesLoanInterestHistory {
  collateralCoin?: string;
  startTime?: number;
  endTime?: number;
  current?: number;
  limit?: number;
  recvWindow?: number;
}

export interface SpotPostAlgoFuturesNewOrderVp {
  symbol: string;
  side: "BUY" | "SELL";
  positionSide?: "BOTH" | "LONG" | "SHORT";
  quantity: number;
  urgency: "LOW" | "MEDIUM" | "HIGH";
  clientAlgoId?: string;
  reduceOnly?: boolean;
  limitPrice?: number;
  recvWindow?: number;
}

export interface SpotPostAlgoFuturesNewOrderTwap {
  symbol: string;
  side: "BUY" | "SELL";
  positionSide?: "BOTH" | "LONG" | "SHORT";
  quantity: number;
  duration: number;
  clientAlgoId?: string;
  reduceOnly?: boolean;
  limitPrice?: number;
  recvWindow?: number;
}

export interface SpotDeleteAlgoFuturesOrder {
  algoId: number;
  recvWindow?: number;
}

export interface SpotAlgoFuturesOpenOrders {
  recvWindow?: number;
}

export interface SpotAlgoFuturesHistoricalOrders {
  symbol?: string;
  side?: "BUY" | "SELL";
  startTime?: number;
  endTime?: number;
  page?: number;
  pageSize?: number;
  recvWindow?: number;
}

export interface SpotAlgoFuturesSubOrders {
  algoId: number;
  page?: number;
  pageSize?: number;
  recvWindow?: number;
}

export interface SpotPortfolioAccount {
  recvWindow?: number;
}

export interface SpotPortfolioCollateralRate {
  recvWindow?: number;
}

export interface SpotPortfolioPmLoan {
  recvWindow?: number;
}

export interface SpotPostPortfolioRepay {
  recvWindow?: number;
}

export interface SpotBlvtTokenInfo {
  tokenName?: string;
  recvWindow?: number;
}

export interface SpotNoneNone {
  recvWindow?: number;
}

export interface SpotPostBlvtSubscribe {
  tokenName: string;
  cost: number;
  recvWindow?: number;
}

export interface SpotBlvtSubscribeRecord {
  tokenName?: string;
  id?: number;
  startTime?: number;
  endTime?: number;
  limit?: number;
  recvWindow?: number;
}

export interface SpotPostBlvtRedeem {
  tokenName: string;
  amount?: number;
  recvWindow?: number;
}

export interface SpotBlvtRedeemRecord {
  tokenName?: string;
  id?: number;
  startTime?: number;
  endTime?: number;
  limit?: number;
  recvWindow?: number;
}

export interface SpotBlvtUserLimit {
  tokenName?: string;
  recvWindow?: number;
}

export interface SpotBswapPools {
  recvWindow?: number;
}

export interface SpotBswapLiquidity {
  poolId?: number;
  recvWindow?: number;
}

export interface SpotPostBswapLiquidityAdd {
  poolId: number;
  type?: "COMBINATION" | "SINGLE";
  asset: string;
  quantity: number;
  recvWindow?: number;
}

export interface SpotPostBswapLiquidityRemove {
  poolId: number;
  type: "COMBINATION" | "SINGLE";
  asset?: string[];
  shareAmount: number;
  recvWindow?: number;
}

export interface SpotBswapLiquidityOps {
  operationId?: number;
  poolId?: number;
  operation?: "ADD" | "REMOVE";
  startTime?: number;
  endTime?: number;
  limit?: number;
  recvWindow?: number;
}

export interface SpotBswapQuote {
  quoteAsset: string;
  baseAsset: string;
  quoteQty: number;
  recvWindow?: number;
}

export interface SpotPostBswapSwap {
  quoteAsset: string;
  baseAsset: string;
  quoteQty: number;
  recvWindow?: number;
}

export interface SpotBswapSwap {
  swapId?: number;
  startTime?: number;
  endTime?: number;
  status?: 0 | 1 | 2;
  quoteAsset?: string;
  baseAsset?: string;
  limit?: number;
  recvWindow?: number;
}

export interface SpotBswapPoolConfigure {
  poolId?: number;
  recvWindow?: number;
}

export interface SpotBswapAddLiquidityPreview {
  poolId: number;
  type: "SINGLE" | "COMBINATION";
  quoteAsset: string;
  quoteQty: number;
  recvWindow?: number;
}

export interface SpotBswapRemoveLiquidityPreview {
  poolId: number;
  type: "SINGLE" | "COMBINATION";
  quoteAsset: string;
  shareAmount: number;
  recvWindow?: number;
}

export interface SpotBswapUnclaimedRewards {
  type?: 0 | 1;
  recvWindow?: number;
}

export interface SpotPostBswapClaimRewards {
  type?: 0 | 1;
  recvWindow?: number;
}

export interface SpotBswapClaimedHistory {
  poolId?: number;
  assetRewards?: string;
  type?: 0 | 1;
  startTime?: number;
  endTime?: number;
  limit?: number;
  recvWindow?: number;
}

export interface SpotFiatOrders {
  transactionType: "0" | "1";
  beginTime?: number;
  endTime?: number;
  page?: number;
  rows?: number;
  recvWindow?: number;
}

export interface SpotFiatPayments {
  transactionType: "0" | "1";
  beginTime?: number;
  endTime?: number;
  page?: number;
  rows?: number;
  recvWindow?: number;
}

export interface SpotC2cOrderMatchListUserOrderHistory {
  tradeType: "BUY" | "SELL";
  startTimestamp?: number;
  endTimestamp?: number;
  page?: number;
  rows?: number;
  recvWindow?: number;
}

export interface SpotLoanVipOngoingOrders {
  orderId?: number;
  collateralAccountId?: number;
  loanCoin?: string;
  collateralCoin?: string;
  current?: number;
  limit?: number;
  recvWindow?: number;
}

export interface SpotPostLoanVipRepay {
  orderId: number;
  amount: number;
  recvWindow?: number;
}

export interface SpotLoanVipRepayHistory {
  orderId?: number;
  loanCoin?: string;
  startTime?: number;
  endTime?: number;
  current?: number;
  limit?: number;
  recvWindow?: number;
}

export interface SpotLoanIncome {
  asset?: number;
  type?: "borrowIn" | "collateralSpent" | "repayAmount" | "collateralReturn" | "addCollateral" | "removeCollateral" | "collateralReturnAfterLiquidation";
  startTime?: number;
  endTime?: number;
  limit?: number;
  recvWindow?: number;
}

export interface SpotPostLoanBorrow {
  loanCoin: string;
  loanAmount?: number;
  collateralCoin: string;
  collateralAmount?: number;
  loanTerm: 7 | 14 | 30 | 90 | 180;
  recvWindow?: number;
}

export interface SpotLoanBorrowHistory {
  orderId?: number;
  loanCoin?: string;
  collateralCoin?: string;
  startTime?: number;
  endTime?: number;
  current?: number;
  limit?: number;
  recvWindow?: number;
}

export interface SpotLoanOngoingOrders {
  orderId?: number;
  loanCoin?: string;
  collateralCoin?: string;
  current?: number;
  limit?: number;
  recvWindow?: number;
}

export interface SpotPostLoanRepay {
  orderId: number;
  amount: number;
  type?: 1 | 2;
  collateralReturn?: boolean;
  recvWindow?: number;
}

export interface SpotLoanRepayHistory {
  orderId?: number;
  loanCoin?: string;
  collateralCoin?: string;
  startTime?: number;
  endTime?: number;
  current?: number;
  limit?: number;
  recvWindow?: number;
}

export interface SpotPostLoanAdjustLtv {
  orderId: number;
  amount: number;
  direction: "ADDITIONAL" | "REDUCED";
  recvWindow?: number;
}

export interface SpotLoanLtvAdjustmentHistory {
  orderId?: number;
  loanCoin?: string;
  collateralCoin?: string;
  startTime?: number;
  endTime?: number;
  current?: number;
  limit?: number;
  recvWindow?: number;
}

export interface SpotLoanLoanableData {
  loanCoin?: string;
  vipLevel?: number;
  recvWindow?: number;
}

export interface SpotLoanCollateralData {
  collateralCoin?: string;
  vipLevel?: number;
  recvWindow?: number;
}

export interface SpotLoanRepayCollateralRate {
  loanCoin: string;
  collateralCoin: string;
  repayAmount: number;
  recvWindow?: number;
}

export interface SpotPostLoanCustomizeMarginCall {
  orderId?: number;
  collateralCoin?: string;
  marginCall: number;
  recvWindow?: number;
}

export interface SpotPayTransactions {
  startTime?: number;
  endTime?: number;
  limit?: number;
  recvWindow?: number;
}

export interface SpotConvertExchangeInfo {
  fromAsset?: string;
  toAsset?: string;
  recvWindow?: number;
}

export interface SpotConvertAssetInfo {
  recvWindow?: number;
}

export interface SpotPostConvertGetQuote {
  fromAsset: string;
  toAsset: string;
  fromAmount?: number;
  toAmount?: number;
  validTime?: "10s" | "30s" | "1m" | "2m";
  recvWindow?: number;
}

export interface SpotPostConvertAcceptQuote {
  quoteId: string;
  recvWindow?: number;
}

export interface SpotConvertOrderStatus {
  orderId: string;
  recvWindow?: number;
}

export interface SpotConvertTradeFlow {
  startTime: number;
  endTime: number;
  limit?: number;
  recvWindow?: number;
}

export interface SpotRebateTaxQuery {
  startTime?: number;
  endTime?: number;
  page?: number;
  recvWindow?: number;
}

export interface SpotNftHistoryTransactions {
  orderType: 0 | 1 | 2 | 3 | 4;
  startTime?: number;
  endTime?: number;
  limit?: number;
  page?: number;
  recvWindow?: number;
}

export interface SpotNftHistoryDeposit {
  startTime?: number;
  endTime?: number;
  limit?: number;
  page?: number;
  recvWindow?: number;
}

export interface SpotNftHistoryWithdraw {
  startTime?: number;
  endTime?: number;
  limit?: number;
  page?: number;
  recvWindow?: number;
}

export interface SpotNftUserGetAsset {
  limit?: number;
  page?: number;
  recvWindow?: number;
}

export interface SpotPostGiftcardCreateCode {
  token: string;
  amount: number;
  recvWindow?: number;
}

export interface SpotPostGiftcardRedeemCode {
  code: string;
  externalUid?: string;
  recvWindow?: number;
}

export interface SpotGiftcardVerify {
  referenceNo: string;
  recvWindow?: number;
}

export interface SpotGiftcardCryptographyRsaPublicKey {
  recvWindow?: number;
}

export interface SpotPostGiftcardBuyCode {
  baseToken: string;
  faceToken: string;
  baseTokenAmount: number;
  recvWindow?: number;
}

export interface SpotGiftcardBuyCodeTokenLimit {
  baseToken: string;
  recvWindow?: number;
}

export interface SpotPutListenKeySPOT {
  listenKey: string;
}

export interface SpotDeleteListenKeySPOT {
  listenKey: string;
}

export interface SpotPutListenKeyMARGIN {
  listenKey: string;
}

export interface SpotDeleteListenKeyMARGIN {
  listenKey: string;
}

export interface SpotPostListenKeyISOMARGIN {
  symbol: string;
}

export interface SpotPutListenKeyISOMARGIN {
  symbol: string;
  listenKey: string;
}

export interface SpotDeleteListenKeyISOMARGIN {
  symbol: string;
  listenKey: string;
}