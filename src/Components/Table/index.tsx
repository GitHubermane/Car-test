import { CarType } from '../../types/car'
import './index.scss'

const headerColumns = [
    "ID", "Марка/модель", "Модификация",
    "Комплектация", "Стоимость", "Дата создания"
]

type Props = {
    cars: CarType[]
}

export const Table = (props: Props) => {
    
    const formatPrice = (price: number) => {
        let result = price.toString().split("")
        let count = 1

        for (let i = result.length - 1; i >= 0; i--) {
            if (count === 3) {
                result.splice(i, 0, " ")
                count = 0
            }
            count++
        }

        return result.join("")
    }

    const formatNum = (num: number) => {
        if (num.toString().length === 1) {
            return "0" + num
        }
        return num
    }

    const formatDate = (date: string) => {
        const result = new Date(date)

        const day = formatNum(result.getDate()),
            month = formatNum(result.getMonth() + 1),
            year = result.getFullYear(),
            hour = formatNum(result.getHours()),
            minute = formatNum(result.getMinutes())

        return `${day}.${month}.${year} ${hour}:${minute}`
    }

    const formatVolume = (volume: number) => {
        const str = volume.toString()
        if (str.includes(".")) return volume.toString()
        return str + ".0"
    }

    const getModification = (car: CarType) => {
        const {
            volume,
            transmission,
            power,
        } = car.engine
        const { drive } = car
        return `${formatVolume(volume)} ${transmission} (${power} л.с.) ${drive}`
    }

    return (
        <div className='table'>
            <div className='table__header'>
                {
                    headerColumns.map(col => (
                        <div key={col}>{col}</div>
                    ))
                }
            </div>
            <div className='table__body'>
                {
                    props.cars?.map((car) => (
                        <div className='table__row' key={car._id}>
                            <div>{car._id}</div>
                            <div>
                                {`${car.mark} ${car.model ? car.model : ''}`}
                            </div>
                            <div>{`${getModification(car)}`}</div>
                            <div>{car.equipmentName}</div>
                            <div>{formatPrice(car.price)} &#8381;</div>
                            <div>{formatDate(car.createdAt)}</div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}