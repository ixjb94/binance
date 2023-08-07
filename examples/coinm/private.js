import { CoinM } from "../../index.js"
import { config } from "../../config.js"

const coin = new CoinM({
    api_key: config.API_KEY,
    api_secret: config.API_SECRET,
})

async function Run() {
    
    // ##### Rest
    let accountInfo = await coin.account()
    console.log(accountInfo)

    // ##### Websocket
    // 1- listenKey
    let listenKey = await coin.newListenKey()
    listenKey = listenKey.listenKey

    // 2- subscribe
    coin.ws.userStream(listenKey, "USER_DATA")

    // 3- data
    coin.ws.addListener("USER_DATA", (socket, options) => {
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