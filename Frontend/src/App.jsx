import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Index from './Components/Home';
import SignIn from './Components/User/SignIn';
import SignUp from './Components/User/SignUp';
import Products from './Components/ProductPage/Products';
import SingleProduct from './Components/ProductPage/SingleProduct';
import Search from './Components/Search/Search';
import Help from './Components/Help';
import Checkout from './Components/Checkout';
import Payment from './Components/Payment';
import User from './Components/User/User';
import ContextProvider from './ContextProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/help' element={<Help />} />
          <Route path='/products' element={<Products />} />
          <Route path='/results' element={<SingleProduct />} />
          <Route path='/search' element={<Search />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/profile' element={<ContextProvider><User /></ContextProvider>} />
        </Routes><ToastContainer/>
      </BrowserRouter>
    </>
  )
}

export default App
