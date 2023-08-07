export interface iConstructor {
    api_key?: string
    api_secret?: string
    reconnectSleep?: number
    recvWindow?: number
    isTestNet?: boolean
    baseURL?: string
    baseURLTest?: string
    wsAuthURL?: string
    wsBaseURL?: string
    wsBaseURLTest?: string
    timestamp?: number
}