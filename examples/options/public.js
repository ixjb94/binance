import { EuOptions } from "@ixjb94/binance"

const options = new EuOptions()

Run()
async function Run() {
    
    // ##### Rest
    const depth = await options.depth({
        symbol: "BTCUSDT",
        limit: 10,
    })
    console.log(depth)

    // ##### Websocket
    options.ws.subscribe(["BTC-200630-9000-P@kline_1m"], 1)

    options.ws.addListener("DATA", (socket) => {
        socket.addEventListener("message", (event) => {
            // Raw
            let data = event.data

            // Parsed
            data = JSON.parse(data)

            console.log(data)
        })
    })
}