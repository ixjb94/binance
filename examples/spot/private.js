import { Spot } from "@ixjb94/binance"
import { config } from "@ixjb94/binance"

const spot = new Spot({
    api_key: config.API_KEY,
    api_secret: config.API_SECRET,
})

Run()
async function Run() {
    
    // ##### Rest
    const accountInfo = await spot.account()
    console.log(accountInfo)

    // ##### Websocket
    // 1- listenKey
    let listenKeySpot = await spot.newListenKeySPOT()
    // let listenKeyMargin = await spot.newListenKeyMARGIN()
    // let listenKeyIsoMargin = await spot.newListenKeyISOMARGIN()
    listenKeySpot = listenKeySpot.listenKey

    // 2- subscribe
    spot.ws.userStream(listenKeySpot, "USER_DATA")

    // 3- data
    spot.ws.addListener("USER_DATA", (socket, options) => {
        socket.addEventListener("message", (event) => {
            // Raw
            let data = event.data

            // Parsed
            data = JSON.parse(data)

            console.log(data)
        })
    })
}