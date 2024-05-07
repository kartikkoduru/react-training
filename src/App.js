import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './NavigationBar';
import Login from './Login';
import SignUp from './SignUp';
import CakeList from './CakeList';
import CakeDetails from './CakeDetails';
import Search from './Search';
import Checkout from './Checkout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <h1>Cake Gallary</h1>
        <Routes>
          <Route path='/' element={<CakeList />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/cake/:cakeid' element={<CakeDetails />}></Route>
          <Route path='/search' element={<Search />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
