import 'dotenv/config'
import express from 'express'
import nodeCleanup from 'node-cleanup'
import routes from './routes.js'
import { init, cleanup } from './whatsapp.js'
import cors from 'cors'

const app = express()


const port = parseInt(process.env.WA_SERVER_PORT ?? 8000)

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// app.use('/', routes)
app.use('/', (req, res) => {
    res.json({messegae:"running"})
})
const listenerCallback = () => {
    init()
    console.log(`Server is listening ${port}`)
}

app.listen(port, listenerCallback)

nodeCleanup(cleanup)

export {app}
