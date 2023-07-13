import './index.scss';
import { useEffect, useState } from "react";
import { Marks } from "./Components/Marks";
// import { Table } from "./Components/Table";
import { MySelect } from './Components/Select';
import { MyPagination } from './Components/Pagination';
import { getCars } from "./api/getCars";
import { getMarks } from "./api/getMarks";
import { CarsDataType } from "./types/car";
import { MarkType } from "./types/mark";
import { MyTable } from './Components/Tabl';


function App() {

  const [carsData, setCarsData] = useState<CarsDataType>({} as CarsDataType)
  const [marks, setMarks] = useState<MarkType[]>()
  const [models, setModels] = useState<string[]>()
  const [selectedMark, setSelectedMark] = useState('')

  const getCarsData = async () => {
    const data = await getCars(20, 0)
    setCarsData(data)
  }

  const getMarksData = async () => {
    const data = await getMarks()
    setMarks(data)
  }

  useEffect(() => {
    getCarsData()
  }, [])

  useEffect(() => {
    getMarksData()
  }, [])

  return (
    <div className="App">
      <Marks
        marks={marks!}
        selectedMark={selectedMark}
        setSelectedMark={setSelectedMark}
        setModels={setModels}
        setCarsData={setCarsData}
      />

      <div>Модель:</div>

      <div className='select__wrapper'>
        <MySelect
          models={models!}
          selectedMark={selectedMark}
          setCarsData={setCarsData}
        />
      </div>

      <MyTable dataSource={carsData.cars} />


      <div className='pagination__wrapper'>
        <MyPagination
          selectedMark={selectedMark}
          models={models!}
          count={carsData.count}
          setCarsData={setCarsData}
        />
      </div>

    </div>
  );
}

export default App;
