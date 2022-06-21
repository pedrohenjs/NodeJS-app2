import { Category } from '../model/category'
import { ICategoriesRepsitory, ICreateCategoryDTO } from './ICategoriesRepository'

class PostgreCategoriesRepository implements ICategoriesRepsitory {
  findByName (name: string): Category {
    return null
  }

  list (): Category[] {
    return null
  }

  create ({ name, description }: ICreateCategoryDTO): void {

  }
}

export { PostgreCategoriesRepository }

// this is a fake repository which i used for test some concepts i learned about SOLID
