export enum PriorityLevel {
    BAIXA, MEDIA, ALTA
}


export class Task {

    id: number
    description: string
    deadline: Date
    priorityLevel: PriorityLevel

    constructor(
        id: number,
        description: string,
        deadline: Date,
        priorityLevel: PriorityLevel) {
        this.id = id
        this.description = description
        this.deadline = deadline
        this.priorityLevel = priorityLevel
    }
}