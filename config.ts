import * as dotenv from "dotenv"

dotenv.config()

export const config = {
  mongoURI: process.env["MLAB_URI"],
  port: process.env["PORT"],
}
