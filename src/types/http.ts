export interface HttpConstructor {
    api_key?: string;
    api_secret?: string;
    recvWindow?: number;
    isTestNet?: boolean;
    baseURL?: string;
    baseURLTest?: string;
    wsAuthURL?: string;
    wsBaseURL?: string;
    wsBaseURLTest?: string;
    timestamp?: number;
}

export type Method = "GET" | "POST" | "PUT" | "DELETE"

export interface Params {
    recvWindow?: number
}

export interface Headers {
    Accept?: string
    "X-MBX-APIKEY"?: string
}