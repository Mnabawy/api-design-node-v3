import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('hello world')
})

app.post('/', (req, res) => {
  res.send({ mesg: req.body.msg })
})

export const start = () => {
  app.listen(3000, () => {
    console.log('app is listning on port 3000')
  })
}
