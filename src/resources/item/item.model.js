import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema(
  {
    name: {
      maxLength: 50,
      required: true,
      trim: true,
      type: String
    },
    status: {
      default: 'active',
      enum: ['active', 'complete', 'pastdue'],
      required: true,
      type: String
    },
    list: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'list',
      required: true
    },
    createdBy: {
      ref: 'user',
      required: true,
      type: mongoose.SchemaTypes.ObjectId
    },
    notes: String,
    due: Date
  },
  { timestamps: true }
)

itemSchema.index({ list: 1, name: 1 }, { unique: true })

export const Item = mongoose.model('item', itemSchema)
