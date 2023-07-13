import { Pagination } from "antd"
import { getCars } from "../../api/getCars"
import { CarsDataType } from "../../types/car"

type Props = {
    count: number
    selectedMark: string
    models: string[]
    setCarsData: (data: CarsDataType) => void
}

export const MyPagination = (props: Props) => {
    const {
        count,
        selectedMark,
        models,
        setCarsData,
    } = props

    const strModels = models?.toString()
    const onHandleChange = async (val: number) => {
        const data = await getCars(20, val * 20, selectedMark, strModels)

        setCarsData(data)
    }

    return (
        <Pagination
            showSizeChanger={false}
            onChange={onHandleChange}
            total={count}
        />
    )
}