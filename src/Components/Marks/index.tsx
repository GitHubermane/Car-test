import { getModels } from "../../api/getModels"
import { MarkType } from "../../types/mark"
import "./index.scss"

type Props = {
    marks: MarkType[]
    selectedMark: string
    setSelectedMark: (name: string) => void
    setSelectedModels: (opts: string[]) => void
    setModels: (opts: string[]) => void
    setLoading: (bool: boolean) => void
}

export const Marks = (props: Props) => {
    const {
        marks,
        selectedMark,
        setModels,
        setSelectedMark,
        setSelectedModels,
        setLoading,
    } = props

    const brandClassName = (id: string) => {
        return selectedMark === id
            ? 'mark__name selected'
            : 'mark__name'
    }

    const onMarkClick = async (name: string) => {
        setLoading(true)
        const models = await getModels(name)
        // Преобразуем массив объектов в массив строк 
        let modelsArray: string[] = []
        for (let model of models) {
            modelsArray.push(model._id)
        }

        setModels(modelsArray)
        setSelectedMark(name)
        // Очищаем список выбранных моделей
        setSelectedModels([])
        setLoading(false)
    }

    return (
        <div className="marks">
            {
                marks?.map(mark => (
                    <div
                        className='mark'
                        key={mark._id}
                    >
                        <div
                            className={brandClassName(mark._id)}
                            onClick={() => onMarkClick(mark._id)}
                        >
                            {mark?._id}
                        </div>
                        <div className='mark__count'>
                            {mark?.count}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}