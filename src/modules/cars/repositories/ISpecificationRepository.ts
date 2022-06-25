import { Specification } from '../model/specification'

interface ICreateSpecificationDTO {
    name: string
    description: string

}

interface ISpecificationRepository{
    create({ name, description }: ICreateSpecificationDTO): void
    findByName(name: string)
    list(): Specification[]
}

export { ISpecificationRepository, ICreateSpecificationDTO }
