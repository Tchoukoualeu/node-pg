import { Schema, model } from "mongoose"
import { Dates } from "../dtos/datesDtos"

// TODO: example to be deleted at the end

const datesSchema = new Schema<Dates>({
  start: String,
  end: String,
})

export const DatesModel = model<Dates>("dates", datesSchema)
