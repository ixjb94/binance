import { Websocket } from "./websocket"
import { Http } from "./http"
import * as SType from "../types/spot"

export class Spot {

    ApiMap = {
        baseURL: "https://api.binance.com",
        baseURLTest: "https://testnet.binance.vision",
        wsBaseURL: "wss://stream.binance.com:443",
        wsBaseURLTest: "wss://testnet.binance.vision",
    }

    timestamp = Date.now()

    api_key?: string
    api_secret?: string
    recvWindow?: number
    isTestNet?: boolean

    ws: Websocket
    http: Http

    constructor(options: SType.SpotConstructor = {}) {
        switch (options.changeBaseURL) {
            case 1:
                this.ApiMap.baseURL = "https://api1.binance.com"
                break;
            case 2:
                this.ApiMap.baseURL = "https://api2.binance.com"
                break;
            case 3:
                this.ApiMap.baseURL = "https://api3.binance.com"
                break;
            default:
                break;
        }

        if (options.changeWsStream) {
            this.ApiMap.wsBaseURL = "wss://stream.binance.com:9443"
        }

        const OPTIONS = {
            ...options,
            ...this.ApiMap,
            timestamp: this.timestamp,
        }

        // Coming from constructor
        this.api_key = options.api_key
        this.api_secret = options.api_secret
        this.recvWindow = options.recvWindow
        this.isTestNet = options.isTestNet

        // Default values
        this.recvWindow = this.recvWindow ?? 5000
        this.isTestNet = this.isTestNet ?? false

        if (!OPTIONS.recvWindow) {
            OPTIONS.recvWindow = this.recvWindow
        }

        // Websocket
        this.ws = new Websocket(OPTIONS)

        // Utils
        this.http = new Http(OPTIONS)
    }

    // ########################################### Wallet Endpoints
    // ########### Public
    /**
     * 
     * @param params 
     * @returns 
     */
    async systemStatus(params: SType.SpotSystemStatus) {
        return await this.http.publicGET("/sapi/v1/system/status", params)
    }

    // ########### Private
    /**
     * 
     * @param params 
     * @returns 
     */
    async capitalConfigGetAll(params: SType.SpotCapitalConfigGetall) {
        return await this.http.privateGET("/sapi/v1/capital/config/getall", params)
    }


