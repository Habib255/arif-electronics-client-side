
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import { ToastContainer } from 'react-toastify';
import Products from './Components/Products/Products';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ManageProducts from './Components/ManageProducts/ManageProducts';
import AddProduct from './Components/AddProduct/AddProduct';
import MyItems from './Components/MyItems/MyItems';


function App() {
  return (
    <div className="App ">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='products' element={<Products></Products>}></Route>
        <Route path='Register' element={<Register></Register>}></Route>
        <Route path='/manageproducts/:productId' element={<PrivateRoute><ManageProducts></ManageProducts></PrivateRoute>} />
        <Route path='addproduct' element={<PrivateRoute><AddProduct></AddProduct></PrivateRoute>}></Route>
        <Route path='myitems' element={<PrivateRoute><MyItems></MyItems></PrivateRoute>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>


    </div>
  );
}

export default App;
