import { Container } from "react-bootstrap";
import DatesCount from './component/DatesCount'
import DatesList from './component/DatesList'
import DatesAction from './component/DataActions'
function App() {



  return (
    <div className="font color-body">
      <Container className="py-5">
        <DatesCount />
        <DatesList />
        <DatesAction />
      </Container>
    </div>
  );
}

export default App;
