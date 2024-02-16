import { Request, Response } from "express"
import { DatesModel } from "../../models/datesModels"
import { logger } from "../../utils/logger"
import { Dates } from "../../dtos/datesDtos"
import moment from "moment"

export interface TypedRequestBody<T> extends Request {
  body: T
}

export async function addDates(req: TypedRequestBody<Dates>, res: Response) {
  const { start, end } = req.body

  try {
    const newDates = new DatesModel({ start, end })

    const data = await newDates.save()

    return res.status(201).send(data)
  } catch (err) {
    logger.warn(err, "Failed to add new dates")

    return res.status(400).send({ message: "Failed to add new dates" })
  }
}

export function getTodayDate(_req: Request, res: Response) {
  return res.status(201).send({ refStart: new Date().toISOString() })
}

export async function getEntries(_req: Request, res: Response) {
  try {
    const data = await DatesModel.find()

    return res.status(200).send({ data })
  } catch (err) {
    logger.warn(err, "Fail to get last entry")

    return res.status(400).send({ message: err })
  }
}
