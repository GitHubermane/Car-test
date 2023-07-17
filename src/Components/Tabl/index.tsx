import { Table } from "antd"
import { CarType } from "../../types/car"

type Props = {
    dataSource: CarType[]
}
const columns = [
    {
        key: "1",
        title: "ID",
        dataIndex: "id",
    },
    {
        key: "2",
        title: "Марка/Модель",
        dataIndex: "model",
    },
    {
        key: "3",
        title: "Модификация",
        dataIndex: "modification",
    },
    {
        key: "4",
        title: "Комплектация",
        dataIndex: "equipment",
    },
    {
        key: "5",
        title: "Стоимость",
        dataIndex: "price",
    },
    {
        key: "6",
        title: "Дата создания",
        dataIndex: "date",
    },

]

export const MyTable = ({ dataSource }: Props) => {

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


    const cars = dataSource?.map(car => {
        return {
            id: car._id,
            key: car._id,
            model: `${car.mark} ${car.model ? car.model : ''}`,
            modification: getModification(car),
            equipment: car.equipmentName,
            price: `${formatPrice(car.price)} ₽`,
            date: formatDate(car.createdAt)
        }
    })
    return (
        <Table
            pagination={false}
            columns={columns}
            dataSource={cars}
        />
    )
}