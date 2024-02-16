import express from "express"
import { validate } from "../utils/SchemaValidation"
import {
  addDates,
  getTodayDate,
  getEntries,
} from "../controllers/dates/dateControllers"
import { datesDto } from "../dtos/datesDtos"

const datesRoutes = express.Router()

datesRoutes
  .get("/", getEntries)
  .get("/today", getTodayDate)
  .post("/add", validate(datesDto, "body"), addDates)

export default datesRoutes
