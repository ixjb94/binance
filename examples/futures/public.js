import { Futures } from "../../index.js"

const futures = new Futures()

async function Run() {
    
    // ##### Rest
    let depth = await futures.depth({
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
Run()