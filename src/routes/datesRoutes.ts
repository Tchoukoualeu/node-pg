import express from "express"
import { validate } from "../utils/SchemaValidation"
import { addDates, getLastEntry } from "../controllers/dates/dateControllers"
import { datesDto } from "../dtos/datesDtos"

const datesRoutes = express.Router()

datesRoutes
  .post("/add", validate(datesDto, "body"), addDates)
  .get("/", getLastEntry)

export default datesRoutes
