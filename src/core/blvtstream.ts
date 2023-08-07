import { Websocket } from "./websocket"
import { BlvtStreamConstructor } from "../types/blvtstream"

/**
 * @namespace
 */
export class BlvtStream {
    
    ApiMap = {
        baseURL: "",
        baseURLTest: "",
        wsBaseURL: "wss://nbstream.binance.com/lvt-p",
        wsBaseURLTest: "",
    }

    timestamp = Date.now()

    recvWindow?: number
    ws: Websocket

    constructor(options: BlvtStreamConstructor = {}) {

        let OPTIONS = {
            ...options,
            ...this.ApiMap,
            timestamp: this.timestamp,
        }

        // Coming from constructor
        this.recvWindow = options.recvWindow

        // Default values
        this.recvWindow = this.recvWindow ?? 5000
        
        if (!OPTIONS.recvWindow) {
            OPTIONS.recvWindow = this.recvWindow
        }

        // Websocket
        this.ws = new Websocket(OPTIONS)
    }
}