import { BlvtStream } from "../index.js"

let blvt = new BlvtStream()

blvt.ws.subscribe(["BTCDOWN@nav_kline_1m"], 1)

blvt.ws.addListener("DATA", (socket) => {
    socket.addEventListener("message", (event) => {
        // Raw
        let data = event.data

        // Parsed
        data = JSON.parse(data)

        console.log(data)
    })
})