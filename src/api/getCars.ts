import { CarType } from "../types/car"

export const getCars = async (
    limit: number,
    page: number,
    mark?: string,
    models?: string,
): Promise<{ cars: CarType[], count: number }> => {
    const markQuery = mark ? `&mark=${mark}` : ''
    const modelsQuery = models ? `&models=${models}` : ''
    const res = await fetch(
        `${process.env.REACT_APP_API_URL}/cars?page=${page}&limit=${limit}${markQuery}${modelsQuery}`
    )

    return res.json()
}