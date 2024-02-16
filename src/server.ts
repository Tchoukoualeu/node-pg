import express from "express"
import { config } from "../config"
import { connectDB } from "./database/dbConfig"
import { logger } from "./utils/logger"
import cors from "cors"
import datesRoutes from "./routes/datesRoutes"

const app = express()
connectDB()

app.get("/health", (_req, res) => {
  res.send({ health: true })
})

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/dates", datesRoutes)

app.listen(config.port, () => {
  return logger.info(`Server is listening on port ${config.port}`)
})
