import { EuOptions } from "../../index.js"

const options = new EuOptions()

async function Run() {
    
    // ##### Rest
    let depth = await options.depth({
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
Run()