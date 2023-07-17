import { Pagination } from "antd"
import { getCars } from "../../api/getCars"
import { CarsDataType } from "../../types/car"

type Props = {
    count: number
    selectedMark: string
    selectedModels: string[]
    setCarsData: (data: CarsDataType) => void
    setLoading: (bool: boolean) => void
}

export const MyPagination = (props: Props) => {
    const {
        count,
        selectedMark,
        selectedModels,
        setCarsData,
        setLoading
    } = props
    // Преобразуем массив в троку
    const strModels = selectedModels?.join(',')
    const onHandleChange = async (val: number) => {
        setLoading(true)
        const data = await getCars(20, (val - 1) * 20, selectedMark, strModels)

        setCarsData(data)
        setLoading(false)
    }

    return (
        <Pagination
            defaultCurrent={1}
            pageSize={20}
            showSizeChanger={false}
            onChange={onHandleChange}
            total={count}
        />
    )
}