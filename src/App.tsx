import './index.scss';
import { useEffect, useState } from "react";
import { Marks } from "./Components/Marks";
import { MySelect } from "./Components/Select";
import { MyPagination } from './Components/Pagination';
import { getCars } from "./api/getCars";
import { getMarks } from "./api/getMarks";
import { CarsDataType } from "./types/car";
import { MarkType } from "./types/mark";
import { MyTable } from './Components/Tabl';
//@ts-ignore
import spinner from "./img/spinner.gif"

function App() {
  // Не был уверен, можно ли было использовать redux
  // поэтому использовал локальный стейт
  const [carsData, setCarsData] = useState<CarsDataType>({} as CarsDataType)
  // Список всех марок
  const [marks, setMarks] = useState<MarkType[]>()
  // Выбранная марка
  const [selectedMark, setSelectedMark] = useState('')
  // Список моделей которые будут в select'e
  const [models, setModels] = useState<string[]>()
  // Список выбранных моделей
  const [selectedModels, setSelectedModels] = useState<string[]>()
  const [loading, setLoading] = useState(false)

  const getCarsData = async () => {
    setLoading(true)
    let data 
    if (selectedModels) {
      data = await getCars(20, 0, selectedMark, selectedModels?.join(','))
    } else if (selectedMark){
      data = await getCars(20, 0, selectedMark)
    } else {
      data = await getCars(20, 0)
    }
    setCarsData(data)
    setLoading(false)
  }

  const getMarksData = async () => {
    const data = await getMarks()
    setMarks(data)
  }

  useEffect(() => {
    getCarsData()
  }, [selectedMark, selectedModels])

  useEffect(() => {
    getMarksData()
  }, [])

  return (
    <div className="App">
      <Marks
        marks={marks!}
        selectedMark={selectedMark}
        setSelectedMark={setSelectedMark}
        setSelectedModels={setSelectedModels}
        setLoading={setLoading}
        setModels={setModels}
      />

      <div>Модель:</div>

      <div className='select__wrapper'>
        <MySelect
          models={models!}
          selectedModels={selectedModels!}
          setSelectedModels={setSelectedModels}
          setLoading={setLoading}
        />
      </div>

      {
        loading
          ? <img
            className="spinner"
            src={spinner}
          />
          : <MyTable dataSource={carsData.cars} />
      }


      <div className='pagination__wrapper'>
        <MyPagination
          selectedMark={selectedMark}
          selectedModels={selectedModels!}
          count={carsData.count}
          setLoading={setLoading}
          setCarsData={setCarsData}
        />
      </div>

    </div>
  );
}

export default App;
