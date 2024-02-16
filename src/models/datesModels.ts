import { Schema, model } from "mongoose"
import { Dates } from "../dtos/datesDtos"

const datesSchema = new Schema<Dates>({
  start: { type: String, required: true },
  end: { type: String, required: true },
})

export const DatesModel = model<Dates>("dates", datesSchema)
