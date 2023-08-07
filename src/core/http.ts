import CryptoJS from "crypto-js"
import { Headers, HttpConstructor, Method, Params } from "../types/http"

/**
 * @namespace
 */
export class Http {
    HmacSHA256 = CryptoJS.HmacSHA256

    api_key?: string
    api_secret?: string
    isTestNet?: boolean
    recvWindow?: number
    baseURL?: string
    baseURLTest?: string
    timestamp?: number

    constructor(options: HttpConstructor) {
        this.api_key = options.api_key
        this.api_secret = options.api_secret
        this.isTestNet = options.isTestNet
        this.recvWindow = options.recvWindow

        this.baseURL = options.baseURL
        this.baseURLTest = options.baseURLTest
        this.timestamp = options.timestamp
    }

    async request(method: Method, address: string, params: Params = {}, isPrivate = false, noTimestampAndRecvWindow = false) {
        try {
            
            let hostname: string | undefined = this.baseURL

            if (this.isTestNet) {
                console.log("## Test Net Request ##")
                hostname = this.baseURLTest
            }

            let recvWindow = this.recvWindow
            if (params.recvWindow) {
                recvWindow = params.recvWindow
                delete params.recvWindow
            }

            // deno-lint-ignore no-explicit-any
            const queries: any = {
                ...params,
                timestamp: this.timestamp,
                recvWindow,
            }

            if (noTimestampAndRecvWindow) {
                delete queries.timestamp
                delete queries.recvWindow
            }

            const queryToString = Object.keys(queries)
                .map((key) => {
                    let value = queries[key]

                    if (value instanceof Array) {
                        value = JSON.stringify(value)
                        value = encodeURI(value)
                    }
                    return `${key}=${value}`
                })
                .join("&");

            const headers: Headers = {}
            
            if (method != "GET") {
                headers["Accept"] = "application/x-www-form-urlencoded"
            }

            if (isPrivate && this.api_secret) {
                const signature = this.HmacSHA256(
                    queryToString,
                    this.api_secret
                ).toString()

                address = address + "?" + queryToString + "&signature=" + signature
            } else {
                address = address + "?" + queryToString
            }

            if (this.api_key) {
                headers["X-MBX-APIKEY"] = this.api_key
            }

            const data = await fetch(hostname + address, {
                method,
                headers: {...headers},
            })

            if (data.status == 404) {
                throw new Error("404 not found")
            } else if (data.status == 406) {
                throw new Error("Client error 406: something you should fix")
            }

            const body = await data.json()
            // console.log(body)
            return body

        } catch (error) {
            const errorMessage = {
                name: error.name,
                message: error.message,
                stack: error.stack,
            }

            return errorMessage
        }
    }

    // ############## Requests without timestamp & recvWindow
    async simplePublicGET(address: string, params = {}) {
        return await this.request("GET", address, params, false, true)
    }

    async simplePublicPOST(address: string, params = {}) {
        return await this.request("POST", address, params, false, true)
    }

    async simplePublicPUT(address: string, params = {}) {
        return await this.request("PUT", address, params, false, true)
    }

    async simplePublicDELETE(address: string, params = {}) {
        return await this.request("DELETE", address, params, false, true)
    }


    async simplePrivateGET(address: string, params = {}) {
        return await this.request("GET", address, params, true, true)
    }

    async simplePrivatePOST(address: string, params = {}) {
        return await this.request("POST", address, params, true, true)
    }

    async simplePrivatePUT(address: string, params = {}) {
        return await this.request("PUT", address, params, true, true)
    }

    async simplePrivateDELETE(address: string, params = {}) {
        return await this.request("DELETE", address, params, true, true)
    }
    // ############## Full Requests
    async publicGET(address: string, params = {}) {
        return await this.request("GET", address, params, false)
    }

    async publicPOST(address: string, params = {}) {
        return await this.request("POST", address, params, false)
    }

    async publicPUT(address: string, params = {}) {
        return await this.request("PUT", address, params, false)
    }

    async publicDELETE(address: string, params = {}) {
        return await this.request("DELETE", address, params, false)
    }

    async privateGET(address: string, params = {}) {
        return await this.request("GET", address, params, true)
    }

    async privatePOST(address: string, params = {}) {
        return await this.request("POST", address, params, true)
    }

    async privatePUT(address: string, params = {}) {
        return await this.request("PUT", address, params, true)
    }

    async privateDELETE(address: string, params = {}) {
        return await this.request("DELETE", address, params, true)
    }

    async publicRequest(method: Method, address: string, params = {}) {
        return await this.request(method, address, params, false)
    }

    async privateRequest(method: Method, address: string, params = {}) {
        return await this.request(method, address, params, true)
    }
}
