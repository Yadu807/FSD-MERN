import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup';
import NavBar from './Components/NavBar';
import Register from './Components/Register';
import { Route, Routes } from 'react-router-dom';
import StateBasics from './Components/StateBasics';
import Add from './Components/Add';
import ListMap from './Components/ListMap';
import Api from './Components/Api';
import SampleUse from './Components/SampleUse';
import GetCard from './Components/GetCard';


function App() {
  return (
    <div className="App">
     
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Register ></Register>}></Route>
        <Route path='/sin' element={<Signup/>}></Route>
        <Route path='/sb' element={<StateBasics></StateBasics>}></Route>
        <Route path='/ad' element={<Add/>}></Route>
        <Route path='/lm' element={<ListMap/>}></Route>
        <Route path='/ap' element={<Api/>}></Route>
        <Route path='/su' element={<SampleUse/>}></Route>
        <Route path='/gc' element={<GetCard/>}></Route>
      </Routes>
      
      

    </div>
  );
}

export default App;
