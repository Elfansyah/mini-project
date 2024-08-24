import prisma from "@/prisma";
import { Request, Response } from "express";

export class OrganizerController {
      async getOrganizerData(req: Request, res: Response) {
            try {
                  const organizerData = await prisma.eventOrganizer.findMany()
                  res.status(200).send({
                        status: 'Success get organizer data',
                        data: organizerData
                  })
            } catch (error) {
                  res.status(200).send({
                        status: 'Failed get organizer data',
                        msg: error
                  })
            }
      }

      async createPromotionEvent(req: Request, res: Response) {
            try {
                  const event = await prisma.event.findUnique({
                        where: {
                              id: req.user?.id
                        },
                  })
                  const createPromotionEvent = await prisma.promotion.create({
                        data: {
                              voucherdiscount: req.body.voucherdiscount,
                              startdate: req.body.startdate,
                              enddate: req.body.enddate,
                              quota: req.body.quota,
                              percentage: req.body.percentage,
                              event: {
                                    connect: {
                                          id: req.body.eventId
                                    }
                              }
                        }
                  })
            } catch (error) {
                  res.status(400).send({
                        status: "Failed create promotion event",
                        msg: error
                  })
            }
      }

}