import { Futures } from "@ixjb94/binance"

const futures = new Futures()

Run()
async function Run() {
    
    // ##### Rest
    const depth = await futures.depth({
        symbol: "BTCUSDT",
        limit: 10,
    })
    console.log(depth)

    // ##### Websocket
    futures.ws.subscribe(["btcusdt@kline_1m"], 1)

    futures.ws.addListener("DATA", (socket) => {
        socket.addEventListener("message", (event) => {
            // Raw
            let data = event.data

            // Parsed
            data = JSON.parse(data)

            console.log(data)
        })
    })
}