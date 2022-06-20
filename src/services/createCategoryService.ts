import CategoriesRepository from '../repositories/categoriesRepository'

interface Irequest {
    name: string
    description: string
}

class CreateCategoryService {
  private categoriesRepository: CategoriesRepository
  constructor (categoriesRepository: CategoriesRepository) {
    this.categoriesRepository = categoriesRepository
  }

  execute ({ name, description }: Irequest) {
    const categoryAlreadyExist = this.categoriesRepository.findByName(name)

    if (categoryAlreadyExist) {
      throw new Error('Category already exists!')
    }

    this.categoriesRepository.create({ name, description })
  }
}

export { CreateCategoryService }
