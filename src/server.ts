import express from 'express'
import categoriesRoutes from './routes/categories.routes'
import { specificationRoutes } from './routes/specification.routes'
import cors from 'cors'
const app = express()
app.use(cors())

app.use(express.json())

app.use('/categories', categoriesRoutes)

app.use('/specifications', specificationRoutes)

app.listen(3333, () => {
  console.log('Server is running!')
})
