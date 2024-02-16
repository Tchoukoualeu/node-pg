import { connect } from "mongoose"
import { logger } from "../utils/logger"
import { config } from "../../config"

export async function connectDB() {
  await connect(
    (config.mongoURI as string) || "mongodb://localhost/srti",
    {}
  ).then(() => logger.info("Connected to MongoDB"))
}
