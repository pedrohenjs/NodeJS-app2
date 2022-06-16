
import { Category } from '../model/category'

interface ICreateCategoryDTO {
    name: string
    description: string
}

export default class CategoriesRepository {
  private categories: Category[]

  constructor () {
    this.categories = []
  }

  create ({ name, description }: ICreateCategoryDTO) {
    const category: Category = new Category()

    const objectSource: Category = {
      name,
      description,
      created_at: new Date()
    }

    Object.assign(category, objectSource)
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
