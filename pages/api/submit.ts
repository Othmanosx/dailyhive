import clientPromise from "@/utils/mongodb"
import type { NextApiRequest, NextApiResponse } from "next"

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const client = await clientPromise
  const db = client.db("dailyhive")
  const body = JSON.parse(req.body)
  try {
    const response = await db.collection("waitlist").insertOne({
      name: body.name,
      email: body.email,
      message: body.message,
      timestamp: new Date(),
    })
    res.json(response)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}
