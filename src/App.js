import { useState } from "react";
import { Container } from "react-bootstrap";
import DatesCount from './component/DatesCount'
import DatesList from './component/DatesList'
import DatesAction from './component/DataActions'
import { person } from "./data";

function App() {
  const [personData, setPersonData] = useState(person)
  const onDeleteAll = () => {
    setPersonData([])
  }
  const onViewData = () => {
    setPersonData(person)
  }
  return (
    <div className="font color-body">
      <Container className="py-5">
        <DatesCount person={personData} />
        <DatesList person={personData} />
        <DatesAction deleteAllData={onDeleteAll} onViewData={onViewData} />
      </Container>
    </div>
  );
}

export default App;
