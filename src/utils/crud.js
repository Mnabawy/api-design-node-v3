import mongoose from 'mongoose'

export const getOne = model => async (req, res) => {
  const userId = req.user._id
  const id = req.params.id

  const doc = await model.findOne({ _id: id, createdBy: userId })

  if (!doc) {
    return res.status(400).end()
  }

  res.status(200).json({ data: doc })
}

export const getMany = model => async (req, res) => {
  const userId = getAuthUser(req)

  const docs = await model.find({ createdBy: userId }).exec()

  res.status(200).json({ data: docs })
}

export const createOne = model => async (req, res) => {
  const userId = getAuthUser(req)

  const doc = await model.create({
    name: 'name',
    createdBy: userId,
    list: mongoose.SchemaTypes.ObjectId()
  })
  res.status(201).json({ data: doc })
}

export const updateOne = model => async (req, res) => {
  const userId = getAuthUser(req)
  const id = req.params.id

  const updatedDoc = await model.findOneAndUpdate(
    { _id: id, createdBy: userId },
    { name: 'hello' },
    {
      new: true
    }
  )

  if (!updatedDoc) {
    return res.status(400).end()
  }

  res.status(200).json({ data: updatedDoc })
}

export const removeOne = model => async (req, res) => {
  const userId = getAuthUser(req)
  const id = req.params.id

  const deletedDoc = await model.findOneAndDelete({
    _id: id,
    createdBy: userId
  })

  if (!deletedDoc) {
    return res.status(400).end()
  }

  res.status(200).json({ data: deletedDoc })
}

const getAuthUser = req => {
  return req.user._id
}

export const crudControllers = model => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model),
  createOne: createOne(model)
})
