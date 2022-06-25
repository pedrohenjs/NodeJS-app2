import { ICreateSpecificationDTO, ISpecificationRepository } from '../repositories/ISpecificationRepository'

class CreateSpecificationService {
  private specificationRepository: ISpecificationRepository
  constructor (repository: ISpecificationRepository) {
    this.specificationRepository = repository
  }

  execute ({ name, description }: ICreateSpecificationDTO): void {
    const specificationAlreadyExists = this.specificationRepository.findByName(name)
    if (specificationAlreadyExists) {
      throw new Error('Specification already exists!')
    }
    this.specificationRepository.create({ name, description })
  }
}

export { CreateSpecificationService }
