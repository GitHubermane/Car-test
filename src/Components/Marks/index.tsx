import { MarkType } from "../../types/mark"
import { Mark } from "./Mark"
import "./index.scss"
import { useState } from "react"

type Props = {
    marks: MarkType[]
}

export const Marks = ({ marks }: Props) => {
    const [selectName, setSelectName] = useState('')
    return (
        <div className="marks">
            {
                marks?.map(mark => (
                    <Mark
                        key={mark?._id}
                        name={mark?._id}
                        count={mark?.count}
                        setSelectName={setSelectName}
                        selected={selectName === mark?._id}
                    />
                ))
            }
        </div>
    )
}