import { Specification } from '../model/specification'
import { ICreateSpecificationDTO, ISpecificationRepository } from './ISpecificationRepository'

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[]
  constructor () {
    this.specifications = []
  }

  create ({ name, description }: ICreateSpecificationDTO): void {
    const specification: Specification = new Specification()

    Object.assign(specification, {
      name, description, created_at: new Date()
    })
    this.specifications.push(specification)
  }

  findByName (name: string): Specification {
    const specification = this.specifications.find(element => element.name === name)
    return specification
  }

  list (): Specification[] {
    return this.specifications
  }
}

export { SpecificationRepository }
