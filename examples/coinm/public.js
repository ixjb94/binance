import { CoinM } from "@ixjb94/binance"

const coin = new CoinM()

Run()
async function Run() {
    
    // ##### Rest
    const depth = await coin.depth({
        symbol: "BTCUSD_PERP",
        limit: 10,
    })
    console.log(depth)

    // ##### Websocket
    coin.ws.subscribe(["BTCUSD_200626@kline_1m"], 1)

    coin.ws.addListener("DATA", (socket) => {
        socket.addEventListener("message", (event) => {
            // Raw
            let data = event.data

            // Parsed
            data = JSON.parse(data)

            console.log(data)
        })
    })
}