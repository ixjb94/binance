import { EventEmitter } from "events"
import { WebSocket as WsClient } from "ws"
import { iConstructor } from "../types/websocket"

export class Websocket extends EventEmitter {

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
        super()
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
    }

    // ######################################## Overwrite addListener & on JSDoc
    // addListener(eventName, callback) {
    //     super.addListener(eventName, callback)
    // }

    // on(eventName, callback) {
    //     super.on(eventName, callback)
    // }
    // ############################################
    async sleep(ms: number) {
        try {
            return new Promise(resolve => setTimeout(resolve, ms))
        } catch { }
    }

    unsubscribe(wsID: number) {
        let topic = this.wsTopics.get(wsID)

        if (topic) {

            let ws = topic.ws
            let request = topic.request

            console.log(`Unsubscribe to ${request.params}`)

            request.method = "UNSUBSCRIBE"

            ws.send(JSON.stringify(request))
            ws.close(1000, `Unsubscribed: ${request.params}`)
            this.wsTopics.delete(wsID)
        }
    }

    subscribe(params: object, id: number, eventName = "DATA") {
        let URL = this.wsBaseURL
        if (this.isTestNet) {
            console.log("## Websocket: Test Net ##")
            URL = this.wsBaseURLTest
        }

        let ws = new WsClient(URL + "/ws")

        let request = {
            method: "SUBSCRIBE",
            params,
            id,
        }

        ws.on("ping", () => {
            ws.ping()
            ws.pong()
        })

        ws.on("open", () => {

            console.log(`Subscribed to ${request.params}`)

            // Ask binance for subscription
            ws.send(JSON.stringify(request))

            // Add to subscribe list
            this.wsTopics.set(request.id, { ws, request })

            this.emit(eventName, ws, {
                api_key: this.api_key,
                api_secret: this.api_secret,
            })
        })

        ws.on("close", (code, reason) => {
            console.log(`Websocket Closed - Code: ${code} - Reason: ${reason}`)

            let wsReference = this.wsTopics.get(request.id)
            if (wsReference) {
                
                let reconnectSleep: number = this.reconnectSleep ?? 3000

                console.log(`Reconnecting after ${reconnectSleep} ms`)
                this.sleep(reconnectSleep).then(() => {
                    this.subscribe(params, request.id, eventName)
                })
            }
        })

        ws.on("error", (error) => console.log("Error Happens", error))
    }

    disconnect(path: string) {
        let wsRef = this.wsLists.get(path)
        if (wsRef.ws) {
            let ws = wsRef.ws
            ws.close()
            this.wsLists.delete(path)
        }
    }

    connect(path: string, eventName = "DATA") {

        let URL = this.wsBaseURL
        if (this.isTestNet) {
            console.log("## Websocket: Test Net ##")
            URL = this.wsBaseURLTest
        }

        let ws = new WsClient(URL + path)

        ws.on("open", () => {
            console.log(`Connection Opened for: ${path}`)

            // Add to connection list
            this.wsLists.set(path, { ws, eventName })

            this.emit(eventName, ws, {
                api_key: this.api_key,
                api_secret: this.api_secret,
            })
        })

        ws.on("close", (code: number, reason: string) => {
            console.log(`Connection closed for: ${path} - Code: ${code} - Reason: ${reason}`)

            let wsReference = this.wsLists.get(path)
            if (wsReference) {

                let reconnectSleep: number = this.reconnectSleep ?? 3000

                console.log(`Reconnecting after ${reconnectSleep} ms`)
                this.sleep(reconnectSleep).then(() => {
                    this.connect(path, eventName)
                })
            }
        })

        ws.on("error", (error) => console.log("Error Happens", error))
    }

    async userStream(listenKey: string, eventName: string) {
        let path = "/ws/" + listenKey
        this.connect(path, eventName)
    }
}