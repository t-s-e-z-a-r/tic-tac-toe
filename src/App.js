import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from './components/Table';

function App() {
  return (
    <div>
      <h1 className="text-center">Tic tac toe</h1>
      <div className='row'>
        <div className='col-3'>

        </div>
        <div className='col-6 border border-primary'>
          <Table/>  
        </div>
      </div>
    </div>
  );
}

export default App;
