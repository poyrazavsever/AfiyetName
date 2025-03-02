import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const ingredients = await prisma.ingredient.findMany()
      res.status(200).json(ingredients)
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch ingredients' })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
} 