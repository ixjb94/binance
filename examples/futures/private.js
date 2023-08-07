import { Futures } from "../../index.js"
import { config } from "../../config.js"

const futures = new Futures({
    api_key: config.API_KEY,
    api_secret: config.API_SECRET,
})

async function Run() {
    
    // ##### Rest
    let accountInfo = await futures.account()
    console.log(accountInfo)

    // ##### Websocket
    // 1- listenKey
    let listenKey = await futures.newListenKey()
    listenKey = listenKey.listenKey

    // 2- subscribe
    futures.ws.userStream(listenKey, "USER_DATA")

    // 3- data
    futures.ws.addListener("USER_DATA", (socket, options) => {
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