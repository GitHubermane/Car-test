import { Select } from "antd"
import { CarsDataType } from "../../types/car"
import { getCars } from "../../api/getCars"
import { OptionsType } from "../../types/options"


type Props = {
    models: string[]
    setCarsData: (data: CarsDataType) => void
    selectedMark: string
}

export const MySelect = (props: Props) => {
    const {
        models,
        selectedMark,
        setCarsData
    } = props

    const options: OptionsType[] = []
    if (models) {
        for (let model of models) {
            options.push({ label: model, value: model })
        }
    }
    const onHandleChange = async (val: string) => {
        const data = await getCars(20, 0, selectedMark, val)
        setCarsData(data)
    }

    return (
        <Select
            mode="multiple"
            style={{ minWidth: '100px' }}
            options={options}
            onChange={onHandleChange}
        />

    )
}