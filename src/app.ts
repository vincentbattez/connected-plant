import express, { Application, Request, Response } from 'express'

const app: Application = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
  res.send({
    hey: 'Hey !',
  })
})

app.listen(port, function () {
  console.log(`App is listening http://localhost:${port} !`)
})
