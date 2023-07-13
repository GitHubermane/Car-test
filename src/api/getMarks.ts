import { MarkType } from "../types/mark"

export const getMarks = async (): Promise<MarkType[]> => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/marks`)

    return res.json()
}
