import { EventEmitter } from "events"
import { WebSocket as WsClient } from "ws"
import { iConstructor } from "../types/websocket"

type WsApiOptions = {
    api_key: string;
    api_secret: string;
};

type WS = (socket: WsClient, options: WsApiOptions) => void;

// export class Websocket extends EventEmitter {
export class Websocket {

    private eventEmitter = new EventEmitter();

    // for subscribing
    wsTopics = new Map()

    // for connecting
    wsLists = new Map()

    api_key?: string
    api_secret?: string
    wsBaseURL?: string
    wsBaseURLTest?: string
    wsAuthURL?: string
    isTestNet?: boolean
    reconnectSleep?: number

    constructor(options: iConstructor = {}) {
        try {
            // super()
            this.api_key = options.api_key
            this.api_secret = options.api_secret
            this.wsBaseURL = options.wsBaseURL
            this.wsBaseURLTest = options.wsBaseURLTest
            this.wsAuthURL = options.wsAuthURL
            this.isTestNet = options.isTestNet
            this.reconnectSleep = options.reconnectSleep

            // Default
            if (!this.reconnectSleep) {
                this.reconnectSleep = 3000
            }
        } catch (error) {
            console.log("Error constructor:", error)
        }
    }

    // ######################################## Overwrite addListener
    /**
     * @param eventName - example: "BTC" | "USER_DATA" | "DATA" or anything else
     * @param callback 
     */
    addListener(eventName: string, callback: WS) {
        try {
            this.eventEmitter.addListener(eventName, callback);
        } catch (error) {
            console.log("Error addListener:", error);
        }
    }

    /**
     * 
     * @param eventName - example: "USER_DATA" | "DATA" or anything else
     * @param callback 
     */
    on(eventName: string, callback: WS) {
        try {
            this.eventEmitter.on(eventName, callback)
        } catch (error) {
            console.log("Error On:", error);
        }
    }
    // ############################################
    /**
     * 
     * @param ms in milliseconds
     * @returns 
     */
    async sleep(ms: number) {
        try {
            return new Promise(resolve => setTimeout(resolve, ms))
        } catch (error) {
            console.log("Error Sleep:", error)
        }
    }

    /**
     * 
     * @param wsID - Example: 311 or 1, etc
     */
    unsubscribe(wsID: number) {
        try {
            const topic = this.wsTopics.get(wsID)

            if (topic) {

                const ws = topic.ws
                const request = topic.request

                console.log(`Unsubscribe to ${request.params}`)

                request.method = "UNSUBSCRIBE"

                ws.send(JSON.stringify(request))
                ws.close(1000, `Unsubscribed: ${request.params}`)
                this.wsTopics.delete(wsID)
            }
        } catch (error) {
            console.log("Error Unsubscribe:", error)
        }
    }

    /**
     * 
     * @param params - example: ["btcusdt@kline_1m", "etcusdt@kline_3m"]
     * @param id - example: 316
     * @param eventName - example: "BTC" or anything else
     */
    subscribe(params: string[], id: number, eventName = "DATA") {

        try {
            let URL = this.wsBaseURL
            if (this.isTestNet) {
                console.log("## Websocket: Test Net ##")
                URL = this.wsBaseURLTest
            }

            const ws = new WsClient(URL + "/ws")

            const request = {
                method: "SUBSCRIBE",
                params,
                id,
            }

            ws.on("ping", () => {
                try {
                    ws.ping()
                    ws.pong()
                } catch { }
            })

            ws.on("open", () => {
                try {
                    console.log(`Subscribed to ${request.params}`)

                    // Ask binance for subscription
                    ws.send(JSON.stringify(request))

                    // Add to subscribe list
                    this.wsTopics.set(request.id, { ws, request })

                    // this.emit(eventName, ws, {
                    //     api_key: this.api_key,
                    //     api_secret: this.api_secret,
                    // })
                    this.eventEmitter.emit(eventName, ws, {
                        api_key: this.api_key,
                        api_secret: this.api_secret,
                    })
                } catch { }
            })

            ws.on("close", (code, reason) => {
                try {
                    console.log(`Websocket Closed - Code: ${code} - Reason: ${reason}`)

                    const wsReference = this.wsTopics.get(request.id)
                    if (wsReference) {

                        const reconnectSleep: number = this.reconnectSleep ?? 3000

                        console.log(`Reconnecting after ${reconnectSleep} ms`)
                        this.sleep(reconnectSleep).then(() => {
                            this.subscribe(params, request.id, eventName)
                        })
                    }
                } catch { }
            })

            ws.on("error", (error) => {
                try {
                    console.log("Error Happens", error)
                } catch { }
            })
        } catch (error) {
            console.log("Error Subscribe:", error)
        }
    }

    /**
     * 
     * @param path example: "/ws/bnbusdt@aggTrade"
     */
    disconnect(path: string) {
        try {
            const wsRef = this.wsLists.get(path)

            if (wsRef.ws) {
                const ws = wsRef.ws
                ws.close()
                this.wsLists.delete(path)
            }
        } catch (error) {
            console.log("Error disconnect:", error)
        }
    }

    /**
     * 
     * @param path example: "/ws/bnbusdt@aggTrade"
     * @param eventName example: "BTC" or anything else
     */
    connect(path: string, eventName = "DATA") {

        try {
            let URL = this.wsBaseURL
            if (this.isTestNet) {
                console.log("## Websocket: Test Net ##")
                URL = this.wsBaseURLTest
            }

            const ws = new WsClient(URL + path)

            ws.on("open", () => {
                try {
                    console.log(`Connection Opened for: ${path}`)

                    // Add to connection list
                    this.wsLists.set(path, { ws, eventName })

                    // this.emit(eventName, ws, {
                    //     api_key: this.api_key,
                    //     api_secret: this.api_secret,
                    // })
                    this.eventEmitter.emit(eventName, ws, {
                        api_key: this.api_key,
                        api_secret: this.api_secret,
                    })
                } catch { }
            })

            ws.on("close", (code: number, reason: string) => {
                try {
                    console.log(`Connection closed for: ${path} - Code: ${code} - Reason: ${reason}`)

                    const wsReference = this.wsLists.get(path)
                    if (wsReference) {

                        const reconnectSleep: number = this.reconnectSleep ?? 3000

                        console.log(`Reconnecting after ${reconnectSleep} ms`)
                        this.sleep(reconnectSleep).then(() => {
                            this.connect(path, eventName)
                        })
                    }
                } catch { }

            })

            ws.on("error", (error) => {
                try {
                    console.log("Error Happens", error)
                } catch { }
            })
        } catch (error) {
            console.log("Error connect:", error)
        }
    }

    /**
     * 
     * @param listenKey 
     * @param eventName example: USER_DATA or anything else
     */
    async userStream(listenKey: string, eventName: string) {
        try {
            const path = "/ws/" + listenKey
            this.connect(path, eventName)
        } catch (error) {
            console.log("Error userStream:", error)
        }
    }
}