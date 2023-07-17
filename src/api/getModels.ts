import { ModelType } from "../types/model";

export const getModels = async (mark: string): Promise<ModelType[]> => {   
    const res = await fetch(`${process.env.REACT_APP_API_URL}/models/${mark}`)
    
    return res.json()
}