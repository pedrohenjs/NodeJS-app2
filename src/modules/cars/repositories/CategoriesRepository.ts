
import { Category } from '../model/category'
import { ICategoriesRepsitory } from './ICategoriesRepository'

interface ICreateCategoryDTO {
    name: string
    description: string
}

export default class CategoriesRepository implements ICategoriesRepsitory {
  private categories: Category[]
  private static INSTANCE

  private constructor () {
    this.categories = []
  }

  static getInstance (): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository()
    }
    return CategoriesRepository.INSTANCE
  }

  create ({ name, description }: ICreateCategoryDTO) {
    const category: Category = new Category()

    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    })
    this.categories.push(category)
  }

  list (): Category[] {
    return this.categories
  }

  findByName (name: string): Category {
    const category = this.categories.find(arrayElement => arrayElement.name === name)
    return category
  }
}
// repository is where we gonna write the functions and possibilities of some thing
