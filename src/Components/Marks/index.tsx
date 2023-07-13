import { CarsDataType } from "../../types/car"
import { MarkType } from "../../types/mark"
import { ModelType } from "../../types/model"
import { OptionsType } from "../../types/options"
import { Mark } from "./Mark"
import "./index.scss"
import { useState } from "react"

type Props = {
    marks: MarkType[]
    selectedMark: string
    setSelectedMark: (name: string) => void
    setModels: (opts: string[]) => void
    setCarsData: (data: CarsDataType) => void
}

export const Marks = (props: Props) => {
    const {
        marks,
        selectedMark,
        setModels,
        setCarsData,
        setSelectedMark,
    } = props
    return (
        <div className="marks">
            {
                marks?.map(mark => (
                    <Mark
                        key={mark?._id}
                        name={mark?._id}
                        count={mark?.count}
                        setSelectedMark={setSelectedMark}
                        selected={selectedMark === mark?._id}
                        setModels={setModels}
                        setCarsData={setCarsData}
                    />
                ))
            }
        </div>
    )
}