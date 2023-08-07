import { Websocket } from "./websocket"
import { Http } from "./http"
import * as FType from "../types/futures"

export class Futures {

    ApiMap = {
        baseURL: "https://fapi.binance.com",
        baseURLTest: "https://testnet.binancefuture.com",
        wsAuthURL: "wss://fstream-auth.binance.com",
        wsBaseURL: "wss://fstream.binance.com",
        wsBaseURLTest: "wss://stream.binancefuture.com",
    }

    timestamp = Date.now()

    api_key?: string
    api_secret?: string
    recvWindow?: number
    isTestNet?: boolean
    ws: Websocket
    http: Http

    constructor(options: FType.FuturesConstructor = {}) {

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

    // ########################################### Market Data Endpoints
    // ########### Public
    /**
     * @param params 
     * @returns 
     */
    async ping(params: FType.FuturesJustRecvWindow) {
        return await this.http.publicGET("/fapi/v1/ping", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async time(params: FType.FuturesJustRecvWindow) {
        return await this.http.publicGET("/fapi/v1/time", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async exchangeInfo(params: FType.FuturesJustRecvWindow) {
        return await this.http.publicGET("/fapi/v1/exchangeInfo", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async depth(params: FType.FuturesDepth) {
        return await this.http.publicGET("/fapi/v1/depth", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async trades(params: FType.FuturesTrades) {
        return await this.http.publicGET("/fapi/v1/trades", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async historicalTrades(params: FType.FuturesHistoricalTrades) {
        return await this.http.publicGET("/fapi/v1/historicalTrades", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async aggTrades(params: FType.FuturesAggTrades) {
        return await this.http.publicGET("/fapi/v1/aggTrades", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async klines(params: FType.FuturesKlines) {
        return await this.http.publicGET("/fapi/v1/klines", params)
    }
    
    /**
     * 
     * @param params 
     * @returns 
     */
    async continuousKlines(params: FType.FuturesContinuousKlines) {
        return await this.http.publicGET("/fapi/v1/continuousKlines", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async indexPriceKlines(params: FType.FuturesIndexPriceKlines) {
        return await this.http.publicGET("/fapi/v1/indexPriceKlines", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async markPriceKlines(params: FType.FuturesMarkPriceKlines) {
        return await this.http.publicGET("/fapi/v1/markPriceKlines", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async premiumIndex(params: FType.FuturesPremiumIndex) {
        return await this.http.publicGET("/fapi/v1/premiumIndex", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async fundingRate(params: FType.FuturesFundingRate) {
        return await this.http.publicGET("/fapi/v1/fundingRate", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async ticker24hr(params: FType.Futures24hr) {
        return await this.http.publicGET("/fapi/v1/ticker/24hr", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async tickerPrice(params: FType.FuturesTickerPrice) {
        return await this.http.publicGET("/fapi/v1/ticker/price", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async tickerBookTicker(params: FType.FuturesTickerBookTicker) {
        return await this.http.publicGET("/fapi/v1/ticker/bookTicker", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async openInterest(params: FType.FuturesOpenInterest) {
        return await this.http.publicGET("/fapi/v1/openInterest", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async dataOpenInterestHist(params: FType.FuturesDataOpenInterestHist) {
        return await this.http.publicGET("/futures/data/openInterestHist", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async dataTopLongShortAccountRatio(params: FType.FuturesDataTopLongShortAccountRatio) {
        return await this.http.publicGET("/futures/data/topLongShortAccountRatio", params)
    }

    /**
      * 
      * @param params 
      * @returns 
      */
    async dataTopLongShortPositionRatio(params: FType.FuturesDataTopLongShortPositionRatio) {
        return await this.http.publicGET("/futures/data/topLongShortPositionRatio", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async dataGlobalLongShortAccountRatio(params: FType.FuturesDataGlobalLongShortAccountRatio) {
        return await this.http.publicGET("/futures/data/globalLongShortAccountRatio", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async dataTakerLongShortRatio(params: FType.FuturesDataTakerLongShortRatio) {
        return await this.http.publicGET("/futures/data/takerlongshortRatio", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async lvtKlines(params: FType.FuturesLvtKlines) {
        return await this.http.publicGET("/fapi/v1/lvtKlines", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async indexInfo(params: FType.FuturesIndexInfo) {
        return await this.http.publicGET("/fapi/v1/indexInfo", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async assetIndex(params: FType.FuturesAssetIndex) {
        return await this.http.publicGET("/fapi/v1/assetIndex", params)
    }
    // ########################################### Account/Trades Endpoints
    // ########### Private
    /**
     * 
     * @param params 
     * @returns 
     */
    async updatePositionSideDual(params: FType.FuturesPostPositionSideDual) {
        return await this.http.privatePOST("/fapi/v1/positionSide/dual", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async positionSideDual(params: FType.FuturesGetPositionSideDual) {
        return await this.http.privateGET("/fapi/v1/positionSide/dual", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async updateMultiAssetsMargin(params: FType.FuturesPostMultiAssetsMargin) {
        return await this.http.privatePOST("/fapi/v1/multiAssetsMargin", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async multiAssetsMargin(params: FType.FuturesGetMultiAssetsMargin) {
        return await this.http.privateGET("/fapi/v1/multiAssetsMargin", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newOrder(params: FType.FuturesPostOrder) {
        return await this.http.privatePOST("/fapi/v1/order", params)
    }

    /**
      * 
      * @param params 
      * @returns 
      */
    async newBatchOrders(params: FType.FuturesPostBatchOrders) {
        return await this.http.privatePOST("/fapi/v1/batchOrders", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async order(params: FType.FuturesGetOrder) {
        return await this.http.privateGET("/fapi/v1/order", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async deleteOrder(params: FType.FuturesDeleteOrder) {
        return await this.http.privateDELETE("/fapi/v1/order", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async deleteAllOpenOrders(params: FType.FuturesDeleteAllOpenOrders) {
        return await this.http.privateDELETE("/fapi/v1/allOpenOrders", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async deleteBatchOrders(params: FType.FuturesDeleteBatchOrders) {
        return await this.http.privateDELETE("/fapi/v1/batchOrders", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async deleteCountDownCancelAll(params: FType.FuturesPostCountDownCancelAll) {
        return await this.http.privatePOST("/fapi/v1/countdownCancelAll", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async openOrder(params: FType.FuturesGetOpenOrder) {
        return await this.http.privateGET("/fapi/v1/openOrder", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async openOrders(params: FType.FuturesGetOpenOrders) {
        return await this.http.privateGET("/fapi/v1/openOrders", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async allOrders(params: FType.FuturesGetAllOrders) {
        return await this.http.privateGET("/fapi/v1/allOrders", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async balance(params: FType.FuturesGetBalance) {
        return await this.http.privateGET("/fapi/v2/balance", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async account(params: FType.FuturesGetAccount) {
        return await this.http.privateGET("/fapi/v2/account", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async updateLeverage(params: FType.FuturesPostLeverage) {
        return await this.http.privatePOST("/fapi/v1/leverage", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async updateMarginType(params: FType.FuturesPostMarginType) {
        return await this.http.privatePOST("/fapi/v1/marginType", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async updatePositionMargin(params: FType.FuturesPostPositionMargin) {
        return await this.http.privatePOST("/fapi/v1/positionMargin", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async positionMarginHistory(params: FType.FuturesGetPositionMarginHistory) {
        return await this.http.privateGET("/fapi/v1/positionMargin/history", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async positionRisk(params: FType.FuturesGetPositionRisk) {
        return await this.http.privateGET("/fapi/v2/positionRisk", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async userTrades(params: FType.FuturesGetUserTrades) {
        return await this.http.privateGET("/fapi/v1/userTrades", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async income(params: FType.FuturesGetIncome) {
        return await this.http.privateGET("/fapi/v1/income", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async leverageBracket(params: FType.FuturesGetLeverageBracket) {
        return await this.http.privateGET("/fapi/v1/leverageBracket", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async adlQuantile(params: FType.FuturesGetADLQuantile) {
        return await this.http.privateGET("/fapi/v1/adlQuantile", params)
    }

    /**
      * 
      * @param params 
      * @returns 
      */
    async forceOrders(params: FType.FuturesGetForceOrders) {
        return await this.http.privateGET("/fapi/v1/forceOrders", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async apiTradingStatus(params: FType.FuturesGetApiTradingStatus) {
        return await this.http.privateGET("/fapi/v1/apiTradingStatus", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async commissionRate(params: FType.FuturesGetCommissionRate) {
        return await this.http.privateGET("/fapi/v1/commissionRate", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async incomeAsyn(params: FType.FuturesGetIncomeAsyn) {
        return await this.http.privateGET("/fapi/v1/income/asyn", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async incomeAsynId(params: FType.FuturesGetIncomeAsynId) {
        return await this.http.privateGET("/fapi/v1/income/asyn/id", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async newListenKey(params: FType.FuturesPostListenKey) {
        return await this.http.privatePOST("/fapi/v1/listenKey", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async keepAliveListenKey(params: FType.FuturesPutListenKey) {
        return await this.http.privatePUT("/fapi/v1/listenKey", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async deleteListenKey(params: FType.FuturesDeleteListenKey) {
        return await this.http.privateDELETE("/fapi/v1/listenKey", params)
    }
    // ########################################### Portfolio Margin Endpoints
    // ########### Public
    /**
     * 
     * @param params 
     * @returns 
     */
    async pmExchangeInfo(params: FType.FuturesGetPmExchangeInfo) {
        return await this.http.publicGET("/fapi/v1/pmExchangeInfo", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async pmAccountInfo(params: FType.FuturesPmAccountInfo) {
        return await this.http.publicGET("/fapi/v1/pmAccountInfo", params)
    }
}