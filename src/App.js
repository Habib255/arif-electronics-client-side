
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import ManageProducts from './Components/ManageProducts/ManageProducts';

import Register from './Components/Register/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Products from './Components/Products/Products';
import NotFound from './Components/NotFound/NotFound';
import AddProduct from './Components/AddProduct/AddProduct';
import ProtectRoute from './Components/ProtectRoute/ProtectRoute';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='products' element={<Products></Products>}></Route>
        <Route path='Register' element={<Register></Register>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='addProduct' element={
          <ProtectRoute><AddProduct></AddProduct></ProtectRoute>
        }></Route>
        <Route path='manageproducts' element={<ProtectRoute><ManageProducts></ManageProducts></ProtectRoute>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>

    </div>
  );
}

export default App;
