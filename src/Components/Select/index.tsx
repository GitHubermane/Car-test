import { Select } from "antd"
import { CarsDataType } from "../../types/car"
import { OptionsType } from "../../types/options"
import { useEffect } from "react"


type Props = {
    models: string[]
    selectedModels: string[]
    setSelectedModels: (model: string[]) => void
    setLoading: (bool: boolean) => void
}

export const MySelect = (props: Props) => {
    const {
        models,
        setLoading,
        setSelectedModels,
         selectedModels
    } = props

    const options: OptionsType[] = []
    if (models) {
        for (let model of models) {
            options.push({ label: model, value: model })
        }
    }


    const onHandleChange = (val: string[]) => {
        setLoading(true)
        // Если значение присутствует в Select, то удаляем
        // выбранных моделей
        setSelectedModels(val)
        setLoading(false)
    }

    return (
        <Select
            value={selectedModels ? [...selectedModels]: []}
            placeholder="Выберите модель"
            mode="multiple"
            style={{ minWidth: '100px' }}
            options={options}
            onChange={onHandleChange}
        />

    )
}