import { Spot } from "@ixjb94/binance"

const spot = new Spot()

Run()
async function Run() {
    
    // ##### Rest
    const depth = await spot.depth({
        symbol: "BTCUSDT",
        limit: 10,
    })
    console.log(depth)

    // // ##### Websocket
    spot.ws.subscribe(["btcusdt@kline_1m"], 1)

    spot.ws.addListener("DATA", (socket) => {
        socket.addEventListener("message", (event) => {
            // Raw
            let data = event.data

            // Parsed
            data = JSON.parse(data)

            console.log(data)
        })
    })
}