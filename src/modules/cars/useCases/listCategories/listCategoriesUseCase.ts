import { Category } from '../../model/category'
import { ICategoriesRepsitory } from '../../repositories/ICategoriesRepository'

class ListCategoriesUseCase {
  private categoriesRepository
  constructor (categoriesRepository: ICategoriesRepsitory) {
    this.categoriesRepository = categoriesRepository
  }

  execute (): Category[] {
    const allCategories = this.categoriesRepository.list()
    return allCategories
  }
}
export { ListCategoriesUseCase }
