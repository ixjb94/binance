import { Websocket } from "./websocket"
import { Http } from "./http"
import * as EUType from "../types/euoptions"

export class EuOptions {
    
    ApiMap = {
        baseURL: "https://eapi.binance.com",
        wsBaseURL: "wss://nbstream.binance.com/eoptions",
    }

    timestamp = Date.now()

    api_key?: string
    api_secret?: string
    recvWindow?: number

    ws: Websocket
    http: Http

    /**
     * @param { EuOptionsConstructor } options
     */
    constructor(options: EUType.EuOptionsConstructor = {}) {

        options.isTestNet = false

        const OPTIONS = {
            ...options,
            ...this.ApiMap,
            timestamp: this.timestamp,
        }

        // Coming from constructor
        this.api_key    = options.api_key
        this.api_secret = options.api_secret
        this.recvWindow = options.recvWindow

        // Default values
        this.recvWindow = this.recvWindow ?? 5000
        
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
    async ping(params?: EUType.EuOptionsPing) {
        return await this.http.publicGET("/eapi/v1/ping", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async time(params?: EUType.EuOptionsTime) {
        return await this.http.publicGET("/eapi/v1/time", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async exchangeInfo(params?: EUType.EuOptionsExchangeInfo) {
        return await this.http.publicGET("/eapi/v1/exchangeInfo", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async depth(params: EUType.EuOptionsDepth) {
        return await this.http.publicGET("/eapi/v1/depth", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async trades(params: EUType.EuOptionsTrades) {
        return await this.http.publicGET("/eapi/v1/trades", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async historicalTrades(params: EUType.EuOptionsHistoricalTrades) {
        return await this.http.publicGET("/eapi/v1/historicalTrades", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async klines(params: EUType.EuOptionsKlines) {
        return await this.http.publicGET("/eapi/v1/klines", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async mark(params: EUType.EuOptionsMark) {
        return await this.http.publicGET("/eapi/v1/mark", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async ticker(params: EUType.EuOptionsTicker) {
        return await this.http.publicGET("/eapi/v1/ticker", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async index(params: EUType.EuOptionsIndex) {
        return await this.http.publicGET("/eapi/v1/index", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async exerciseHistory(params: EUType.EuOptionsExerciseHistory) {
        return await this.http.publicGET("/eapi/v1/exerciseHistory", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async openInterest(params: EUType.EuOptionsOpenInterest) {
        return await this.http.publicGET("/eapi/v1/openInterest", params)
    }
    // ########################################### Account/Trades Endpoints
    // ########### Private
    /**
     * 
     * @param params 
     * @returns 
     */
     async account(params?: EUType.EuOptionsAccount) {
        return await this.http.privateGET("/eapi/v1/account", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
     async newTransfer(params: EUType.EuOptionPostTransfer) {
        return await this.http.privatePOST("/eapi/v1/transfer", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
     async newOrder(params: EUType.EuOptionsPostOrder) {
        return await this.http.privatePOST("/eapi/v1/order", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
     async newBatchOrders(params: EUType.EuOptionsPostBatchOrders) {
        return await this.http.privatePOST("/eapi/v1/batchOrders", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
     async deleteOrder(params: EUType.EuOptionsDeleteOrder) {
        return await this.http.privateDELETE("/eapi/v1/order", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
     async deleteBatchOrders(params: EUType.EuOptionsDeleteBatchOrders) {
        return await this.http.privateDELETE("/eapi/v1/batchOrders", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
     async deleteAllOpenOrders(params: EUType.EuOptionsDeleteAllOpenOrdersByUnderlying) {
        return await this.http.privateDELETE("/eapi/v1/allOpenOrders", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
     async deleteAllOpenOrdersByUnderlying(params: EUType.EuOptionsDeleteAllOpenOrdersByUnderlying) {
        return await this.http.privateDELETE("/eapi/v1/allOpenOrdersByUnderlying", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
     async openOrders(params: EUType.EuOptionsOpenOrders) {
        return await this.http.privateGET("/eapi/v1/openOrders", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
     async historyOrders(params: EUType.EuOptionsHistoryOrders) {
        return await this.http.privateGET("/eapi/v1/historyOrders", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
     async position(params: EUType.EuOptionsPosition) {
        return await this.http.privateGET("/eapi/v1/position", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
     async userTrades(params: EUType.EuOptionsUserTrades) {
        return await this.http.privateGET("/eapi/v1/userTrades", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
     async exerciseRecord(params: EUType.EuOptionsExerciseRecord) {
        return await this.http.privateGET("/eapi/v1/exerciseRecord", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
     async bill(params: EUType.EuOptionsBill) {
        return await this.http.privateGET("/eapi/v1/bill", params)
    }
    // ########################################### Market Maker Endpoints
    // ########### Private
    /**
     * 
     * @param params 
     * @returns 
     */
     async marginAccount(params?: EUType.EuOptionsMarginAccount) {
        return await this.http.privateGET("/eapi/v1/marginAccount", params)
    }
    
    /**
     * 
     * @param params 
     * @returns 
     */
     async newMmpSet(params: EUType.EuOptionsPostMmpReset) {
        return await this.http.privatePOST("/eapi/v1/mmpSet", params)
    }
    
    /**
     * 
     * @param params 
     * @returns 
     */
     async mmp(params: EUType.EuOptionsMmp) {
        return await this.http.privateGET("/eapi/v1/mmp", params)
    }
    
    /**
     * 
     * @param params 
     * @returns 
     */
     async newMmpReset(params: EUType.EuOptionsPostMmpReset) {
        return await this.http.privatePOST("/eapi/v1/mmpReset", params)
    }
    
    /**
     * 
     * @param params 
     * @returns 
     */
     async newCountdownCancelAll(params: EUType.EuOptionsPostCountdownCancelAll) {
        return await this.http.privatePOST("/eapi/v1/countdownCancelAll", params)
    }
    
    /**
     * 
     * @param params 
     * @returns 
     */
     async countdownCancelAll(params: EUType.EuOptionsCountdownCancelAll) {
        return await this.http.privateGET("/eapi/v1/countdownCancelAll", params)
    }
    
    /**
     * 
     * @param params 
     * @returns 
     */
     async newCountdownCancelAllHeartBeat(params: EUType.EuOptionsPostCountdownCancelAllHeartBeat) {
        return await this.http.privateGET("/eapi/v1/countdownCancelAllHeartBeat", params)
    }

    // ####################### ListenKey
    /**
     * 
     * @param params 
     * @returns 
     */
     async newListenKey(params?: EUType.EuOptionsPostListenKey) {
        return await this.http.privatePOST("/eapi/v1/listenKey", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async keepAliveListenKey(params?: EUType.EuOptionsPutListenKey) {
        return await this.http.privatePUT("/eapi/v1/listenKey", params)
    }

    /**
     * 
     * @param params 
     * @returns 
     */
    async deleteListenKey(params?: EUType.EuOptionsDeleteListenKey) {
        return await this.http.privateDELETE("/eapi/v1/listenKey", params)
    }
}