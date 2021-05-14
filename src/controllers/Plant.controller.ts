import { Request, Response } from 'express'
import { PlantService } from '../services/Plant.service'

export class PlantController {
  static async updateHumidity(req: Request, res: Response) {
    const humidity = await PlantService.getHumidity();

    res.send({
      humidity: humidity,
    })
  }
}
