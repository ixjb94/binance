[![CodeFactor](https://www.codefactor.io/repository/github/ixjb94/binance/badge)](https://www.codefactor.io/repository/github/ixjb94/binance)
![npm version](https://img.shields.io/npm/v/@ixjb94/binance)
![npm size](https://img.shields.io/bundlephobia/min/@ixjb94/binance/latest)
![npm downloads](https://img.shields.io/npm/dt/@ixjb94/binance)
![last commit](https://img.shields.io/github/last-commit/ixjb94/binance)
[![Known Vulnerabilities](https://snyk.io/test/npm/@ixjb94/binance/badge.svg)](https://snyk.io/test/npm/@ixjb94/binance)

### Binance Connector Written in Typescript

### Structure
`binance` contains this components    

| Component     | Info               | Status        | Document Link        |
| ------------- |-------------       | ------------- | -------------        |
| Spot          | Spot API           | Completed     | [Spot](https://binance-docs.github.io/apidocs/spot/en/) |
| Futures       | Futures API        | Completed     | [Futures](https://binance-docs.github.io/apidocs/futures/en/) |
| Coin-M        | Coin-M API         | Completed     | [Coin-M](https://binance-docs.github.io/apidocs/delivery/en/) |
| Options       | European API       | Completed     | [Options](https://binance-docs.github.io/apidocs/voptions/en/) |
| BLVT Streams  | BLVT Streams       | Completed     | [BLVT](https://binance-docs.github.io/apidocs/spot/en/#websocket-blvt-info-streams) |
| Websocket     | Abstract Websocket | Completed     | |
| Http          | Abstract Http      | Completed     | |

**Spot**: contains: `Wallet`, `Sub-Account`, `Market Data`, `Spot`, `Margin`, `Savings`, `Staking`, `Mining`, `Futures`, `Futures Algo`, `Portfolio`, `BLVT`, `BSwap`, `Fiat`, `C2C`, `VIP Loans`, `Crypto Loans`, `Crypto Loans`, `Pay`, `Convert`, `Rebate`, `NFT`, `Binance Code` (all available endpoints in [binance spot doc](https://binance-docs.github.io/apidocs/spot/en/#change-log))

**Websocket & Http**: can connect/request to any of binance ws/rest endpoints

### Requirement
Node ^18.0.0 and higher    
(because it's using fetch API)

### Installation
`npm i @ixjb94/binance`

### Usage
```js
import { Futures } from "@ixjb94/binance"
```

### Examples
**Note: Everything is`Promised` so you need to do `.then` or `await`**

[All Examples](https://github.com/ixjb94/binance/tree/master/examples)

- Rest (Public)

```js
import { Futures } from "@ixjb94/binance"

const myFuture = new Futures({
    isTestNet: true,
})

// exchange info
myFuture.exchangeInfo()

// candles data
myFuture.klines({
    interval: "1m",
    symbol: "BTCUSDT",
    limit: 10,
})
```

- Rest (Private)

```js
import { Futures } from "@ixjb94/binance"

const myFuture = new Futures({
    api_key: "MyApiKey",
    api_secret: "MyApiSecret",
    isTestNet: true,
})

// get account balance
myFuture.balance()

// place new order
myFuture.newOrder({
    symbol: "BTCUSDT",
    side: "BUY",
    type: "MARKET",
    quantity: 0.01,
})
```

- Websocket (Public)

```js
import { Futures } from "@ixjb94/binance"

const myFuture = new Futures({
    isTestNet: true,
})

// subscribe to two market data
myFuture.ws.subscribe(["btcusdt@kline_1m", "ethusdt@kline_3m"], 1, "MyMarketData")

// listen for data coming from binance
myFuture.ws.addListener("MyMarketData", (socket) => {

    socket.addEventListener("message", (event) => {
        let data = event.data
        data = JSON.parse(data)

        console.log(data)
    })

})
```

- Websocket (Private)

```js
import { Futures } from "@ixjb94/binance"

const myFuture = new Futures({
    api_key: "MyApiKey",
    api_secret: "MyApiSecret",
    isTestNet: true,
})

async function Run() {

    // 1- get the listenKey
    const reqListenKey = await myFuture.newListenKey()
    const listenKey = reqListenKey.listenKey

    // 2- subscribe to User Data Stream
    myFuture.ws.userStream(listenKey, "MyUserData")

    // 3- Listen for data coming from binance
    myFuture.ws.addListener("MyUserData", (socket) => {
        
        socket.addEventListener("message", (event) => {
            let data = event.data
            data = JSON.parse(data)

            console.log(data)
        })

    })
}
Run()
```


### Types & Intellisense
![img1](https://raw.githubusercontent.com/ixjb94/binance/master/images/img01.png "img1")
![img2](https://raw.githubusercontent.com/ixjb94/binance/master/images/img02.png "img2")

### Endpoints Naming
| Starts        | Example            | Http Method   |
| ------------- |-------------       | ------------- |
| new           | newOrder           | POST          |
| change        | changeLeverage     | POST \| PUT   |
| delete        | deleteOrder        | POST \| DELETE|
| (nothing)     | exchangeInfo       | GET           |

### Notes
- ws data are either `Buffer` OR `Raw string`    
so you need to `JSON.parse` them    
example    

```js
import { Futures } from "@ixjb94/binance"

const myFuture = new Futures({
    isTestNet: true,
})

myFuture.ws.subscribe(["btcusdt@kline_1m"], 1)

myFuture.ws.addListener("DATA", (socket) => {

    // Buffer
    socket.addListener("message", (data, siBinary) => {
        console.log(data)
    })

    // Raw string data
    socket.addEventListener("message", (event) => {
        // Its raw
        let data = event.data

        // Now its parsed
        data = JSON.parse(data)
    })

})
```

- You don't need to import Http OR Websocket directly    
you can access them with `.http.` OR `.ws.`    
example    

```js
import { Futures } from "@ixjb94/binance"

const myFuture = new Futures({
    isTestNet: true,
})

// websocket example
myFuture.ws.subscribe(["btcusdt@kline_1m"], 1)

// http example
myFuture.http.publicGET("/fapi/v1/exchangeInfo")
```

### Documentation
[Binance Doc](https://binance-docs.github.io/apidocs/futures/en/#general-info)