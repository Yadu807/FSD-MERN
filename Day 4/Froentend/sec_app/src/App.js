import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Data from './components/Data';
import AddEm from './components/AddEm';
import ViewEm from './components/ViewEm';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Data data={{ename:"",eage:"",eposition:"",esalary:""}} method= "post"/>}></Route>
        {/* <Route path='/a' element={<AddEm/>}></Route> */}
        <Route path='/v' element={<ViewEm/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
