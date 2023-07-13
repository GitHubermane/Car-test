export type CarType = {
    _id: string
    mark: string
    model: string
    engine: Engine
    drive: string
    equipmentName: string
    price: number
    createdAt: string
}

export type Engine = {
    power: number
    volume: number
    transmission: string
    fuel: string
}