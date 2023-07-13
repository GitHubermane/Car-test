import { getModels } from '../../../api/getModels'
import '../index.scss'

type Props = {
    name: string
    count: number
    selected: boolean
    setSelectName: (name: string) => void
}

export const Mark = ({ name, count, selected, setSelectName }: Props) => {
    
    const brandClassName = selected
        ? 'mark__name selected'
        : 'mark__name'

    const onMarkClick = async () => {
        setSelectName(name)
        let kek = await getModels(name)
        console.log(kek);
        
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