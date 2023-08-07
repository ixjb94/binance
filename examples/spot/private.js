import { Spot } from "../../index.js"
import { config } from "../../config.js"

const spot = new Spot({
    api_key: config.API_KEY,
    api_secret: config.API_SECRET,
})

async function Run() {
    
    // ##### Rest
    let accountInfo = await spot.account()
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
Run()