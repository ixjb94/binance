import { Websocket } from "./websocket"
import { Http } from "./http"
import * as CMType from "../types/coinm"

export class CoinM {
    
    ApiMap = {
        baseURL: "https://dapi.binance.com",
        baseURLTest: "https://testnet.binancefuture.com",
        wsBaseURL: "wss://dstream.binance.com",
        wsBaseURLTest: "wss://dstream.binancefuture.com",
    }

    timestamp = Date.now()

    api_key?: string
    api_secret?: string
    recvWindow?: number
    isTestNet?: boolean
    ws: Websocket
    http: Http

    constructor(options: CMType.CoinMConstructor = {}) {

        const OPTIONS = {
            ...options,
            ...this.ApiMap,
            timestamp: this.timestamp,
        }

        // Coming from constructor
        this.api_key    = options.api_key
        this.api_secret = options.api_secret
        this.recvWindow = options.recvWindow
        this.isTestNet  = options.isTestNet

        // Default values
        this.recvWindow = this.recvWindow ?? 5000
        this.isTestNet  = this.isTestNet  ?? false
        
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
     * 
     * @param params 
     * @returns 
     */
    async ping(params?: CMType.CoinmPing) {
        return await this.http.publicGET("/dapi/v1/ping", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async time(params?: CMType.CoinmTime) {
        return await this.http.publicGET("/dapi/v1/time", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async exchangeInfo(params?: CMType.CoinmExchangeInfo) {
        return await this.http.publicGET("/dapi/v1/exchangeInfo", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async depth(params: CMType.CoinmDepth) {
        return await this.http.publicGET("/dapi/v1/depth", params)
    }
    
    /**
     * 
     * @param params 
     * @returns 
     */
    async trades(params: CMType.CoinmTrades) {
        return await this.http.publicGET("/dapi/v1/trades", params)
    }
    
    /**
     * 
     * @param params 
     * @returns 
     */
    async historicalTrades(params: CMType.CoinmHistoricalTrades) {
        return await this.http.publicGET("/dapi/v1/historicalTrades", params)
    }
    
    /**
     * 
     * @param params 
     * @returns 
     */
    async aggTrades(params: CMType.CoinmAggTrades) {
        return await this.http.publicGET("/dapi/v1/aggTrades", params)
    }
    
    /**
     * 
     * @param params 
     * @returns 
     */
    async premiumIndex(params: CMType.CoinmPremiumIndex) {
        return await this.http.publicGET("/dapi/v1/premiumIndex", params)
    }
    
    /**
     * 
     * @param params 
     * @returns 
     */
    async fundingRate(params: CMType.CoinmFundingRate) {
        return await this.http.publicGET("/dapi/v1/fundingRate", params)
    }
    
    /**
     * 
     * @param params 
     * @returns 
     */
    async klines(params: CMType.CoinmKlines) {
        return await this.http.publicGET("/dapi/v1/klines", params)
    }
    
    /**
     * 
     * @param params 
     * @returns 
     */
    async continuousKlines(params: CMType.CoinmContinuousKlines) {
        return await this.http.publicGET("/dapi/v1/continuousKlines", params)
    }
    
    /**
     * 
     * @param params 
     * @returns 
     */
    async indexPriceKlines(params: CMType.CoinmIndexPriceKlines) {
        return await this.http.publicGET("/dapi/v1/indexPriceKlines", params)
    }
    
    /**
     * 
     * @param params 
     * @returns 
     */
    async markPriceKlines(params: CMType.CoinmMarkPriceKlines) {
        return await this.http.publicGET("/dapi/v1/markPriceKlines", params)
    }
    
    /**
     * 
     * @param params 
     * @returns 
     */
    async ticker24hr(params: CMType.CoinmTicker24hr) {
        return await this.http.publicGET("/dapi/v1/ticker/24hr", params)
    }
    
    /**
     * 
     * @param params 
     * @returns 
     */
    async tickerPrice(params: CMType.CoinmTickerPrice) {
        return await this.http.publicGET("/dapi/v1/ticker/price", params)
    }
   
    /**
     * 
     * @param params 
     * @returns 
     */
    async tickerBookTicker(params: CMType.CoinmTickerBookTicker) {
        return await this.http.publicGET("/dapi/v1/ticker/bookTicker", params)
    }
    
    /**
     * 
     * @param params 
     * @returns 
     */
    async openInterest(params: CMType.CoinmOpenInterest) {
        return await this.http.publicGET("/dapi/v1/openInterest", params)
    }
    
    /**
     * 
     * @param params 
     * @returns 
     */
    async dataOpenInterestHist(params: CMType.CoinmFuturesDataOpenInterestHist) {
        return await this.http.publicGET("/futures/data/openInterestHist", params)
    }
    
    /**
     * 
     * @param params 
     * @returns 
     */
    async dataTopLongShortAccountRatio(params: CMType.CoinmFuturesDataTopLongShortAccountRatio) {
        return await this.http.publicGET("/futures/data/topLongShortAccountRatio", params)
    }
    
    /**
     * 
     * @param params 
     * @returns 
     */
    async dataTopLongShortPositionRatio(params: CMType.CoinmFuturesDataTopLongShortPositionRatio) {
        return await this.http.publicGET("/futures/data/topLongShortPositionRatio", params)
    }
    
    /**
     * 
     * @param params 
     * @returns 
     */
    async dataGlobalLongShortAccountRatio(params: CMType.CoinmFuturesDataGlobalLongShortAccountRatio) {
        return await this.http.publicGET("/futures/data/globalLongShortAccountRatio", params)
    }
    
    /**
     * 
     * @param params 
     * @returns 
     */
    async dataTakerBuySellVol(params: CMType.CoinmFuturesDataTakerBuySellVol) {
        return await this.http.publicGET("/futures/data/takerBuySellVol", params)
    }
    
    /**
     * 
     * @param params 
     * @returns 
     */
    async dataBasis(params: CMType.CoinmFuturesDataBasis) {
        return await this.http.publicGET("/futures/data/basis", params)
    }
    // ########################################### Account/Trades Endpoints
    // ########### Private
    /**
     * 
     * @param params 
     * @returns 
     */
     async updatePositionSideDual(params: CMType.CoinmPostPositionSideDual) {
        return await this.http.privatePOST("/dapi/v1/positionSide/dual", params)
    }

    /**
     * @param {} [params]
     */
     async positionSideDual(params?: CMType.CoinmPositionSideDual) {
        return await this.http.privateGET("/dapi/v1/positionSide/dual", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
     async newOrder(params: CMType.CoinmPostOrder) {
        return await this.http.privatePOST("/dapi/v1/order", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
     async updateOrder(params: CMType.CoinmPutOrder) {
        return await this.http.privatePUT("/dapi/v1/order", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
     async newBatchOrders(params: CMType.CoinmPostBatchOrders) {
        return await this.http.privatePOST("/dapi/v1/batchOrders", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
     async updateBatchOrders(params: CMType.CoinmPutBatchOrders) {
        return await this.http.privatePUT("/dapi/v1/batchOrders", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
     async orderAmendment(params: CMType.CoinmOrderAmendment) {
        return await this.http.privateGET("/dapi/v1/orderAmendment", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
     async order(params: CMType.CoinmOrder) {
        return await this.http.privateGET("/dapi/v1/order", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
     async deleteOrder(params: CMType.CoinmDeleteOrder) {
        return await this.http.privateDELETE("/dapi/v1/order", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
     async deleteAllOpenOrders(params: CMType.CoinmDeleteAllOpenOrders) {
        return await this.http.privateDELETE("/dapi/v1/allOpenOrders", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
     async deleteBatchOrders(params: CMType.CoinmDeleteBatchOrders) {
        return await this.http.privateDELETE("/dapi/v1/batchOrders", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
     async newCountDownCancelAll(params: CMType.CoinmPostCountDownCancelAll) {
        return await this.http.privatePOST("/dapi/v1/countdownCancelAll", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
     async openOrder(params: CMType.CoinmOpenOrder) {
        return await this.http.privateGET("/dapi/v1/openOrder", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
     async openOrders(params: CMType.CoinmOpenOrders) {
        return await this.http.privateGET("/dapi/v1/openOrders", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
     async allOrders(params: CMType.CoinmAllOrders) {
        return await this.http.privateGET("/dapi/v1/allOrders", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
     async balance(params?: CMType.CoinmBalance) {
        return await this.http.privateGET("/dapi/v1/balance", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
     async account(params?: CMType.CoinmAccount) {
        return await this.http.privateGET("/dapi/v1/account", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
     async updateLeverage(params: CMType.CoinmPostLeverage) {
        return await this.http.privatePOST("/dapi/v1/leverage", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
     async updateMarginType(params: CMType.CoinmPostMarginType) {
        return await this.http.privatePOST("/dapi/v1/marginType", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
     async updatePositionMargin(params: CMType.CoinmPostPositionMargin) {
        return await this.http.privatePOST("/dapi/v1/positionMargin", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
     async positionMarginHistory(params: CMType.CoinmPositionMarginHistory) {
        return await this.http.privateGET("/dapi/v1/positionMargin/history", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
     async positionRisk(params: CMType.CoinmPositionRisk) {
        return await this.http.privateGET("/dapi/v1/positionRisk", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
     async userTrades(params: CMType.CoinmUserTrades) {
        return await this.http.privateGET("/dapi/v1/userTrades", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
     async income(params: CMType.CoinmIncome) {
        return await this.http.privateGET("/dapi/v1/income", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
     async leverageBracket(params: CMType.CoinmLeverageBracket) {
        return await this.http.privateGET("/dapi/v1/leverageBracket", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
     async forceOrders(params: CMType.CoinmForceOrders) {
        return await this.http.privateGET("/dapi/v1/forceOrders", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
     async adlQuantile(params: CMType.CoinmAdlQuantile) {
        return await this.http.privateGET("/dapi/v1/adlQuantile", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
     async commissionRate(params: CMType.CoinmCommissionRate) {
        return await this.http.privateGET("/dapi/v1/commissionRate", params)
    }
    // ########################################### Portfolio Margin Endpoints
    // ########### Private
    /**
     * 
     * @param params 
     * @returns 
     */
     async pmExchangeInfo(params: CMType.CoinmPmExchangeInfo) {
        return await this.http.publicGET("/dapi/v1/pmExchangeInfo", params)
    }
 
    /**
     * 
     * @param params 
     * @returns 
     */
     async pmAccountInfo(params: CMType.CoinmPmAccountInfo) {
        return await this.http.publicGET("/dapi/v1/pmAccountInfo", params)
    }

    // ####################### ListenKey
    /**
     * 
     * @param params 
     * @returns 
     */
    async newListenKey(params?: CMType.CoinmPostListenKey) {
        return await this.http.privatePOST("/dapi/v1/listenKey", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async keepAliveListenKey(params?: CMType.CoinmPutListenKey) {
        return await this.http.privatePUT("/dapi/v1/listenKey", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async deleteListenKey(params?: CMType.CoinmDeleteListenKey) {
        return await this.http.privateDELETE("/dapi/v1/listenKey", params)
    }
}