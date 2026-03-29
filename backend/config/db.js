import mongoose from 'mongoose'

let isConnected = false

const connectDB = async () => {
  if (isConnected) {
    return // Reuse existing connection in serverless
  }

  if (!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI environment variable is not set')
  }

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    isConnected = true
    console.log(`MongoDB Connected: ${conn.connection.host}`)
    return conn
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`)
    throw error // Let caller handle it (don't call process.exit in serverless)
  }
}

export default connectDB
