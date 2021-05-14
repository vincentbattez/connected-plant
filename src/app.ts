import express, { Application, Request, Response } from 'express'
import { PlantController } from './controllers/Plant.controller'

const app: Application = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
  res.send({
    hey: 'Hey !',
  })
})

app.get('/test', PlantController.updateHumidity)

app.listen(port, function () {
  console.log(`App is listening http://localhost:${port} !`)
})
