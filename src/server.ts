import app from "."
import { config } from "../config"
import { logger } from "./utils/logger"

app.listen(config.port, () => {
  return logger.info(`Server is listening on port ${config.port}`)
})