    /**
     * 
     * @param params 
     * @returns 
     */
    async accountSnapshot(params: SType.SpotAccountSnapshot) {
        return await this.http.privateGET("/sapi/v1/accountSnapshot", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async accountDisableFastWithdrawSwitch(params: SType.SpotPostAccountDisableFastWithdrawSwitch) {
        return await this.http.privatePOST("/sapi/v1/account/disableFastWithdrawSwitch", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newAccountEnableFastWithdrawSwitch(params: SType.SpotPostAccountEnableFastWithdrawSwitch) {
        return await this.http.privatePOST("/sapi/v1/account/enableFastWithdrawSwitch", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newCapitalWithdrawApply(params: SType.SpotPostCapitalWithdrawApply) {
        return await this.http.privatePOST("/sapi/v1/capital/withdraw/apply", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async capitalDepositHisrec(params: SType.SpotCapitalDepositHisrec) {
        return await this.http.privateGET("/sapi/v1/capital/deposit/hisrec", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async capitalWithdrawHistory(params: SType.SpotCapitalWithdrawHistory) {
        return await this.http.privateGET("/sapi/v1/capital/withdraw/history", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async capitalDepositAddress(params: SType.SpotCapitalDepositAddress) {
        return await this.http.privateGET("/sapi/v1/capital/deposit/address", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async accountStatus(params: SType.SpotAccountStatus) {
        return await this.http.privateGET("/sapi/v1/account/status", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async accountApiTradingStatus(params: SType.SpotAccountApiTradingStatus) {
        return await this.http.privateGET("/sapi/v1/account/apiTradingStatus", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async assetDribblet(params: SType.SpotAssetDribblet) {
        return await this.http.privateGET("/sapi/v1/asset/dribblet", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newAssetDustBTC(params: SType.SpotPostAssetDustBtc) {
        return await this.http.privatePOST("/sapi/v1/asset/dust-btc", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newAssetDust(params: SType.SpotPostAssetDust) {
        return await this.http.privatePOST("/sapi/v1/asset/dust", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async assetAssetDividend(params: SType.SpotAssetAssetDividend) {
        return await this.http.privateGET("/sapi/v1/asset/assetDividend", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async assetAssetDetail(params: SType.SpotAssetAssetDetail) {
        return await this.http.privateGET("/sapi/v1/asset/assetDetail", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async assetTradeFee(params: SType.SpotAssetTradeFee) {
        return await this.http.privateGET("/sapi/v1/asset/tradeFee", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newAssetTransfer(params: SType.SpotPostAssetTransfer) {
        return await this.http.privatePOST("/sapi/v1/asset/transfer", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async assetTransfer(params: SType.SpotAssetTransfer) {
        return await this.http.privateGET("/sapi/v1/asset/transfer", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async assetGetFundingAsset(params: SType.SpotPostAssetGetFundingAsset) {
        return await this.http.privatePOST("/sapi/v1/asset/get-funding-asset", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async assetGetUserAsset(params: SType.SpotPostAssetGetUserAsset) {
        return await this.http.privatePOST("/sapi/v3/asset/getUserAsset", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newAssetConvertTransfer(params: SType.SpotPostAssetConvertTransfer) {
        return await this.http.privatePOST("/sapi/v1/asset/convert-transfer", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async assetConvertTransferQueryByPage(params: SType.SpotAssetConvertTransferQueryByPage) {
        return await this.http.privateGET("/sapi/v1/asset/convert-transfer/queryByPage", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async assetLedgerTransferCloudMiningQueryByPage(params: SType.SpotAssetLedgerTransferCloudMiningQueryByPag) {
        return await this.http.privateGET("/sapi/v1/asset/ledger-transfer/cloud-mining/queryByPage", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async accountApiRestrictions(params: SType.SpotAccountApiRestrictions) {
        return await this.http.privateGET("/sapi/v1/account/apiRestrictions", params)
    }

    // ########################################### Sub-Account Endpoints
    // ########### Public
    // ########### Private
    /**
     * 
     * @param params 
     * @returns 
     */
    async newSubAccountVirtualSubAccount(params: SType.SpotPostSubAccountVirtualSubAccount) {
        return await this.http.privatePOST("/sapi/v1/sub-account/virtualSubAccount", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async subAccountList(params: SType.SpotSubAccountList) {
        return await this.http.privateGET("/sapi/v1/sub-account/list", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async subAccountSubTransferHistory(params: SType.SpotSubAccountSubTransferHistory) {
        return await this.http.privateGET("/sapi/v1/sub-account/sub/transfer/history", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async subAccountFuturesInternalTransfer(params: SType.SpotSubAccountFuturesInternalTransfer) {
        return await this.http.privateGET("/sapi/v1/sub-account/futures/internalTransfer", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newSubAccountFuturesInternalTransfer(params: SType.SpotPostSubAccountFuturesInternalTransfer) {
        return await this.http.privatePOST("/sapi/v1/sub-account/futures/internalTransfer", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async subAccountAssets(params: SType.SpotSubAccountAssets) {
        return await this.http.privateGET("/sapi/v3/sub-account/assets", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async subAccountSpotSummary(params: SType.SpotSubAccountSpotSummary) {
        return await this.http.privateGET("/sapi/v1/sub-account/spotSummary", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async capitalDepositSubAddress(params: SType.SpotCapitalDepositSubAddress) {
        return await this.http.privateGET("/sapi/v1/capital/deposit/subAddress", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async capitalDepositSubHisrec(params: SType.SpotCapitalDepositSubHisrec) {
        return await this.http.privateGET("/sapi/v1/capital/deposit/subHisrec", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async subAccountStatus(params: SType.SpotSubAccountStatus) {
        return await this.http.privateGET("/sapi/v1/sub-account/status", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newSubAccountMarginEnable(params: SType.SpotPostSubAccountMarginEnable) {
        return await this.http.privatePOST("/sapi/v1/sub-account/margin/enable", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async subAccountMarginAccount(params: SType.SpotSubAccountMarginAccount) {
        return await this.http.privateGET("/sapi/v1/sub-account/margin/account", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async subAccountMarginAccountSummary(params: SType.SpotSubAccountMarginAccountSummary) {
        return await this.http.privateGET("/sapi/v1/sub-account/margin/accountSummary", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newSubAccountFuturesEnable(params: SType.SpotPostSubAccountFuturesEnable) {
        return await this.http.privatePOST("/sapi/v1/sub-account/futures/enable", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async subAccountFuturesAccount(params: SType.SpotSubAccountFuturesAccount) {
        return await this.http.privateGET("/sapi/v1/sub-account/futures/account", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async subAccountFuturesAccountSummary(params: SType.SpotSubAccountFuturesAccountSummary) {
        return await this.http.privateGET("/sapi/v1/sub-account/futures/accountSummary", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async subAccountFuturesPositionRisk(params: SType.SpotSubAccountFuturesPositionRisk) {
        return await this.http.privateGET("/sapi/v1/sub-account/futures/positionRisk", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newSubAccountFuturesTransfer(params: SType.SpotPostSubAccountFuturesTransfer) {
        return await this.http.privatePOST("/sapi/v1/sub-account/futures/transfer", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newSubAccountMarginTransfer(params: SType.SpotPostSubAccountMarginTransfer) {
        return await this.http.privatePOST("/sapi/v1/sub-account/margin/transfer", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newSubAccountTransferSubToSub(params: SType.SpotPostSubAccountTransferSubToSub) {
        return await this.http.privatePOST("/sapi/v1/sub-account/transfer/subToSub", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newSubAccountTransferSubToMaster(params: SType.SpotPostSubAccountTransferSubToMaster) {
        return await this.http.privatePOST("/sapi/v1/sub-account/transfer/subToMaster", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async subAccountTransferSubUserHistory(params: SType.SpotSubAccountTransferSubUserHistory) {
        return await this.http.privateGET("/sapi/v1/sub-account/transfer/subUserHistory", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newSubAccountUniversalTransfer(params: SType.SpotPostSubAccountUniversalTransfer) {
        return await this.http.privatePOST("/sapi/v1/sub-account/universalTransfer", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async subAccountUniversalTransfer(params: SType.SpotSubAccountUniversalTransfer) {
        return await this.http.privateGET("/sapi/v1/sub-account/universalTransfer", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newSubAccountBlvtEnable(params: SType.SpotPostSubAccountBlvtEnable) {
        return await this.http.privatePOST("/sapi/v1/sub-account/blvt/enable", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newSubAccountSubAccountApiIpRestriction(params: SType.SpotPostSubAccountSubAccountApiIpRestriction) {
        return await this.http.privatePOST("/sapi/v1/sub-account/subAccountApi/ipRestriction", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newSubAccountSubAccountApiIpRestrictionIpList(params: SType.SpotPostSubAccountSubAccountApiIpRestrictionIpList) {
        return await this.http.privatePOST("/sapi/v1/sub-account/subAccountApi/ipRestriction/ipList", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async subAccountSubAccountApiIpRestriction(params: SType.SpotSubAccountSubAccountApiIpRestriction) {
        return await this.http.privateGET("/sapi/v1/sub-account/subAccountApi/ipRestriction", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async deleteSubAccountSubAccountApiIpRestrictionIpList(params: SType.SpotDeleteSubAccountSubAccountApiIpRestrictionIpList) {
        return await this.http.privateDELETE("/sapi/v1/sub-account/subAccountApi/ipRestriction/ipList", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async subAccountApiRestrictionsIpRestrictionThirdPartyList(params: SType.SpotSubAccountApiRestrictionsIpRestrictionThirdPartyList) {
        return await this.http.privateGET("/sapi/v1/sub-account/apiRestrictions/ipRestriction/thirdPartyList", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async updateSubAccountSubAccountApiIpRestriction(params: SType.SpotPostSubAccountSubAccountApiIpRestriction) {
        return await this.http.privatePOST("/sapi/v2/sub-account/subAccountApi/ipRestriction", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newManagedSubaccountDeposit(params: SType.SpotPostManagedSubaccountDeposit) {
        return await this.http.privatePOST("/sapi/v1/managed-subaccount/deposit", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async managedSubaccountAsset(params: SType.SpotManagedSubaccountAsset) {
        return await this.http.privateGET("/sapi/v1/managed-subaccount/asset", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newManagedSubaccountWithdraw(params: SType.SpotPostManagedSubaccountWithdraw) {
        return await this.http.privatePOST("/sapi/v1/managed-subaccount/withdraw", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async managedSubaccountAccountSnapshot(params: SType.SpotManagedSubaccountAccountSnapshot) {
        return await this.http.privateGET("/sapi/v1/managed-subaccount/accountSnapshot", params)
    }
    // ########################################### Market Data Endpoints
    // ########### Public
    /**
     * 
     * @returns 
     */
    async ping() {
        return await this.http.simplePublicGET("/api/v3/ping", {})
    }

    /**
     * 
     * @returns 
     */
    async time() {
        return await this.http.simplePublicGET("/api/v3/time", {})
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async exchangeInfo(params: SType.SpotExchangeInfo) {
        return await this.http.simplePublicGET("/api/v3/exchangeInfo", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async depth(params: SType.SpotDepth) {
        return await this.http.simplePublicGET("/api/v3/depth", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async trades(params: SType.SpotTrades) {
        return await this.http.simplePublicGET("/api/v3/trades", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async historicalTrades(params: SType.SpotHistoricalTrades) {
        return await this.http.simplePublicGET("/api/v3/historicalTrades", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async aggTrades(params: SType.SpotAggTrades) {
        return await this.http.simplePublicGET("/api/v3/aggTrades", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async klines(params: SType.SpotKlines) {
        return await this.http.simplePublicGET("/api/v3/klines", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async uiKlines(params: SType.SpotUiKlines) {
        return await this.http.simplePublicGET("/api/v3/uiKlines", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async avgPrice(params: SType.SpotAvgPrice) {
        return await this.http.simplePublicGET("/api/v3/avgPrice", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async ticker24hr(params: SType.SpotTicker24hr) {
        return await this.http.simplePublicGET("/api/v3/ticker/24hr", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async tickerPrice(params: SType.SpotTickerPrice) {
        return await this.http.simplePublicGET("/api/v3/ticker/price", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async tickerBookTicker(params: SType.SpotTickerBookTicker) {
        return await this.http.simplePublicGET("/api/v3/ticker/bookTicker", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async ticker(params: SType.SpotTicker) {
        return await this.http.simplePublicGET("/api/v3/ticker", params)
    }
    // ########################################### Spot Account/Trade
    // ########### Private
    /**
     * 
     * @param params 
     * @returns 
     */
    async newOrderTest(params: SType.SpotPostOrderTest) {
        return await this.http.privatePOST("/api/v3/order/test", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newOrder(params: SType.SpotPostOrder) {
        return await this.http.privatePOST("/api/v3/order", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async deleteOrder(params: SType.SpotDeleteOrder) {
        return await this.http.privateDELETE("/api/v3/order", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async deleteOpenOrders(params: SType.SpotDeleteOpenOrders) {
        return await this.http.privateDELETE("/api/v3/openOrders", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async order(params: SType.SpotOrder) {
        return await this.http.privateGET("/api/v3/order", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newOrderCancelReplace(params: SType.SpotPostOrderCancelReplace) {
        return await this.http.privatePOST("/api/v3/order/cancelReplace", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async openOrders(params: SType.SpotOpenOrders) {
        return await this.http.privateGET("/api/v3/openOrders", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async allOrders(params: SType.SpotAllOrders) {
        return await this.http.privateGET("/api/v3/allOrders", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newOrderOco(params: SType.SpotPostOrderOco) {
        return await this.http.privatePOST("/api/v3/order/oco", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async deleteOrderList(params: SType.SpotDeleteOrderList) {
        return await this.http.privateDELETE("/api/v3/orderList", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async orderList(params: SType.SpotOrderList) {
        return await this.http.privateGET("/api/v3/orderList", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async allOrderList(params: SType.SpotAllOrderList) {
        return await this.http.privateGET("/api/v3/allOrderList", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async openOrderList(params: SType.SpotOpenOrderList) {
        return await this.http.privateGET("/api/v3/openOrderList", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async account(params: SType.SpotAccount) {
        return await this.http.privateGET("/api/v3/account", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async myTrades(params: SType.SpotMyTrades) {
        return await this.http.privateGET("/api/v3/myTrades", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async rateLimitOrder(params: SType.SpotRateLimitOrder) {
        return await this.http.privateGET("/api/v3/rateLimit/order", params)
    }
    // ########################################### Margin Account/Trade
    // ########### Private
    /**
     * 
     * @param params 
     * @returns 
     */
    async newMarginTransfer(params: SType.SpotPostMarginTransfer) {
        return await this.http.privatePOST("/sapi/v1/margin/transfer", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newMarginLoan(params: SType.SpotPostMarginLoan) {
        return await this.http.privatePOST("/sapi/v1/margin/loan", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newMarginRepay(params: SType.SpotPostMarginRepay) {
        return await this.http.privatePOST("/sapi/v1/margin/repay", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async marginAsset(params: SType.SpotMarginAsset) {
        return await this.http.privateGET("/sapi/v1/margin/asset", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async marginPair(params: SType.SpotMarginPair) {
        return await this.http.privateGET("/sapi/v1/margin/pair", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async marginAllAssets(params: SType.SpotMarginAllAssets) {
        return await this.http.privateGET("/sapi/v1/margin/allAssets", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async marginAllPairs(params: SType.SpotMarginAllPairs) {
        return await this.http.privateGET("/sapi/v1/margin/allPairs", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async marginPriceIndex(params: SType.SpotMarginPriceIndex) {
        return await this.http.privateGET("/sapi/v1/margin/priceIndex", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newMarginOrder(params: SType.SpotPostMarginOrder) {
        return await this.http.privatePOST("/sapi/v1/margin/order", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async deleteMarginOrder(params: SType.SpotDeleteMarginOrder) {
        return await this.http.privateDELETE("/sapi/v1/margin/order", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async deleteMarginOpenOrders(params: SType.SpotDeleteMarginOpenOrders) {
        return await this.http.privateDELETE("/sapi/v1/margin/openOrders", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async marginTransfer(params: SType.SpotMarginTransfer) {
        return await this.http.privateGET("/sapi/v1/margin/transfer", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async marginLoan(params: SType.SpotMarginLoan) {
        return await this.http.privateGET("/sapi/v1/margin/loan", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async marginRepay(params: SType.SpotMarginRepay) {
        return await this.http.privateGET("/sapi/v1/margin/repay", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async marginInterestHistory(params: SType.SpotMarginInterestHistory) {
        return await this.http.privateGET("/sapi/v1/margin/interestHistory", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async marginForceLiquidationRec(params: SType.SpotMarginForceLiquidationRec) {
        return await this.http.privateGET("/sapi/v1/margin/forceLiquidationRec", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async marginAccount(params: SType.SpotMarginAccount) {
        return await this.http.privateGET("/sapi/v1/margin/account", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async marginOrder(params: SType.SpotMarginOrder) {
        return await this.http.privateGET("/sapi/v1/margin/order", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async marginOpenOrders(params: SType.SpotMarginOpenOrders) {
        return await this.http.privateGET("/sapi/v1/margin/openOrders", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async marginAllOrders(params: SType.SpotMarginAllOrders) {
        return await this.http.privateGET("/sapi/v1/margin/allOrders", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newMarginOrderOco(params: SType.SpotPostMarginOrderOco) {
        return await this.http.privatePOST("/sapi/v1/margin/order/oco", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async deleteMarginOrderList(params: SType.SpotDeleteMarginOrderList) {
        return await this.http.privateDELETE("/sapi/v1/margin/orderList", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async marginOrderList(params: SType.SpotMarginOrderList) {
        return await this.http.privateGET("/sapi/v1/margin/orderList", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async marginAllOrderList(params: SType.SpotMarginAllOrderList) {
        return await this.http.privateGET("/sapi/v1/margin/allOrderList", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async marginOpenOrderList(params: SType.SpotMarginOpenOrderList) {
        return await this.http.privateGET("/sapi/v1/margin/openOrderList", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async marginMyTrades(params: SType.SpotMarginMyTrades) {
        return await this.http.privateGET("/sapi/v1/margin/myTrades", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async marginMaxBorrowable(params: SType.SpotMarginMaxBorrowable) {
        return await this.http.privateGET("/sapi/v1/margin/maxBorrowable", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async marginMaxTransferable(params: SType.SpotMarginMaxTransferable) {
        return await this.http.privateGET("/sapi/v1/margin/maxTransferable", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async marginTradeCoeff(params: SType.SpotMarginTradeCoeff) {
        return await this.http.privateGET("/sapi/v1/margin/tradeCoeff", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newMarginIsolatedTransfer(params: SType.SpotPostMarginIsolatedTransfer) {
        return await this.http.privatePOST("/sapi/v1/margin/isolated/transfer", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async marginIsolatedTransfer(params: SType.SpotMarginIsolatedTransfer) {
        return await this.http.privateGET("/sapi/v1/margin/isolated/transfer", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async marginIsolatedAccount(params: SType.SpotMarginIsolatedAccount) {
        return await this.http.privateGET("/sapi/v1/margin/isolated/account", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async deleteMarginIsolatedAccount(params: SType.SpotDeleteMarginIsolatedAccount) {
        return await this.http.privateDELETE("/sapi/v1/margin/isolated/account", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newMarginIsolatedAccount(params: SType.SpotPostMarginIsolatedAccount) {
        return await this.http.privatePOST("/sapi/v1/margin/isolated/account", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async marginIsolatedAccountLimit(params: SType.SpotMarginIsolatedAccountLimit) {
        return await this.http.privateGET("/sapi/v1/margin/isolated/accountLimit", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async marginIsolatedPair(params: SType.SpotMarginIsolatedPair) {
        return await this.http.privateGET("/sapi/v1/margin/isolated/pair", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async marginIsolatedAllPairs(params: SType.SpotMarginIsolatedAllPairs) {
        return await this.http.privateGET("/sapi/v1/margin/isolated/allPairs", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newBnbBurn(params: SType.SpotPostBnbBurn) {
        return await this.http.privatePOST("/sapi/v1/bnbBurn", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async bnbBurn(params: SType.SpotBnbBurn) {
        return await this.http.privateGET("/sapi/v1/bnbBurn", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async marginInterestRateHistory(params: SType.SpotMarginInterestRateHistory) {
        return await this.http.privateGET("/sapi/v1/margin/interestRateHistory", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async marginCrossMarginData(params: SType.SpotMarginCrossMarginData) {
        return await this.http.privateGET("/sapi/v1/margin/crossMarginData", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async marginIsolatedMarginData(params: SType.SpotMarginIsolatedMarginData) {
        return await this.http.privateGET("/sapi/v1/margin/isolatedMarginData", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async marginIsolatedMarginTier(params: SType.SpotMarginIsolatedMarginTier) {
        return await this.http.privateGET("/sapi/v1/margin/isolatedMarginTier", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async marginRateLimitOrder(params: SType.SpotMarginRateLimitOrder) {
        return await this.http.privateGET("/sapi/v1/margin/rateLimit/order", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async marginDribblet(params: SType.SpotMarginDribblet) {
        return await this.http.privateGET("/sapi/v1/margin/dribblet", params)
    }
    // ########################################### Savings Endpoints
    // ########### Private
    /**
     * 
     * @param params 
     * @returns 
     */
    async lendingDailyProductList(params: SType.SpotLendingDailyProductList) {
        return await this.http.privateGET("/sapi/v1/lending/daily/product/list", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async lendingDailyUserLeftQuota(params: SType.SpotLendingDailyUserLeftQuota) {
        return await this.http.privateGET("/sapi/v1/lending/daily/userLeftQuota", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newLendingDailyPurchase(params: SType.SpotPostLendingDailyPurchase) {
        return await this.http.privatePOST("/sapi/v1/lending/daily/purchase", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async lendingDailyUserRedemptionQuota(params: SType.SpotLendingDailyUserRedemptionQuota) {
        return await this.http.privateGET("/sapi/v1/lending/daily/userRedemptionQuota", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newLendingDailyRedeem(params: SType.SpotPostLendingDailyRedeem) {
        return await this.http.privatePOST("/sapi/v1/lending/daily/redeem", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async lendingDailyTokenPosition(params: SType.SpotLendingDailyTokenPosition) {
        return await this.http.privateGET("/sapi/v1/lending/daily/token/position", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async lendingProjectList(params: SType.SpotLendingProjectList) {
        return await this.http.privateGET("/sapi/v1/lending/project/list", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newLendingCustomizedFixedPurchase(params: SType.SpotPostLendingCustomizedFixedPurchase) {
        return await this.http.privatePOST("/sapi/v1/lending/customizedFixed/purchase", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async lendingProjectPositionList(params: SType.SpotLendingProjectPositionList) {
        return await this.http.privateGET("/sapi/v1/lending/project/position/list", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async lendingUnionAccount(params: SType.SpotLendingUnionAccount) {
        return await this.http.privateGET("/sapi/v1/lending/union/account", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async lendingUnionPurchaseRecord(params: SType.SpotLendingUnionPurchaseRecord) {
        return await this.http.privateGET("/sapi/v1/lending/union/purchaseRecord", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async lendingUnionRedemptionRecord(params: SType.SpotLendingUnionRedemptionRecord) {
        return await this.http.privateGET("/sapi/v1/lending/union/redemptionRecord", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async lendingUnionInterestHistory(params: SType.SpotLendingUnionInterestHistory) {
        return await this.http.privateGET("/sapi/v1/lending/union/interestHistory", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newLendingPositionChanged(params: SType.SpotPostLendingPositionChanged) {
        return await this.http.privatePOST("/sapi/v1/lending/positionChanged", params)
    }
    // ########################################### Stacking Endpoints
    // ########### Private
    /**
     * 
     * @param params 
     * @returns 
     */
    async stakingProductList(params: SType.SpotStakingProductList) {
        return await this.http.privateGET("/sapi/v1/staking/productList", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newStakingPurchase(params: SType.SpotPostStakingPurchase) {
        return await this.http.privatePOST("/sapi/v1/staking/purchase", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newStakingRedeem(params: SType.SpotPostStakingRedeem) {
        return await this.http.privatePOST("/sapi/v1/staking/redeem", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async stakingPosition(params: SType.SpotStakingPosition) {
        return await this.http.privateGET("/sapi/v1/staking/position", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async stakingStakingRecord(params: SType.SpotStakingStakingRecord) {
        return await this.http.privateGET("/sapi/v1/staking/stakingRecord", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newStakingSetAutoStaking(params: SType.SpotPostStakingSetAutoStaking) {
        return await this.http.privatePOST("/sapi/v1/staking/setAutoStaking", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async stakingPersonalLeftQuota(params: SType.SpotStakingPersonalLeftQuota) {
        return await this.http.privateGET("/sapi/v1/staking/personalLeftQuota", params)
    }
    // ########################################### Mining Endpoints
    // ########### Private
    /**
     * 
     * @param params 
     * @returns 
     */
    async miningPubAlgoList(params: SType.SpotMiningPubAlgoList) {
        return await this.http.privateGET("/sapi/v1/mining/pub/algoList", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async miningPubCoinList(params: SType.SpotMiningPubCoinList) {
        return await this.http.privateGET("/sapi/v1/mining/pub/coinList", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async miningWorkerDetail(params: SType.SpotMiningWorkerDetail) {
        return await this.http.privateGET("/sapi/v1/mining/worker/detail", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async miningWorkerList(params: SType.SpotMiningWorkerList) {
        return await this.http.privateGET("/sapi/v1/mining/worker/list", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async miningPaymentList(params: SType.SpotMiningPaymentList) {
        return await this.http.privateGET("/sapi/v1/mining/payment/list", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async miningPaymentOther(params: SType.SpotMiningPaymentOther) {
        return await this.http.privateGET("/sapi/v1/mining/payment/other", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async miningHashTransferConfigDetailsList(params: SType.SpotMiningHashTransferConfigDetailsList) {
        return await this.http.privateGET("/sapi/v1/mining/hash-transfer/config/details/list", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async miningHashTransferProfitDetails(params: SType.SpotMiningHashTransferProfitDetails) {
        return await this.http.privateGET("/sapi/v1/mining/hash-transfer/profit/details", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newMiningHashTransferConfig(params: SType.SpotPostMiningHashTransferConfig) {
        return await this.http.privatePOST("/sapi/v1/mining/hash-transfer/config", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async deleteMiningHashTransferConfigCancel(params: SType.SpotPostMiningHashTransferConfigCancel) {
        return await this.http.privatePOST("/sapi/v1/mining/hash-transfer/config/cancel", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async miningStatisticsUserStatus(params: SType.SpotMiningStatisticsUserStatus) {
        return await this.http.privateGET("/sapi/v1/mining/statistics/user/status", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async miningStatisticsUserList(params: SType.SpotMiningStatisticsUserList) {
        return await this.http.privateGET("/sapi/v1/mining/statistics/user/list", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async miningPaymentUid(params: SType.SpotMiningPaymentUid) {
        return await this.http.privateGET("/sapi/v1/mining/payment/uid", params)
    }
    // ########################################### Futures
    // ########### Private
    /**
     * 
     * @param params 
     * @returns 
     */
    async newFuturesTransfer(params: SType.SpotPostFuturesTransfer) {
        return await this.http.privatePOST("/sapi/v1/futures/transfer", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async futuresTransfer(params: SType.SpotFuturesTransfer) {
        return await this.http.privateGET("/sapi/v1/futures/transfer", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async futuresLoanBorrowHistory(params: SType.SpotFuturesLoanBorrowHistory) {
        return await this.http.privateGET("/sapi/v1/futures/loan/borrow/history", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async futuresLoanRepayHistory(params: SType.SpotFuturesLoanRepayHistory) {
        return await this.http.privateGET("/sapi/v1/futures/loan/repay/history", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async futuresLoanWallet(params: SType.SpotFuturesLoanWallet) {
        return await this.http.privateGET("/sapi/v2/futures/loan/wallet", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async futuresLoanAdjustCollateralHistory(params: SType.SpotFuturesLoanAdjustCollateralHistory) {
        return await this.http.privateGET("/sapi/v1/futures/loan/adjustCollateral/history", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async futuresLoanLiquidationHistory(params: SType.SpotFuturesLoanLiquidationHistory) {
        return await this.http.privateGET("/sapi/v1/futures/loan/liquidationHistory", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async futuresLoanInterestHistory(params: SType.SpotFuturesLoanInterestHistory) {
        return await this.http.privateGET("/sapi/v1/futures/loan/interestHistory", params)
    }
    // ########################################### Futures Algo Endpoints
    // ########### Private
    /**
     * 
     * @param params 
     * @returns 
     */
    async newAlgoFuturesNewOrderVp(params: SType.SpotPostAlgoFuturesNewOrderVp) {
        return await this.http.privatePOST("/sapi/v1/algo/futures/newOrderVp", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newAlgoFuturesNewOrderTwap(params: SType.SpotPostAlgoFuturesNewOrderTwap) {
        return await this.http.privatePOST("/sapi/v1/algo/futures/newOrderTwap", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async deleteAlgoFuturesOrder(params: SType.SpotDeleteAlgoFuturesOrder) {
        return await this.http.privateDELETE("/sapi/v1/algo/futures/order", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async algoFuturesOpenOrders(params: SType.SpotAlgoFuturesOpenOrders) {
        return await this.http.privateGET("/sapi/v1/algo/futures/openOrders", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async algoFuturesHistoricalOrders(params: SType.SpotAlgoFuturesHistoricalOrders) {
        return await this.http.privateGET("/sapi/v1/algo/futures/historicalOrders", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async algoFuturesSubOrders(params: SType.SpotAlgoFuturesSubOrders) {
        return await this.http.privateGET("/sapi/v1/algo/futures/subOrders", params)
    }
    // ########################################### Portfolio Margin Endpoints
    // ########### Private
    /**
     * 
     * @param params 
     * @returns 
     */
    async portfolioAccount(params: SType.SpotPortfolioAccount) {
        return await this.http.privateGET("/sapi/v1/portfolio/account", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async portfolioCollateralRate(params: SType.SpotPortfolioCollateralRate) {
        return await this.http.privateGET("/sapi/v1/portfolio/collateralRate", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async portfolioPmLoan(params: SType.SpotPortfolioPmLoan) {
        return await this.http.privateGET("/sapi/v1/portfolio/pmLoan", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newPortfolioRepay(params: SType.SpotPostPortfolioRepay) {
        return await this.http.privatePOST("/sapi/v1/portfolio/repay", params)
    }
    // ########################################### BLVT Endpoints
    // ########### Private
    /**
     * 
     * @param params 
     * @returns 
     */
    async blvtTokenInfo(params: SType.SpotBlvtTokenInfo) {
        return await this.http.privateGET("/sapi/v1/blvt/tokenInfo", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newBlvtSubscribe(params: SType.SpotPostBlvtSubscribe) {
        return await this.http.privatePOST("/sapi/v1/blvt/subscribe", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async blvtSubscribeRecord(params: SType.SpotBlvtSubscribeRecord) {
        return await this.http.privateGET("/sapi/v1/blvt/subscribe/record", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newBlvtRedeem(params: SType.SpotPostBlvtRedeem) {
        return await this.http.privatePOST("/sapi/v1/blvt/redeem", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async blvtRedeemRecord(params: SType.SpotBlvtRedeemRecord) {
        return await this.http.privateGET("/sapi/v1/blvt/redeem/record", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async blvtUserLimit(params: SType.SpotBlvtUserLimit) {
        return await this.http.privateGET("/sapi/v1/blvt/userLimit", params)
    }
    // ########################################### BSwap Endpoints
    // ########### Private
    /**
     * 
     * @param params 
     * @returns 
     */
    async bswapPools(params: SType.SpotBswapPools) {
        return await this.http.privateGET("/sapi/v1/bswap/pools", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async bswapLiquidity(params: SType.SpotBswapLiquidity) {
        return await this.http.privateGET("/sapi/v1/bswap/liquidity", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newBswapLiquidityAdd(params: SType.SpotPostBswapLiquidityAdd) {
        return await this.http.privatePOST("/sapi/v1/bswap/liquidityAdd", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async deleteBswapLiquidityRemove(params: SType.SpotPostBswapLiquidityRemove) {
        return await this.http.privatePOST("/sapi/v1/bswap/liquidityRemove", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async bswapLiquidityOps(params: SType.SpotBswapLiquidityOps) {
        return await this.http.privateGET("/sapi/v1/bswap/liquidityOps", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async bswapQuote(params: SType.SpotBswapQuote) {
        return await this.http.privateGET("/sapi/v1/bswap/quote", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newBswapSwap(params: SType.SpotPostBswapSwap) {
        return await this.http.privatePOST("/sapi/v1/bswap/swap", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async bswapSwap(params: SType.SpotBswapSwap) {
        return await this.http.privateGET("/sapi/v1/bswap/swap", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async bswapPoolConfigure(params: SType.SpotBswapPoolConfigure) {
        return await this.http.privateGET("/sapi/v1/bswap/poolConfigure", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async bswapAddLiquidityPreview(params: SType.SpotBswapAddLiquidityPreview) {
        return await this.http.privateGET("/sapi/v1/bswap/addLiquidityPreview", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async bswapRemoveLiquidityPreview(params: SType.SpotBswapRemoveLiquidityPreview) {
        return await this.http.privateGET("/sapi/v1/bswap/removeLiquidityPreview", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async bswapUnclaimedRewards(params: SType.SpotBswapUnclaimedRewards) {
        return await this.http.privateGET("/sapi/v1/bswap/unclaimedRewards", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newBswapClaimRewards(params: SType.SpotPostBswapClaimRewards) {
        return await this.http.privatePOST("/sapi/v1/bswap/claimRewards", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async bswapClaimedHistory(params: SType.SpotBswapClaimedHistory) {
        return await this.http.privateGET("/sapi/v1/bswap/claimedHistory", params)
    }
    // ########################################### Fiat Endpoints
    // ########### Private
    /**
     * 
     * @param params 
     * @returns 
     */
    async fiatOrders(params: SType.SpotFiatOrders) {
        return await this.http.privateGET("/sapi/v1/fiat/orders", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async fiatPayments(params: SType.SpotFiatPayments) {
        return await this.http.privateGET("/sapi/v1/fiat/payments", params)
    }
    // ########################################### C2C Endpoints
    // ########### Private
    /**
     * 
     * @param params 
     * @returns 
     */
    async c2cOrderMatchListUserOrderHistory(params: SType.SpotC2cOrderMatchListUserOrderHistory) {
        return await this.http.privateGET("/sapi/v1/c2c/orderMatch/listUserOrderHistory", params)
    }
    // ########################################### VIP Loans Endpoints
    // ########### Private
    /**
     * 
     * @param params 
     * @returns 
     */
    async loanVipOngoingOrders(params: SType.SpotLoanVipOngoingOrders) {
        return await this.http.privateGET("/sapi/v1/loan/vip/ongoing/orders", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newLoanVipRepay(params: SType.SpotPostLoanVipRepay) {
        return await this.http.privatePOST("/sapi/v1/loan/vip/repay", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async loanVipRepayHistory(params: SType.SpotLoanVipRepayHistory) {
        return await this.http.privateGET("/sapi/v1/loan/vip/repay/history", params)
    }
    // ########################################### Crypto Loans Endpoints
    // ########### Private
    /**
     * 
     * @param params 
     * @returns 
     */
    async loanIncome(params: SType.SpotLoanIncome) {
        return await this.http.privateGET("/sapi/v1/loan/income", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newLoanBorrow(params: SType.SpotPostLoanBorrow) {
        return await this.http.privatePOST("/sapi/v1/loan/borrow", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async loanBorrowHistory(params: SType.SpotLoanBorrowHistory) {
        return await this.http.privateGET("/sapi/v1/loan/borrow/history", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async loanOngoingOrders(params: SType.SpotLoanOngoingOrders) {
        return await this.http.privateGET("/sapi/v1/loan/ongoing/orders", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newLoanRepay(params: SType.SpotPostLoanRepay) {
        return await this.http.privatePOST("/sapi/v1/loan/repay", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async loanRepayHistory(params: SType.SpotLoanRepayHistory) {
        return await this.http.privateGET("/sapi/v1/loan/repay/history", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newLoanAdjustLtv(params: SType.SpotPostLoanAdjustLtv) {
        return await this.http.privatePOST("/sapi/v1/loan/adjust/ltv", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async loanLtvAdjustmentHistory(params: SType.SpotLoanLtvAdjustmentHistory) {
        return await this.http.privateGET("/sapi/v1/loan/ltv/adjustment/history", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async loanLoanableData(params: SType.SpotLoanLoanableData) {
        return await this.http.privateGET("/sapi/v1/loan/loanable/data", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async loanCollateralData(params: SType.SpotLoanCollateralData) {
        return await this.http.privateGET("/sapi/v1/loan/collateral/data", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async loanRepayCollateralRate(params: SType.SpotLoanRepayCollateralRate) {
        return await this.http.privateGET("/sapi/v1/loan/repay/collateral/rate", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newLoanCustomizeMarginCall(params: SType.SpotPostLoanCustomizeMarginCall) {
        return await this.http.privatePOST("/sapi/v1/loan/customize/margin_call", params)
    }
    // ########################################### Pay Endpoints
    // ########### Private
    /**
     * 
     * @param params 
     * @returns 
     */
    async payTransactions(params: SType.SpotPayTransactions) {
        return await this.http.privateGET("/sapi/v1/pay/transactions", params)
    }
    // ########################################### Convert Endpoints
    // ########### Private
    /**
     * 
     * @param params 
     * @returns 
     */
    async convertExchangeInfo(params: SType.SpotConvertExchangeInfo) {
        return await this.http.privateGET("/sapi/v1/convert/exchangeInfo", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async convertAssetInfo(params: SType.SpotConvertAssetInfo) {
        return await this.http.privateGET("/sapi/v1/convert/assetInfo", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newConvertGetQuote(params: SType.SpotPostConvertGetQuote) {
        return await this.http.privatePOST("/sapi/v1/convert/getQuote", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newConvertAcceptQuote(params: SType.SpotPostConvertAcceptQuote) {
        return await this.http.privatePOST("/sapi/v1/convert/acceptQuote", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async convertOrderStatus(params: SType.SpotConvertOrderStatus) {
        return await this.http.privateGET("/sapi/v1/convert/orderStatus", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async convertTradeFlow(params: SType.SpotConvertTradeFlow) {
        return await this.http.privateGET("/sapi/v1/convert/tradeFlow", params)
    }
    // ########################################### Rebate Endpoints
    // ########### Private
    /**
     * 
     * @param params 
     * @returns 
     */
    async rebateTaxQuery(params: SType.SpotRebateTaxQuery) {
        return await this.http.privateGET("/sapi/v1/rebate/taxQuery", params)
    }
    // ########################################### NFT Endpoints
    // ########### Private
    /**
     * 
     * @param params 
     * @returns 
     */
    async nftHistoryTransactions(params: SType.SpotNftHistoryTransactions) {
        return await this.http.privateGET("/sapi/v1/nft/history/transactions", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async nftHistoryDeposit(params: SType.SpotNftHistoryDeposit) {
        return await this.http.privateGET("/sapi/v1/nft/history/deposit", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async nftHistoryWithdraw(params: SType.SpotNftHistoryWithdraw) {
        return await this.http.privateGET("/sapi/v1/nft/history/withdraw", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async nftUserGetAsset(params: SType.SpotNftUserGetAsset) {
        return await this.http.privateGET("/sapi/v1/nft/user/getAsset", params)
    }
    // ########################################### Binance Code Endpoints
    // ########### Private
    /**
     * 
     * @param params 
     * @returns 
     */
    async newGiftcardCreateCode(params: SType.SpotPostGiftcardCreateCode) {
        return await this.http.privatePOST("/sapi/v1/giftcard/createCode", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newGiftcardRedeemCode(params: SType.SpotPostGiftcardRedeemCode) {
        return await this.http.privatePOST("/sapi/v1/giftcard/redeemCode", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async giftCardVerify(params: SType.SpotGiftcardVerify) {
        return await this.http.privateGET("/sapi/v1/giftcard/verify", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async giftCardCryptographyRsaPublicKey(params: SType.SpotGiftcardCryptographyRsaPublicKey) {
        return await this.http.privateGET("/sapi/v1/giftcard/cryptography/rsa-public-key", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newGiftCardBuyCode(params: SType.SpotPostGiftcardBuyCode) {
        return await this.http.privatePOST("/sapi/v1/giftcard/buyCode", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async giftcardBuyCodeTokenLimit(params: SType.SpotGiftcardBuyCodeTokenLimit) {
        return await this.http.privateGET("/sapi/v1/giftcard/buyCode/token-limit", params)
    }

    // ################# Listen Key
    // ###### Listen Key - SPOT
    /**
     * 
     * @param params 
     * @returns 
     */
    async newListenKeySPOT(params: SType.SpotPostListenKeySPOT) {
        return await this.http.simplePublicPOST("/api/v3/userDataStream", params)
    }

    /**
     * @param { } [params]
     */
    async keepAliveListenKeySPOT(params: SType.SpotPutListenKeySPOT) {
        return await this.http.simplePublicPUT("/api/v3/userDataStream", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async deleteListenKeySPOT(params: SType.SpotDeleteListenKeySPOT) {
        return await this.http.simplePublicDELETE("/api/v3/userDataStream", params)
    }
    // ###### Listen Key - Margin
    /**
     * 
     * @param params 
     * @returns 
     */
    async newListenKeyMARGIN(params: SType.SpotPostListenKeyMARGIN) {
        return await this.http.simplePublicPOST("/sapi/v1/userDataStream", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async keepAliveListenKeyMARGIN(params: SType.SpotPutListenKeyMARGIN) {
        return await this.http.simplePublicPUT("/sapi/v1/userDataStream", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async deleteListenKeyMARGIN(params: SType.SpotDeleteListenKeyMARGIN) {
        return await this.http.simplePublicDELETE("/sapi/v1/userDataStream", params)
    }
    // ###### Listen Key - Isolated Margin
    /**
     * 
     * @param params 
     * @returns 
     */
    async newListenKeyISOMARGIN(params: SType.SpotPostListenKeyISOMARGIN) {
        return await this.http.simplePublicPOST("/sapi/v1/userDataStream/isolated", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async keepAliveListenKeyISOMARGIN(params: SType.SpotPutListenKeyISOMARGIN) {
        return await this.http.simplePublicPUT("/sapi/v1/userDataStream/isolated", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async deleteListenKeyISOMARGIN(params: SType.SpotDeleteListenKeyISOMARGIN) {
        return await this.http.simplePublicDELETE("/sapi/v1/userDataStream/isolated", params)
    }
}