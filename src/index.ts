import express, { NextFunction, Request, Response } from "express"
import cors from "cors"
import datesRoutes from "./routes/datesRoutes"

const app = express()

app.get("/health", (_req, res) => {
  res.send({ health: true })
})

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/dates", datesRoutes)

// Error Handling middleware
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  let errCode, errMessage

  if (err.errors) {
    errCode = 400
    const keys = Object.keys(err.errors)
    errMessage = err.errors[keys[0]].message
  } else {
    errCode = err.status || 500
    errMessage = err.message || "Server Error"
  }
  res.status(errCode).type("txt").send(errMessage)
})

export default app
