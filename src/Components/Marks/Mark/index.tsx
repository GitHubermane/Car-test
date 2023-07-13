import { getCars } from '../../../api/getCars'
import { getModels } from '../../../api/getModels'
import { CarsDataType } from '../../../types/car'
import '../index.scss'

type Props = {
    name: string
    count: number
    selected: boolean
    setSelectedMark: (name: string) => void
    setModels: (opts: string[]) => void
    setCarsData: (data: CarsDataType) => void
}

export const Mark = (props: Props) => {
    const {
        name,
        count,
        selected,
        setCarsData,
        setModels,
        setSelectedMark,
    } = props

    const brandClassName = selected
        ? 'mark__name selected'
        : 'mark__name'

    const onMarkClick = async () => {
        const models = await getModels(name)
        const cars = await getCars(20, 0, name)

        let modelsArray: string[] = []
        for (let model of models) {
            modelsArray.push(model._id)
        }

        setModels(modelsArray)
        setSelectedMark(name)
        setCarsData(cars)
    }

    return (
        <div className='mark'>
            <div
                className={brandClassName}
                onClick={() => onMarkClick()}
            >
                {name}
            </div>
            <div className='mark__count'>
                {count}
            </div>
        </div>
    )
}