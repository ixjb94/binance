import { EuOptions } from "../../index.js"
import { config } from "../../config.js"

const options = new EuOptions({
    api_key: config.API_KEY,
    api_secret: config.API_SECRET,
})

async function Run() {
    
    // ##### Rest
    let accountInfo = await options.account()
    console.log(accountInfo)

    // ##### Websocket
    // 1- listenKey
    let listenKey = await options.newListenKey()
    listenKey = listenKey.listenKey

    // 2- subscribe
    options.ws.userStream(listenKey, "USER_DATA")

    // 3- data
    options.ws.addListener("USER_DATA", (socket, options) => {
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