import { Request, Response } from 'express'

import { CreateCategoryUseCase } from './createCategoryUseCase'

class CreateCategoryController {
  private createCategoryUseCase
  constructor (createCategoryUseCase: CreateCategoryUseCase) {
    this.createCategoryUseCase = createCategoryUseCase
  }

  handle (request: Request, response: Response): Response {
    const { name, description } = request.body

    this.createCategoryUseCase.execute({ name, description })

    return response.status(201).json({ message: 'Category created!' })
  }
}

export { CreateCategoryController }
