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
    const lastEntry = await DatesModel.findOne(
      {},
      {},
      { sort: { created_at: -1 } }
    )

    if (moment(lastEntry?.end).isAfter(moment(start))) {
      logger.warn("Invalid starting date")

      return res.status(400).send({ message: "Invalid starting date" })
    }

    const newDates = new DatesModel({ start, end })

    const data = await newDates.save()

    return res.status(201).send(data)
  } catch (err) {
    logger.warn(err, "Failed to add new dates")

    return res.status(400).send({ message: err })
  }
}

export async function getLastEntry(_req: Request, res: Response) {
  try {
    const lastEntry = await DatesModel.findOne(
      {},
      {},
      { sort: { created_at: -1 } }
    )

    return res.status(201).send({ data: lastEntry })
  } catch (err) {
    logger.warn(err, "Fail to get last entry")

    return res.status(400).send({ message: err })
  }
}
