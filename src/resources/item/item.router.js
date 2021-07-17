import { Router } from 'express'
import controllers from './item.controllers'

const router = Router()

const controller = (req, res) => {
  res.send('controller works fine')
}

router
  .route('/')
  .get(controller)
  .post(controller)

router
  .route('/:id')
  .get(controller)
  .put(controller)
  .delete(controller)

export default router
