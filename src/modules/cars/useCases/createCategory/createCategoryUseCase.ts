
import { ICategoriesRepsitory } from '../../repositories/ICategoriesRepository'

interface Irequest {
    name: string
    description: string
}

class CreateCategoryUseCase {
  private categoriesRepository: ICategoriesRepsitory
  constructor (repository: ICategoriesRepsitory) {
    this.categoriesRepository = repository
  }

  execute ({ name, description }: Irequest) {
    const categoryAlreadyExist = this.categoriesRepository.findByName(name)

    if (categoryAlreadyExist) {
      throw new Error('Category already exists!')
    }

    this.categoriesRepository.create({ name, description })
  }
}

export { CreateCategoryUseCase }
